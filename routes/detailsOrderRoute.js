var express = require('express');
var router = express.Router();

const orderDetailsController = require('../controllers/szczegolyZamowieniaController');

router.get('/', orderDetailsController.showOrderDetailsList);
router.get('/add', orderDetailsController.showAddOrderDetailsList);
router.get('/details/:orderDetailsId', orderDetailsController.showOrderDetailsDetails);
router.get('/edit/:orderDetailsId',orderDetailsController.editOrderDetails);

module.exports = router;