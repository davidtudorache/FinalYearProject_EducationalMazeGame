const db = require("../../database");

const getAllScores = (done) => {
    const results =[];

    db.each(
        "SELECT * FROM scores",
        [],
        (err, row) => {
            if(err) console.log("Something went wrong: " + err);

            results.push({
                score_id: row.score_id,
                user_id: row.user_id,
                username: row.username,
                level: row.level,
                score: row.score
            });
        },
        (err, num_rows) => {
            return done(err, num_rows, results);
        }
    )
}

const addNewScore = (score, done) => {

    const sql = 'INSERT INTO scores (user_id, username, level, score) VALUES (?,?,?,?)';
    let values = [score.user_id,score.username, score.level, score.score];

    db.run(
        sql,
        values,
        function(err){
            if(err) return done(err, null);

            return done(null, this.lastID);
        }
    )
}

const getSingleScore = (id, done) => {
    const sql = 'SELECT * FROM scores WHERE score_id=?'

    db.get(sql, [id], (err, row) => {
        if(err) return done(err)
        if(!row) return done(404)

        return done(null, {
            score_id: row.score_id,
            user_id: row.user_id,
            username: row.username,
            level: row.level,
            score: row.score
        })
    })
}

const deleteScore = (id, done) => {
    const sql = 'DELETE FROM scores WHERE score_id=?'

    db.run(sql, [id], (err) => {
        return done(err)
    })
}


module.exports = {
    getAllScores: getAllScores,
    addNewScore: addNewScore,
    getSingleScore: getSingleScore,
    deleteScore: deleteScore
}