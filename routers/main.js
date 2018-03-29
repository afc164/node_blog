/**
 * Created by MingYue.Zhang on 2018/3/28.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.render('main/index');
})

module.exports = router;