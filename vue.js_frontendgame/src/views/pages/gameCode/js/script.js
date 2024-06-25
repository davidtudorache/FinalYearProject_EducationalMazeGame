let map = levels[0];

let moves = 0;
let scores;
let playername = '';

let collBox = [];
let mapLength = map[0].length;
let mapHeight = map.length;

function calcScore() {
    let cmds = document.getElementById("command").value;
    let cmd = cmds.split(/[\n;]/); //checks if command is split by either /n or ;
    let cmdSize = cmd.length
    let bonus = 0;
    //loop that checks for loops and if statements in cmd code
    //awards points based on how many
    for (let i=0; i < cmd.length;i++) {
        if (cmd[i].startsWith("for") || cmd[i].startsWith("while")) {
            bonus +=5; //bonus 5 points for loops
        }
        else if (cmd[i].startsWith("if")) {
            bonus +=1; //bonus 1 points if statements
        }
    }
    let score = (1/moves) + (1/cmdSize) * 100 +(bonus*moves); //awards more points for less moves and code
    document.querySelector(".gameScore span").innerHTML = Math.round(score); 
}

function getTutorial(level) {
    let commandHistory = document.getElementById("consoleHistory");

    if (level === 1) {
        commandHistory.innerHTML += "Welcome to the first level <br>";
        commandHistory.innerHTML += "This simple level is designed to teach you how to play<br>";
        commandHistory.innerHTML += "To complete each level you must reach the chest<br>";
        commandHistory.innerHTML += "Use the command moveRight() to move right<br>";
    }
    if (level === 2) {
        commandHistory.innerHTML += "Welcome to the second level <br>";
        commandHistory.innerHTML += "This simple level is designed to teach you how to play<br>";
        commandHistory.innerHTML += "To complete each level you must reach the chest<br>";
        commandHistory.innerHTML += "Use the command moveDown() to move down<br>";
    }
    if (level === 3) {
        commandHistory.innerHTML += "Welcome to the third level <br>";
        commandHistory.innerHTML += "This simple level is designed to teach you how to play<br>";
        commandHistory.innerHTML += "To complete each level you must reach the chest<br>";
        commandHistory.innerHTML += "Use the command moveLeft() to move left<br>";
        commandHistory.innerHTML += "Use newline to issue multiple commands (press Enter)<br>";
        commandHistory.innerHTML += "Or put ';' after each command<br>";
    }
    if (level === 4) {
        commandHistory.innerHTML += "Welcome to the fourth level <br>";
        commandHistory.innerHTML += "This simple level is designed to teach you how to play<br>";
        commandHistory.innerHTML += "To complete each level you must reach the chest<br>";
        commandHistory.innerHTML += "Use the command moveUp() to move up<br>";
        commandHistory.innerHTML += "Use newline to issue multiple commands (press Enter)<br>";
        commandHistory.innerHTML += "Or put ';' after each command<br>";
    }
    if (level === 5) {
        commandHistory.innerHTML += "Welcome to the fifth level <br>";
        commandHistory.innerHTML += "This level is a little more complicated than the others<br>";
        commandHistory.innerHTML += "To complete each level you must reach the chest<br>";
        commandHistory.innerHTML += "To complete this level you can use a for loop<br>";
        commandHistory.innerHTML += "For Loop format: 'for(let i=0; i<15; i++){'<br>";
    }
    if (level === 6) {
        commandHistory.innerHTML += "Welcome to the sixth level <br>";
        commandHistory.innerHTML += "This level is much like the previous level<br>";
        commandHistory.innerHTML += "To complete each level you must reach the chest<br>";
        commandHistory.innerHTML += "To complete this level you can use two for loops<br>";
        commandHistory.innerHTML += "For Loop format: 'for(let i=0; i<15; i++){'<br>";
    }
    if (level === 7) {
        commandHistory.innerHTML += "Welcome to the seventh level <br>";
        commandHistory.innerHTML += "This level is the final tutorial level<br>";
        commandHistory.innerHTML += "To complete each level you must reach the chest<br>";
        commandHistory.innerHTML += "Try using if statements to complete level easier <br>";
        commandHistory.innerHTML += "If Statement format: 'if(i === 0){'<br>";
    }
}

function levelChange() {
    let levelSelected = document.getElementById("levelSelector").value;
    let newMap = levels[parseInt(levelSelected)-1];

    //clear game state
    moves=0;
    document.querySelector(".gameScore span").innerHTML = moves;
    document.querySelector(".winMessage").style.display = 'none';
    document.querySelector(".lossMessage").style.display = 'none';
    document.getElementById("consoleHistory").innerHTML = "";
    document.getElementById("highScore").style.display = 'none';
    document.getElementById("command").disabled = false;
    document.getElementById("submitBtn").disabled = false;

    //reset player pos properly
    player.x=0;
    player.y=0;
    //set Tutorial text if any
    getTutorial(parseInt(levelSelected));

    //New map
    map = newMap;
    collBox = [];
    drawMap(map);
    drawPlayer(player.x,player.y);
}

function getPlayerName(){
    playername = localStorage.getItem('username'); //gets username from local storage
}

function addToHighScore() {
    getPlayerName();
    let userID = parseInt(localStorage.getItem('user_id'));
    let levelOn = parseInt(document.getElementById("levelSelector").value)

    let playerScore = { 
        username: playername,
        user_id: userID,
        level: levelOn,
        score: moves
    };
    //send message to home.vue
    parent.postMessage({ type: 'addScore', score: playerScore}, '*');
    //show highscore
    showHighScore();
}

function showHighScore() {
    let highScr = document.getElementById('highScore');
    highScr.style.display = "block";
    let currentLevel = parseInt(document.getElementById("levelSelector").value);

    //clears existing scores
    highScr.innerHTML = "<h2>High Scores</h2>"


    //Checks that there is score and stops from adding repeated players
    if (scores && scores.length > 0) {
        let levelScores = scores.filter(score => score.level === currentLevel)
        let playerScore = { username: playername, score: moves};
        let scoresDisplayed = Math.min(levelScores.length, 10);
        let playerIndex =-1;

        //sort scores by score value (descending)
        levelScores.sort((a,b) => b.score - a.score);

        //loop to find where player score should go
        for (let i=0; i<scoresDisplayed;i++) {
            //if player is already on list
            if (playerScore.username === levelScores[i].username) {
                playerIndex = i;
                break;
            }
            //if player score is more than current score being added
            if (playerScore.score > levelScores[i].score) {
                playerIndex = i;
                break
            }
        }

        //if player not found and there is still space in top 10
        if (playerIndex ===-1 && levelScores.length < 10) {
            levelScores.push(playerScore);
        }
        //if player in list update position
        else if (playerIndex !== -1) {
            levelScores.splice(playerIndex, 1, playerScore);
        }

        //if list bigger than 10 remove the last result
        if (levelScores.length > 10) {
            levelScores.pop();
        }

        //display sorted scores
        for (let i=0; i<scoresDisplayed;i++) {
            highScr.innerHTML += levelScores[i].username + ':' +  levelScores[i].score + '<br>';
        }
    }
}

function help() {
    const commandHistory = document.getElementById("consoleHistory");
    commandHistory.innerText += "moveRight(); to move right\n";
    commandHistory.innerText += "moveDown(); to move down\n";
    commandHistory.innerText += "moveLeft(); to move left\n";
    commandHistory.innerText += "moveUp(); to move up\n";
}

function handleSubmit() {
    const command = document.getElementById("command").value;
    const commandHistory = document.getElementById("consoleHistory");

    if (command === "help()" || command === "help();") {
        help();
    }
    else {
        try {
            eval(command);
        }
        catch (error) {
            commandHistory.innerHTML += error + "\n"
        }
        
        commandHistory.innerText += command + "\n"; //add command to history
    
        document.getElementById("command").disabled = true; //disable text area
        document.getElementById("submitBtn").disabled = true; //disable text area
    
        if (document.querySelector(".winMessage").style.display != "block") {
            document.querySelector(".lossMessage").style.display = "block";
        }
    }  
}

window.onload = function(){
    drawMap(map);
    drawPlayer(0, 0);
    getPlayerName();
    getTutorial(1);
}

//looks for scores array
window.addEventListener('message', function(event){
    if (event.data && event.data.scores) {
        //Parse JSON back to array
        scores = JSON.parse(event.data.scores);
    }
})