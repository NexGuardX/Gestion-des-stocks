const updateAlimentaire = (req, res, next) => {
    res.locals.stockAlim = null;

    if (!req.session.stockAlim) {
        req.session.stockAlim = {};
        req.session.stockAlim['quantité'] = [];
    }

    if (req.session.cart && req.session.cart.products.length > 0) {
        res.locals.cart = req.session.cart;
    }

    next();
};

module.exports = initCart;