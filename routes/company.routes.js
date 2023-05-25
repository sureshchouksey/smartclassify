var Company = require('../controllers/company');

module.exports = function (app) {
    //console.log(app);
    app.route('/company')
        .get(Company.getAll)
        .post(Company.update)
        .put(Company.update);
    app.route('/')
        .get(Company.home);
    app.route('/company/count')
        .get(Company.count);
    app.route('/company/search')
        .post(Company.searchCompany);
}