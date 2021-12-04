var express = require("express");
var router = express.Router();

const orderDetailsController = require("../controllers/szczegolyZamowieniaController");

router.get("/", orderDetailsController.showOrderDetailsList);
router.get("/add", orderDetailsController.showAddOrderDetailsForm);
router.get(
  "/details/:orderDetailsId",
  orderDetailsController.showOrderDetailsDetails
);
router.get(
  "/edit/:orderDetailsId",
  orderDetailsController.showEditOrderDetailsForm
);

router.post("/add", orderDetailsController.addOrderDetails);
router.post("/edit", orderDetailsController.updateOrderDetails);
router.get(
  "/delete/:orderDetailsId",
  orderDetailsController.deleteOrderDetails
);

module.exports = router;
