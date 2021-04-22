import React from "react"
import Board from "./Board"


class Game extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ],
            status: 'Next player is: X'
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        const status = this.calculateWinner(squares)

        console.log("status", status);

        if (status === "Next player is: ") {
            this.setState({
                history: history.concat({
                    squares: squares
                }),
                status: status + (this.state.xIsNext ? 'O' : 'X'),
                xIsNext: !this.state.xIsNext,
                stepNumber: history.length
            });
        } else {
            this.setState({
                status: status,
                history: history.concat({
                    squares: squares
                }),
                stepNumber: history.length
            })
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,

        })
    }

    calculateWinner(squares) {
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

        let status = ''

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {

                status = "The winner is " + squares[a]

            }
        }

        if (status === '') {
            if (!squares.includes(null)) {
                status = "It's a draw"
            } else {
                status = "Next player is: "
            }
        }

        return status

    }

    render() {

        console.log("test", this.state.status.indexOf("Next Player is"));

        if (this.state.status.indexOf("Next player is") === -1) {
            return <h1 className="player">{this.state.status}  </h1>
        } else {

            const history = this.state.history

            const current = history[history.length - 1]

            return (

                <div className="game">
                    <div className="game-board">
                        <Board onClick={(i) => this.handleClick(i)}
                            squares={current.squares} />

                    </div>
                    <div className="game-info">

                        <div className="winner">{this.state.status}</div>

                    </div>

                </div>
            )
        }
    }

}

export default Game


















