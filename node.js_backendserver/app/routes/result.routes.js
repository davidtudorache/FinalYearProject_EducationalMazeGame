const results = require("../controllers/result.controllers");
const auth = require("../lib/authentication")

module.exports = function(app){

    app.route("/results")
        .get(auth.isAuthenticated, results.getAll)
        .post(auth.isAuthenticated, results.create);

    app.route("/results/:test_id")
        .delete(auth.isAuthenticated, results.deleteResult);
}