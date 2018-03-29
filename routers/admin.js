/**
 * Created by MingYue.Zhang on 2018/3/28.
 */
var express = require('express');
var router = express.Router();

router.get('/user',function (req,res,next) {
    res.send('User');
});

module.exports = router;