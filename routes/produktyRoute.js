var express = require('express');
var router = express.Router();

const produktyController = require('../controllers/produktyController');

router.get('/', produktyController.showProductList);
router.get('/add', produktyController.showAddProductsList);
router.get('/details/:prodId', produktyController.showProductsDetails);

module.exports = router;