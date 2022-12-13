//<div className="header">Memory is the new Black</div>
import React from 'react';

function Header(props) {
    const {score, highScore} = props;

    return (
        <div className="header">
            <div id="gamename">Memory is the new Black</div>
            <div className="scoreboard">
                <div id="highscore">Highscore: {highScore}</div>
                <div id="score">Current score: {score}</div>
            </div>
        </div>
    )
}

export default Header