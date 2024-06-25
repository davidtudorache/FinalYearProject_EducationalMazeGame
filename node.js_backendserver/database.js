const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err){
        console.log(err.message);
        throw err;
    }else{
        console.log('Connected to the SQLite database.')

        db.run(`CREATE TABLE users (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                username text UNIQUE,
                password text,
                salt text,
                session_token text,
                CONSTRAINT username_unique UNIQUE (username)
            )`, (err) => {
                if(err){
                    console.log('Users table already created');
                }else{
                    console.log('Users table created');
                }
            }
        )
        db.run(`CREATE TABLE scores (
                score_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER,
                username text,
                level INTEGER,
                score INTEGER,
                FOREIGN KEY (user_id) REFERENCES users(user_id),
                FOREIGN KEY (username) REFERENCES users(username)
            )`, (err) => {
                if(err){
                    console.log('Scores table already created');
                }else{
                    console.log('Scores table created');
                }
            }
        )
        db.run(`CREATE TABLE results (
            test_id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            date_taken INTEGER,
            score INTEGER,
            FOREIGN KEY (user_id) REFERENCES users(user_id)
        )`, (err) => {
            if(err){
                console.log('Results table already created');
            }else{
                console.log('Results table created');
            }
        }
    )
    }
});

module.exports = db;