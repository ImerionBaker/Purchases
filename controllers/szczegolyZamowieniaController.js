exports.showOrderDetailsList = (req, res, next) => {
  res.render("pages/SczegolyZamowienia/list", { navLocation: "orderDetails" });
};

exports.showAddOrderDetailsList = (req, res, next) => {
  res.render("pages/SczegolyZamowienia/form", { navLocation: "orderDetails" });
};

exports.showOrderDetailsDetails = (req, res, next) => {
  res.render("pages/SczegolyZamowienia/szegolyZamowienia", {
    navLocation: "orderDetails",
  });
};

exports.editOrderDetails = (req, res, next) => {
  res.render("pages/SczegolyZamowienia/form-edit", {
    navLocation: "orderDetails",
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
        pageTitle: "Nowy produkt",
        btnLabel: "Dodaj produkt",
        formAction: "/orderDetails/add",
        navLocation: "orderDetails",
      });
    });
};
