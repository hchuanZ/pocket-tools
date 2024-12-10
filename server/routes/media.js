// 多媒体相关（比如直播录播的查询）

var express = require('express');
var router = express.Router();

router.get('/main', function(req, res, next) {
  res.send({info: '111'})
});


module.exports = router;