const ProductsRepository = require("../repository/sequelize/ProductsRepository");

const OrdersRepository = require("../repository/sequelize/OrdersRepository");

exports.showOrdersList = (req, res, next) => {
  OrdersRepository.getOrders().then((orders) => {
    res.render("pages/Zamowienie/list", {
      orders: orders,
      navLocation: "order",
    });
  });
};

exports.showAddOrderList = (req, res, next) => {
  res.render("pages/Zamowienie/form", { navLocation: "order" });
};

exports.showOrderDetails = (req, res, next) => {
  res.render("pages/SczegolyZamowienia/szegolyZamowienia", {
    navLocation: "order",
  });
};

exports.editOrder = (req, res, next) => {
  res.render("pages/Zamowienie/form-edit", { navLocation: "order" });
};

exports.showAddOrderForm = (req, res, next) => {
  res.render("pages/Zamowienie/form", {
    orders: {},
    pageTitle: "Nowe zamowienie",
    formMode: "createNew",
    btnLabel: "Dodaj zamowienie",
    formAction: "/order/add",
    navLocation: "order",
    validationErrors: [],
  });
};

exports.showEditOrderForm = (req, res, next) => {
  const orderId = req.params.orderId;
  OrdersRepository.getOrderById(orderId).then((orders) => {
    res.render("pages/Zamowienie/form", {
      orders: orders,
      formMode: "edit",
      pageTitle: "Edycja zamowienia",
      btnLabel: "Edytuj zamowienie",
      formAction: "/order/edit",
      navLocation: "order",
      validationErrors: [],
    });
  });
};

exports.showOrderDetails = (req, res, next) => {
  const orderId = req.params.orderId;
  OrdersRepository.getOrderById(orderId).then((orders) => {
    res.render("pages/Zamowienie/form", {
      orders: orders,
      formMode: "showDetails",
      pageTitle: "Szczegóły zamownienia",
      formAction: "",
      navLocation: "order",
      validationErrors: [],
    });
  });
};

exports.addOrder = (req, res, next) => {
  const newOrderData = { ...req.body };
  OrdersRepository.createOrder(newOrderData).then((result) => {
    res.redirect("/order");
  })
  .catch((err)=>{
    res.render("pages/Zamowienie/form", {
      orders: newOrderData,
      pageTitle: "Nowe zamowienie",
      formMode: "createNew",
      btnLabel: "Dodaj zamowienie",
      formAction: "/order/add",
      navLocation: "order",
      validationErrors: err.errors,
    });
  })
};
exports.updateOrder = (req, res, next) => {
  const orderId = req.body._id;
  const orderData = { ...req.body };
  let error;
  OrdersRepository.updateOrder(orderId, orderData).then((result) => {
    res.redirect("/order");
  }).catch(err=>{
    error = err;
    return OrdersRepository.getOrderById(orderId)
  })
  .then((orders) =>{
    res.render("pages/Zamowienie/form", {
      orders: orders,
      formMode: "edit",
      pageTitle: "Edycja zamowienia",
      btnLabel: "Edytuj zamowienie",
      formAction: "/order/edit",
      navLocation: "order",
      validationErrors: error.errors,
    });
  })
};
exports.deleteOrder = (req, res, next) => {
  const orderId = req.params.orderId;
  OrdersRepository.deleteOrder(orderId).then(() => {
    res.redirect("/order");
  });
};
