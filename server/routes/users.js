var express = require('express');
var router = express.Router();
const userController = require('../controllers/userControllers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/getAllUsers', userController.getUsers)

router.post('/addUsers', userController.createUser)
module.exports = router;
