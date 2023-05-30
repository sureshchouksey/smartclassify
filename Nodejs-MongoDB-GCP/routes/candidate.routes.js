var Candidate = require('../controllers/candidate');

module.exports = function (app) {
    //console.log(app);
    app.route('/candidate')
        .get(Candidate.getAll)
        .post(Candidate.update)
        .put(Candidate.update);
}