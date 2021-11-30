const ProductsRepository = require("../repository/sequelize/ProductsRepository");

const OrdersRepository = require("../repository/sequelize/OrdersRepository");

exports.showProductList = (req, res, next) => {
  ProductsRepository.getProducts().then((prods) => {
    res.render("pages/Produkty/list", {
      prods: prods,
      navLocation: "products",
    });
  });
};

exports.showAddProductsList = (req, res, next) => {
  res.render("pages/Produkty/form", { navLocation: "products" });
};

exports.editProduct = (req, res, next) => {
  res.render("pages/Produkty/form-edit", { navLocation: "products" });
};

// exports.showProductsDetails = (req, res, next) => {
//   res.render("pages/SczegolyZamowienia/szegolyZamowienia", {
//     navLocation: "products",
//   });
// };

exports.showAddProductsForm = (req, res, next) => {
  res.render("pages/Produkty/form", {
    products: {},
    pageTitle: "Nowy produkt",
    formMode: "createNew",
    btnLabel: "Dodaj produkt",
    formAction: "/products/add",
    navLocation: "products",
  });
};

exports.showEditProductsForm = (req, res, next) => {
  const prodId = req.params.prodId;
  ProductsRepository.getProductById(prodId).then((products) => {
    res.render("pages/Produkty/form", {
      products: products,
      formMode: "edit",
      pageTitle: "Edycja produktu",
      btnLabel: "Edytuj produkt",
      formAction: "/products/edit",
      navLocation: "products",
    });
  });
};

exports.showProductsDetails = (req, res, next) => {
  const prodId = req.params.prodId;
  ProductsRepository.getProductById(prodId).then((products) => {
    res.render("pages/Produkty/form", {
      products: products,
      formMode: "showDetails",
      pageTitle: "Szczegóły produktu",
      formAction: "",
      navLocation: "products",
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
        pageTitle: "Nowy produkt",
        btnLabel: "Dodaj produkt",
        formAction: "/orderDetails/add",
        navLocation: "orderDetails",
      });
    });
};

exports.addProduct = (req, res, next) => {
  const newProdData = { ...req.body };
  ProductsRepository.createProduct(newProdData).then((result) => {
    res.redirect("/products");
  });
};
exports.updateProduct = (req, res, next) => {
  const prodId = req.body._id;
  const prodData = { ...req.body };
  ProductsRepository.updateProduct(prodId, prodData).then((result) => {
    res.redirect("/products");
  });
};
exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  ProductsRepository.deleteProduct(prodId).then(() => {
    res.redirect("/products");
  });
};
