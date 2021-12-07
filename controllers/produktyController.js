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
    validationErrors: [],
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
      validationErrors: [],
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
      validationErrors: [],
    });
  });
};



exports.addProduct = (req, res, next) => {
  const newProdData = { ...req.body };
  ProductsRepository.createProduct(newProdData)
    .then((result) => {
      res.redirect("/products");
    })
    .catch((err) => {
      res.render("pages/Produkty/form", {
        products: newProdData,
        pageTitle: "Nowy produkt",
        formMode: "createNew",
        btnLabel: "Dodaj produkt",
        formAction: "/products/add",
        navLocation: "products",
        validationErrors: err.errors,
      });
    });
};
exports.updateProduct = (req, res, next) => {
  const prodId = req.body._id;
  const prodData = { ...req.body };
  let error;
  ProductsRepository.updateProduct(prodId, prodData).then((result) => {
    res.redirect("/products");
  }).catch(err=>{
    error = err;
    return ProductsRepository.getProductById(prodId)
  })
  .then((products) =>{
    res.render("pages/Produkty/form", {
      products: products,
      formMode: "edit",
      pageTitle: "Edycja produktu",
      btnLabel: "Edytuj produkt",
      formAction: "/products/edit",
      navLocation: "products",
      validationErrors: error.errors,
    });
  })
};
exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  ProductsRepository.deleteProduct(prodId).then(() => {
    res.redirect("/products");
  });
};
