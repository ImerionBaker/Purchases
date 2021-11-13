exports.showProductList = (req, res, next) =>{
    res.render('pages/Produkty/list', {navLocation: 'products'});
    
}


exports.showAddProductsList = (req, res, next) =>{
    res.render('pages/Produkty/form', {navLocation: 'products'});
}

exports.showProductsDetails = (req, res, next) =>{
    res.render('pages/SczegolyZamowienia/szegolyZamowienia', {navLocation: 'products'});
}


