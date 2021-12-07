const ProductsRepository = require("../repository/sequelize/ProductsRepository");

const OrdersRepository = require("../repository/sequelize/OrdersRepository");

const OrderDetailsRepository = require("../repository/sequelize/OrderDetailsRepository");

exports.showOrderDetailsList = (req, res, next) => {
  OrderDetailsRepository.getOrderDetails().then((orderdet) => {
    res.render("pages/SczegolyZamowienia/list", {
      orderdet: orderdet,
      navLocation: "orderDetails",
    });
  });
};

exports.showAddOrderDetailsForm = (req, res, next) => {
  let allProds, allOrders;
  ProductsRepository.getProducts()
    .then((prods) => {
      allProds = prods;
      return OrdersRepository.getOrders();
    })
    .then((orders) => {
      allOrders = orders;
      res.render("pages/SczegolyZamowienia/form", {
        orderDetails: {},
        formMode: "createNew",
        allProds: allProds,
        allOrders: allOrders,
        pageTitle: "Nowe szegóły zamowienia",
        btnLabel: "Dodaj szegóły zamowienia",
        formAction: "/orderDetails/add",
        navLocation: "orderDetails",
        validationErrors: [],
      });
    });
};

exports.showEditOrderDetailsForm = (req, res, next) => {
  const orderDetailsId = req.params.orderDetailsId;
  let allProds, allOrderDetails, allOrders;
  OrdersRepository.getOrders().then((orders) => {
    allOrders = orders;
  });
  ProductsRepository.getProducts().then((prods) => {
    allProds = prods;
  });
  OrderDetailsRepository.getOrderDetailsById(orderDetailsId).then(
    (orderDetails) => {
      allOrderDetails = orderDetails;
      res.render("pages/SczegolyZamowienia/form", {
        orderDetails: orderDetails,
        formMode: "edit",
        allProds: allProds,
        allOrders: allOrders,
        allOrderDetails: allOrderDetails,
        pageTitle: "Edycja szegół zamowienia",
        btnLabel: "Edytuj szegóły zamowienia",
        formAction: "/orderDetails/edit",
        navLocation: "orderDetails",
        validationErrors: [],
      });
    }
  );
};

exports.showOrderDetailsDetails = (req, res, next) => {
  const orderDetailsId = req.params.orderDetailsId;
  let allProds, allOrderDetails, allOrders;
  OrdersRepository.getOrders().then((orders) => {
    allOrders = orders;
  });
  ProductsRepository.getProducts().then((prods) => {
    allProds = prods;
  });
  OrderDetailsRepository.getOrderDetailsById(orderDetailsId).then(
    (orderDetails) => {
      allOrderDetails = orderDetails;
      res.render("pages/SczegolyZamowienia/form", {
        orderDetails: orderDetails,
        formMode: "showDetails",
        allProds: allProds,
        allOrders: allOrders,
        allOrderDetails: allOrderDetails,
        pageTitle: "Szczegóły zamowienia",
        formAction: "",
        navLocation: "orderDetails",
        validationErrors: [],
      });
    }
  );
};

exports.showAddOrderDetailsList = (req, res, next) => {
  res.render("pages/SczegolyZamowienia/form", { navLocation: "orderDetails" });
};

exports.editOrderDetails = (req, res, next) => {
  res.render("pages/SczegolyZamowienia/form-edit", {
    navLocation: "orderDetails",
  });
};

exports.addOrderDetails = (req, res, next) => {
  const newOrderDetailsData = { ...req.body };
  let error, allProds, allOrders;
  OrderDetailsRepository.createOrderDetails(newOrderDetailsData).then(
    (result) => {
      res.redirect("/orderDetails");
    })
    .catch(err => {
      error = err;
      return ProductsRepository.getProducts();
    })
    .then((prods) => {
      allProds = prods;
      return OrdersRepository.getOrders();
    })
    .then((orders) => {
      allOrders = orders;
      res.render("pages/SczegolyZamowienia/form", {
        orderDetails: {},
        formMode: "createNew",
        allProds: allProds,
        allOrders: allOrders,
        pageTitle: "Nowe szegóły zamowienia",
        btnLabel: "Dodaj szegóły zamowienia",
        formAction: "/orderDetails/add",
        navLocation: "orderDetails",
        validationErrors: error.errors,
      });
    });
};

exports.updateOrderDetails = (req, res, next) => {
  const orderDetailsId = req.body._id;
  const orderdetData = { ...req.body };
  let error;
  let allProds, allOrderDetails, allOrders;
  OrderDetailsRepository.updateOrderDetails(orderDetailsId, orderdetData).then(
    (result) => {
      res.redirect("/orderDetails");
    })
    .catch(err =>{
      error = err;
      return ProductsRepository.getProducts();
    })
    .then(products =>{
      allProds = products;
      return OrdersRepository.getOrders();
    })
    .then(orders =>{
      allOrders = orders;
      return OrderDetailsRepository.getOrderDetailsById(orderDetailsId);
    })
    .then(
      (orderDetails) => {
        allOrderDetails = orderDetails;
        res.render("pages/SczegolyZamowienia/form", {
          orderDetails: orderDetails,
          formMode: "edit",
          allProds: allProds,
          allOrders: allOrders,
          allOrderDetails: allOrderDetails,
          pageTitle: "Edycja szegół zamowienia",
          btnLabel: "Edytuj szegóły zamowienia",
          formAction: "/orderDetails/edit",
          navLocation: "orderDetails",
          validationErrors: error.errors,
        });
      }
    );
    

};
exports.deleteOrderDetails = (req, res, next) => {
  const orderDetailsId = req.params.orderDetailsId;
  OrderDetailsRepository.deleteOrderDetails(orderDetailsId).then(() => {
    res.redirect("/orderDetails");
  });
};
