const db = require("../../database");

const getAllResults = (done) => {
    const results =[];

    db.each(
        "SELECT * FROM results",
        [],
        (err, row) => {
            if(err) console.log("Something went wrong: " + err);

            results.push({
                test_id: row.test_id,
                user_id: row.user_id,
                date_taken: new Date(row.date_taken).toLocaleDateString(),
                score: row.score
            });
        },
        (err, num_rows) => {
            return done(err, num_rows, results);
        }
    )
}

const addNewResult = (result, done) => {

    let date = Date.now();
    const sql = 'INSERT INTO results (test_id, user_id, date_taken, score) VALUES (?,?,?,?)';
    let values = [result.test_id,result.user_id, date, result.score];

    db.run(sql, values,function(err){
            if(err) return done(err, null);

            return done(null, this.lastID);
        }
    )
}

const deleteResult = (id, done) => {
    const sql = 'DELETE FROM results WHERE test_id=?'

    db.run(sql, [id], (err) => {
        return done(err)
    })
}


module.exports = {
    getAllResults: getAllResults,
    addNewResult: addNewResult,
    deleteResult: deleteResult
}