var Data = require('../controllers/data');

module.exports = function (app) {
    //console.log(app);
    app.route('/addData')
        .get(Data.addData)
    app.route('/changeData')
        .get(Data.changeData)
    app.route('/readData')
        .get(Data.readData)
    app.route('migrateData')
        .get(Data.migrateData)
}