
export default class Game{
    constructor(){
        console.log("Game Init");
        this.turn = "X"
        this.board = new Array(9).fill(null);
    }

    nextTurn(){
        if(this.turn ==="X") 
            this.turn = "O";
        else
            this.turn = "X";
    }

    makeMove(index){
        if(this.endOfGame()) return;
        if(this.board[index]) return;
        this.board[index] = this.turn;
        let winningCombination = this.findWinningCombinations();
        // console.log(`This is the winner ${winningCombination}`);
        if(!winningCombination){
            this.nextTurn();
        }
    }

    findWinningCombinations(){
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
        ];

        for(const combination of winningCombinations){
            const [a, b, c] = combination;
            if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                return combination;
            }
        }
        return null;
    }

    endOfGame(){
        let winningCombination = this.findWinningCombinations();
        if(winningCombination){
            return true;
        }
        return false;
    }
}