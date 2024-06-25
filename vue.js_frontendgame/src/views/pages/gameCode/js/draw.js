let c = document.getElementById('canvas');
let ctx = c.getContext('2d');
let tileSize = 50;

let wall = new Image();
wall.src = 'img/dungeonrock.png'

let professor = new Image();
professor.src = 'img/professor.png'

let chest = new Image();
chest.src = 'img/chest.png'

let floor = new Image();
floor.src = 'img/coal.png'

function drawMap(m) {
    for(i = 0; i < m.length; i++) {
        collBox.push([]);
        for(j = 0; j < m[i].length; j++) {
            if (m[i][j] === 1) {
                ctx.beginPath();
                //ctx.fillStyle = "#000000";
                //ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
                ctx.drawImage(wall, j * tileSize, i * tileSize, tileSize, tileSize);
            }
            else if (m[i][j] === 2) {
                ctx.beginPath();
                //ctx.fillStyle = "#00ff00";
                //ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
                ctx.drawImage(floor, j * tileSize, i * tileSize, tileSize, tileSize);
                ctx.drawImage(chest, j * tileSize, i * tileSize, tileSize, tileSize);
            }
            else {
                ctx.beginPath();
                ctx.drawImage(floor, j * tileSize, i * tileSize, tileSize, tileSize);
            }
            collBox[i].push({x: j*tileSize, y: i*tileSize, status: m[i][j] === 1 ? 1 : (m[i][j] === 2 ? 2 : 0)});
        }
    }
}

function drawPlayer(x, y){
    ctx.beginPath();
    //ctx.fillStyle = "#FF0000";
    //ctx.fillRect(x, y, tileSize, tileSize);
    ctx.drawImage(professor, x, y, tileSize, tileSize);
}