exports.showOrderDetailsList = (req, res, next) =>{
    res.render('pages/SczegolyZamowienia/list', {navLocation: 'orderDetails'});
    
}


exports.showAddOrderDetailsList = (req, res, next) =>{
    res.render('pages/SczegolyZamowienia/form', {navLocation: 'orderDetails'});
}

exports.showOrderDetailsDetails = (req, res, next) =>{
    res.render('pages/SczegolyZamowienia/szegolyZamowienia', {navLocation: 'orderDetails'});
}

exports.editOrderDetails = (req, res, next) =>{
    res.render('pages/SczegolyZamowienia/form-edit', {navLocation: 'orderDetails'});
}


