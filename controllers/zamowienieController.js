exports.showOrdersList = (req, res, next) =>{
    res.render('pages/Zamowienie/list', {navLocation: 'order'});
    
}


exports.showAddOrderList = (req, res, next) =>{
    res.render('pages/Zamowienie/form', {navLocation: 'order'});
}

exports.showOrderDetails = (req, res, next) =>{
    res.render('pages/SczegolyZamowienia/szegolyZamowienia', {navLocation: 'order'});
}

exports.editOrder = (req, res, next) =>{
    res.render('pages/Zamowienie/form-edit', {navLocation: 'order'});
}
