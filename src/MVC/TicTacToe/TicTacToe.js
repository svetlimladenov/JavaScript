import Event from "./Event.js";

// the model part of the MVC

class TicTacToe {
    constructor() {
        this.board = Array(9).fill();
        this.currentPlayer = "X";
        this.finished = false;

        this.updateCellEvent = new Event(); // triggered when the content of a cell in the board changes, the event sends the cell number and its new content
        this.victoryEvent = new Event(); // triggered when a play wins, will send the symbol of the winner
        this.drawEvent = new Event(); // triggered when the game is draw
    }

    play(move) {
        if (this.finished || move < 0 || move > 8 || this.board[move]) {
            return false;
        }

        this.board[move] = this.currentPlayer;
        this.updateCellEvent.trigger({ move, player: this.currentPlayer });

        this.finished = this.victory() || this.draw();

        if (!this.finished) {
            this.switchPlayer();
        }

        return true;
    }

    victory() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const victory = lines.some(
            (l) =>
                this.board[l[0]] &&
                this.board[l[0]] === this.board[l[1]] &&
                this.board[l[1]] === this.board[l[2]]
        );

        if (victory) {
            this.victoryEvent.trigger(this.currentPlayer);
        }

        return victory;
    }

    draw() {
        const draw = this.board.every((i) => i);

        if (draw) {
            this.drawEvent.trigger();
        }

        return draw;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
}

export default TicTacToe;
