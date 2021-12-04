var express = require("express");
var router = express.Router();

const zamowienieController = require("../controllers/zamowienieController");

router.get("/", zamowienieController.showOrdersList);
router.get("/add", zamowienieController.showAddOrderForm);
router.get("/details/:orderId", zamowienieController.showOrderDetails);
router.get("/edit/:orderId", zamowienieController.showEditOrderForm);
router.post("/add", zamowienieController.addOrder);
router.post("/edit", zamowienieController.updateOrder);
router.get("/delete/:orderId", zamowienieController.deleteOrder);
module.exports = router;
