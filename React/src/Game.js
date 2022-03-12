import React from "react";
import Board from "./components/board";
import './game.css';

const Game = () => {
    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <h1>Tic Tac Toe</h1>
                <Board />
            </div>
        </div>
    )
}

export default Game;