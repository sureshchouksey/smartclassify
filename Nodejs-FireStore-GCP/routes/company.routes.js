var Company = require('../controllers/company');

module.exports = function (app) {
    //console.log(app);
    app.route('/company')
        .get(Company.getAll)
    app.route('/company/count')
        .get(Company.count)
    app.route('/company/searchByCompanyName')
        .post(Company.searchByCompanyName)
    app.route('/company/searchByLocation')
        .post(Company.searchByLocation)
    
}