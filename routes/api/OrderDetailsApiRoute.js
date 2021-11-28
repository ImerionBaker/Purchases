const express = require("express");
const router = express.Router();

const orderDetailsApiController = require("../../api/OrderDetailsApi");

router.get("/", orderDetailsApiController.getOrderDetails);
router.get("/:orderDetailsId", orderDetailsApiController.getOrderDetailsById);
router.post("/", orderDetailsApiController.createOrderDetails);
router.put("/:orderDetailsId", orderDetailsApiController.updateOrderDetails);
router.delete("/:orderDetailsId", orderDetailsApiController.deleteOrderDetails);

module.exports = router;