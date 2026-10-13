boardWidth = 8;
boardHeight = 8;

boardData = [];

class Tile {
    isMine = false;
    neighboringMines = 0;
    revealed = false;
}

//generate board data
for(let y = 0; y < boardHeight; y++){
    boardData[y] = [];
    for(let x = 0; x < boardWidth; x++){
        let tile = new Tile();

        let mineRandom = Math.floor(Math.random() * 100);
        if(mineRandom <= 10){
            tile.isMine = true;
        }

        boardData[y][x] = tile;
    }
}

//run neighbor check
for(let y = 0; y < boardHeight; y++){
    for(let x = 0; x < boardWidth; x++){
        let curTile = boardData[y][x];

        if(curTile.isMine) continue;

        for(let dy = -1; dy <= 1; dy++){
            for(let dx = -1; dx <= 1; dx++){
                if(dx == 0 && dy == 0) continue;

                let nx = x + dx;
                let ny = y + dy;

                if(nx >= 0 && nx < boardWidth && ny >= 0 && ny < boardHeight){
                    if(boardData[ny][nx].isMine){
                        curTile.neighboringMines++;
                    }
                }
            }
        }
    }
}

UpdateBoard();

function UpdateBoard(){
    let boardContainer = document.querySelector(".sweepercontainer");
    boardContainer.innerHTML = "";

    for(let y = 0; y < boardHeight; y++){
        for(let x = 0; x < boardWidth; x++){
            let curTile = boardData[y][x];
            let button = document.createElement("button");

            button.className = "sweepertile";
            button.onclick = () => RevealTile(x, y);

            if(curTile.revealed){
                button.classList.add("sweepertilerevealed");
                if(curTile.neighboringMines > 0){
                    button.textContent = curTile.neighboringMines;
                    switch(curTile.neighboringMines){
                        case 1:
                            button.style.color = "#0000FF";
                            break;

                        case 2:
                            button.style.color = "#008000";
                            break;

                        case 3:
                            button.style.color = "#FF0000";
                            break;

                        case 4:
                            button.style.color = "#000080";
                            break;

                        case 5:
                            button.style.color = "#800000";
                            break;

                        case 6:
                            button.style.color = "#008080";
                            break;

                        case 7:
                            button.style.color = "#000000";
                            break;

                        case 8:
                            button.style.color = "#808080";
                            break;
                    }
                }
            }

            boardContainer.appendChild(button);
        }
        let breakDiv = document.createElement("div");
        breakDiv.className = "sweepertilebreak";
        boardContainer.appendChild(breakDiv);
    }
}

function RevealTile(x, y){
    console.log("reveal " + x + " " + y);
    FloodFill(x, y);
    UpdateBoard();
}

function FloodFill(x, y){
    let curTile = boardData[y][x];
    curTile.revealed = true;
    
}

console.log(boardData);