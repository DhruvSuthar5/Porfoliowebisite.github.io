const express = require('express');
const router = express.Router();

// first route -- this going to be get request
router.get('/', (req, res, next)=>{
    res.render('index',{
        title:'Home'
    })
})

router.get('/about', (req, res, next)=>{
    res.render('about',{title:'Dhruv Suthar'})
})

router.get('/contactus', (req, res, next)=>{
    res.render('contactus',{title:'Contact Us'})
})

router.get('/services', (req, res, next)=>{
    res.render('services',{title:'Services'})
})

module.exports = router;