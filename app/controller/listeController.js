const Liste = require('../models/liste');

module.exports = {

    async listPage(request, response) {
        try {
            const listes = await Liste.findAll({});
            response.render('home',{ listes })
        } catch (err) {
            console.error(err);
            response.status(500).send(err);
        }
    },
}