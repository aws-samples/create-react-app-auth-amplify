import React from "react";
import Scorebox from "./Scorebox";

function Header(props) {
    return (
        <header>
            <h1 className="header__title">
                <span>Rock</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <Scorebox score={props.score}/>
        </header>
    )
}

export default Header;