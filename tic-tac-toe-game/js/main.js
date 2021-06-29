import Game from "./Game.js";
import GameView from "./GameView.js";
let game = new Game();
let gameView = new GameView();

let tiles =  document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener('click', () =>{
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(index){
    game.makeMove(index);
    gameView.updateBoard(game);
}

document.querySelector(".restart").addEventListener('click', () =>{
    restartGame();
})

function restartGame(){
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);