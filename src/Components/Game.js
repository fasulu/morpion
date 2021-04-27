import React from "react"
import Board from "./Board"
import audio from '../sound/cracker.mp3';

class Game extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ],
            status: 'Next player is: X',
            winner: "no"
        }
    }

    handleClick(i) {

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        squares[i] = this.state.xIsNext ? 'X' : 'O';

        const status = this.calculateWinner(squares)

        console.log("status", status);

        if (status.search("winner") === 4) { } else { }

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
                status = "It's a Draw Game "
            } else {
                status = "Next player is: "
            }

        }

        if (this.state.winner === "yes") {
            console.log("the winner is ", this.state.winner)
        }

        return status

    }

    playAudio = () => {
        new Audio(audio).play();
    }

    render() {

        console.log("test", this.state.status.indexOf("Next Player is"));

        if (this.state.status.indexOf("Next player is") === -1) {
            if (this.state.status === "The winner is O" || this.state.status === "The winner is X") {
                return (
                    <div id="image-vainquer" className="container-fluid" >
                        <h1 className="player">{this.state.status}</h1>
                        <div className="rounded mx-auto d-block" >
                            <img onMouseMove={this.playAudio} src="https://p3.storage.canalblog.com/39/25/624677/127227270.gif "
                                alt="Gif feu d'artifice" />
                        </div>

                    </div>)
            } else {
                return <h1 className="player">{this.state.status}</h1>
            }

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