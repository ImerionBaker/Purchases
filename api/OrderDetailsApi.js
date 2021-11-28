const OrderDetailsRepository = require("../repository/sequelize/OrderDetailsRepository");

exports.getOrderDetails = (req, res, next) => {
  OrderDetailsRepository.getOrderDetails()
    .then(orderDets => {
      res.status(200).json(orderDets);
    })
    .catch(err=> {
      console.log(err);
    });
};

exports.getOrderDetailsById = (req, res, next) => {
  const orderDetailsId = req.params.orderDetailsId;
  OrderDetailsRepository.getOrderDetailsById(orderDetailsId).then(orderDetails => {
    if (!orderDetails) {
      res.status(404).json({
        message: "Order details with id: " + orderDetailsId + " not found",
      });
    } else {
      res.status(200).json(orderDetails);
    }
  });
};

exports.createOrderDetails = (req, res, next) => {
  OrderDetailsRepository.createOrderDetails(req.body)
    .then(newObj => {
      res.status(201).json(newObj);
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateOrderDetails = (req, res, next) => {
  const orderDetailsId = req.params.orderDetailsId;
  OrderDetailsRepository.updateOrderDetails(orderDetailsId, req.body)
    .then(result => {
      res.status(200).json({ message: "Order details updated!", orderDetails: result });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteOrderDetails = (req, res, next) => {
  const orderDetailsId = req.params.orderDetailsId;
  OrderDetailsRepository.deleteOrderDetails(orderDetailsId)
    .then(result => {
      res.status(200).json({ message: "Remove order details", orderDetails: result });
    })
    .catch(err=> {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
