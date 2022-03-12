import React, {useState, useEffect} from "react";
import Square from "./square";

const Board = () => {
    const [nextPlayer, setNextPlayer] = useState("X");
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState("");
    const [gameDraw, setGameDraw] = useState(false);
    const squareClick = (i) => {
        let newSquare = [...squares];
        if(calculateWinner() || squares[i]){
            return;
        }
        newSquare[i] = nextPlayer;
        setSquares(newSquare);
        setNextPlayer(nextPlayer === "X" ? "0" : "X");
    }

    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return squares[a];
            }
        }
        return null;
    }

    const draw = () => {
        const length = squares.filter((square) => square === null).length
        length === 0 ? setGameDraw(true) : setGameDraw(false);
    }

    useEffect(() => {
        calculateWinner();
        draw();
    }, [squares])

    const restart = () => {
        setNextPlayer("X");
        setSquares(Array(9).fill(null));
    }
    return (
        <div className="container">
            <h3>
            {
                winner !== ""
                ? `${winner} Won`
                : gameDraw
                ? "MATCH DRAW"
                : `Next Player: ${nextPlayer}`
            }
            <button onClick={restart}>Restart Now</button>
            </h3>
            <div className="">
                <Square value={squares[0]} onClick={() => squareClick(0)}/>
                <Square value={squares[1]} onClick={() => squareClick(1)}/>
                <Square value={squares[2]} onClick={() => squareClick(2)}/>
            </div>
            <div className="">
                <Square value={squares[3]} onClick={() => squareClick(3)}/>
                <Square value={squares[4]} onClick={() => squareClick(4)}/>
                <Square value={squares[5]} onClick={() => squareClick(5)}/>
            </div>
            <div className="">
                <Square value={squares[6]} onClick={() => squareClick(6)}/>
                <Square value={squares[7]} onClick={() => squareClick(7)}/>
                <Square value={squares[8]} onClick={() => squareClick(8)}/>
            </div>
        </div>
    )
}

export default Board;