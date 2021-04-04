var express = require('express')
var router = express.Router();

router.get('/',(req,res) => {
    res.render('index',{postList : []})//index.js 보여줌 postList 를 통해서 게시물 정보 보여줌
})

module.exports = router;