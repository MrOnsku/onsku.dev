boardWidth = 8;
boardHeight = 8;

boardData = [];

class Tile {
    isMine = false;
}

for(let x = 0; x < boardWidth; x++){
    for(let y = 0; y < boardHeight; y++){
        document.writeln("<button class=\"sweepertile\"></button>");
        let tile = new Tile();
        let mineRandom = Math.floor(Math.random() * 100);
        if(mineRandom >= 80){
            tile.isMine = true;
        }
        boardData[x][y] = tile;
    }
    document.writeln("<div class=\"sweepertilebreak\"></div>");
}

console.log(boardData);