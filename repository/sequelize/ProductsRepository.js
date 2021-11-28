const Order = require("../../model/sequelize/Order");
const OrderDetails = require("../../model/sequelize/OrderDetails");
const Products = require("../../model/sequelize/Products");

exports.getProducts = () => {
  return Products.findAll();
};

exports.getProductById = (prodId) => {
  return Products.findByPk(prodId, {
    include: [
      {
        model: OrderDetails,
        as: "orderdetails",
        include: [
          {
            model: Order,
            as: "order",
          },
        ],
      },
    ],
  });
};

exports.createProduct = (newProdData) => {
  return Products.create({
    productName: newProdData.productName,
    description: newProdData.description,
    productCode: newProdData.productCode,
  });
};
exports.updateProduct = (prodId, prodData) => {
  const productName = prodData.productName;
  const description = prodData.description;
  const productCode = prodData.productCode;
  return Products.update(prodData, { where: { _id: prodId } });
};

exports.deleteProduct = (prodId) => {
  return Products.destroy({
    where: { _id: prodId },
  });
};
