var express = require('express')
var router = express.Router();

router.get('/upload',(req,res) => {
    res.render('upload')
})

router.get('/update',(req,res) => {
    res.render('update')
})

router.get('/:id',(req,res) => {
    res.render('detail')
})

router.get("/update/:id", (req,res) => {
    res.render('update')
});

module.exports = router;