const scores = require("../controllers/score.controllers");
const auth = require("../lib/authentication")

module.exports = function(app){

    app.route("/scores")
        .get(scores.getAll)
        .post(auth.isAuthenticated, scores.create);

    app.route("/scores/:score_id")
        .get(scores.getOne)
        .delete(auth.isAuthenticated, scores.deleteScore);
}