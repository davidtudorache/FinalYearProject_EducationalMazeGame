let player = {
    x: 0,
    y: 0,
    newX: 0,
    newY: 0
}

function move(x, y) {
    ctx.clearRect(0,0,mapLength*tileSize,mapHeight*tileSize);

    drawMap(map);
    drawPlayer(x,y);

    player.x = player.newX;
    player.y = player.newY;

    moves= moves+1;
    calcScore();
}

function moveRight() {
    player.newX = player.x+tileSize; 
    player.newY = player.y;
    checkColl();
}

function moveDown() {
    player.newY = player.y+tileSize; 
    player.newX = player.x; 
    checkColl();
}

function moveUp() {
    player.newY = player.y-tileSize; 
    player.newX = player.x;
    checkColl();
}

function moveLeft() {
    player.newX = player.x-tileSize; 
    player.newY = player.y;
    checkColl();
}

function checkColl(){
    const commandHistory = document.getElementById("consoleHistory");
    let repeat = false;
    let win = false; //win stops from crashing if win cond is at bottom
    
    for(i=0; i<mapHeight; i++) {
        for(j=0; j<mapLength; j++) {
            let b = collBox[i][j];

            if(player.newX === b.x && player.newY === b.y) {
                if(b.status === 1) {
                    console.log('Hit rock');  
                    
                }
                else if(b.status === 2) {
                    move(player.newX, player.newY);
                    document.querySelector(".winMessage").style.display = "block";
                    addToHighScore();
                    //stop it from crashing when bottom reeached
                    win = true;
                    break;
                }
                else {
                    move(player.newX, player.newY);
                }
            }
            else if(player.newX < 0 || player.newX >= mapLength*tileSize || player.newY < 0 || player.newY >= mapHeight*tileSize) {
                console.log('Hit wall');   
            }
        }
        if (win) break; //stop it from crashing when bottom reeached
    }
}