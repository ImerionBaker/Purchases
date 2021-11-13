var express = require('express');
var router = express.Router();

const zamowienieController = require('../controllers/zamowienieController');

router.get('/', zamowienieController.showOrdersList);
router.get('/add', zamowienieController.showAddOrderList);
router.get('/details/:orderId', zamowienieController.showOrderDetails);
router.get('/edit/:orderId', zamowienieController.editOrder);

module.exports = router;