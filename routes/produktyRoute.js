var express = require("express");
var router = express.Router();

const produktyController = require("../controllers/produktyController");

router.get("/", produktyController.showProductList);
router.get("/add", produktyController.showAddProductsForm);
router.get("/details/:prodId", produktyController.showProductsDetails);
router.get("/edit/:prodId", produktyController.showEditProductsForm);
router.post("/add", produktyController.addProduct);
router.post("/edit", produktyController.updateProduct);
router.get("/delete/:prodId", produktyController.deleteProduct);
module.exports = router;
