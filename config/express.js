const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser') 
const compress = require('compression')
const methodOverride = require('method-override');

module.exports = () => {
        const app = express();
        // we are going to develop this app obejct for app and web environment
    
        if(process.env.NODE_ENV === 'development'){
            app.use(morgan('dev'));
        }else if(process.env.NODE_ENV === 'production'){
            app.use(compress()) //This dependency on the morgan so it basically act same as morgan
        }

        app.use(bodyParser.urlencoded({ // this encode the paths or route or URL 
            extended:true
        }))
        
        app.use(bodyParser.json());
        app.use(methodOverride());

        // NOw to set the global variables
        app.set('views','./app/views');
        app.set('view engine','ejs');

        app.use('/', require('../app/routes/index.server.route'));  // Any reques that has / will follow this path
        app.use(express.static('./public'));
        app.use(express.static('./node_modules'));
        // we store all the data in this app object

        return app;

    };

    // {} this symbol is json object