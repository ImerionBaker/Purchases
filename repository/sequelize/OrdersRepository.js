const Orders = require("../../model/sequelize/Order");
const OrderDetails = require("../../model/sequelize/OrderDetails");
const Products = require("../../model/sequelize/Products");

exports.getOrders = () => {
  return Orders.findAll();
};

exports.getOrderById = (orderId) => {
  return Orders.findByPk(orderId, {
    include: [
      {
        model: OrderDetails,
        as: "orderdetails",
        include: [
          {
            model: Products,
            as: "products",
          },
        ],
      },
    ],
  });
};

exports.createOrder = (newOrderData) => {
  return Orders.create({
    orderDate: newOrderData.orderDate,
    customerFirstName: newOrderData.customerFirstName,
    customerLastName: newOrderData.customerLastName,
    deliveryAddress: newOrderData.deliveryAddress,
  });
};
exports.updateOrder = (orderId, orderData) => {
  const orderDate = orderData.orderDate;
  const customerFirstName = orderData.customerFirstName;
  const customerLastName = orderData.customerLastName;
  const deliveryAddress = orderData.deliveryAddress;
  return Orders.update(orderData, { where: { _id: orderId } });
};

exports.deleteOrder = (orderId) => {
  return Orders.destroy({
    where: { _id: orderId },
  });
};
