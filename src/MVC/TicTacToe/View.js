import Event from "./Event.js";

class View {
    constructor() {
        this.playEvent = new Event();
    }

    render() {
        const board = document.createElement("div");
        board.className = "board";

        this.cells = Array(9)
            .fill()
            .map((_, i) => {
                const cell = document.createElement("div");
                cell.className = "cell";

                cell.addEventListener("click", () => {
                    this.playEvent.trigger(i);
                });

                board.appendChild(cell);

                return cell;
            });

        this.message = document.createElement("div");
        this.message.className = "message";

        document.body.appendChild(board);
        document.body.appendChild(this.message);
    }

    // The view also has three other methods: updateCell, victory and draw.

    // The name of the methods are pretty self-explanatory, and each corresponds
    // to an event triggered by the model, the communication between
    // the two will be handled by the controller.

    updateCell(data) {
        this.cells[data.move].innerHTML = data.player;
    }

    victory(winner) {
        this.message.innerHTML = `${winner} wins!`;
    }

    draw() {
        this.message.innerHTML = "It's a draw!";
    }
}

export default View;
