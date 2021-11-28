const Sequelize = require("sequelize");

const Orders = require("../../model/sequelize/Order");
const OrderDetails = require("../../model/sequelize/OrderDetails");
const Products = require("../../model/sequelize/Products");

exports.getOrderDetails = () => {
  return OrderDetails.findAll({
    include: [
      {
        model: Orders,
        as: "order",
      },
      {
        model: Products,
        as: "products",
      },
    ],
  });
};

exports.getOrderDetailsById = (orderdetailsId) => {
  return OrderDetails.findByPk(orderdetailsId, {
    include: [
      {
        model: Orders,
        as: "order",
      },
      {
        model: Products,
        as: "products",
      },
    ],
  });
};

exports.createOrderDetails = (data) => {
  console.log(JSON.stringify(data));
  return OrderDetails.create({
    orders_id: data.orders_id,
    products_id: data.products_id,
    cost: data.cost,
    discount: data.discount,
    amount: data.amount,
    comments: data.comments,
  });
};
exports.updateOrderDetails = (orderdetailsId, data) => {
  return OrderDetails.update(data, { where: { _id: orderdetailsId } });
};

exports.deleteOrderDetails = (orderdetailsId) => {
  return OrderDetails.destroy({
    where: { _id: orderdetailsId },
  });
};

exports.deleteManyOrderDetails = (orderdetailsIds) => {
  return OrderDetails.find({ _id: { [Sequelize.Op.in]: orderdetailsIds } });
};
