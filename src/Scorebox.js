import React from "react";

function Scorebox(props) {
    return (
        <div className="scorebox">
            <div className="scorebox__title">Score</div>
            <div className="scorebox__score">{props.score}</div>
        </div>
    )
}

export default Scorebox;