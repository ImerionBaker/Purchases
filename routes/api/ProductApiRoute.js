const express = require("express");
const router = express.Router();

const prodApiController = require("../../api/ProductAPI");

router.get("/", prodApiController.getProducts);
router.get("/:prodId", prodApiController.getProductById);
router.post("/", prodApiController.createProduct);
router.put("/:prodId", prodApiController.updateProduct);
router.delete("/:prodId", prodApiController.deleteProduct);

module.exports = router;
