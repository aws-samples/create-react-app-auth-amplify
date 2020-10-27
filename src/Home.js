import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgTriangle from '../images/bg-triangle.svg';
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";

function Home(props) {

    function playGame(e) {
        props.setPick(e.target.dataset.id);
    }

    return (
        <div className="home">
            <img className="triangle" src={bgTriangle}/>
            <Link to="/play">
                <div data-id="paper" className="home__item home__paper" style={{backgroundImage: `url(${paperIcon})`}} onClick={playGame} />
            </Link>
            <Link to="/play">
                <div data-id="scissors" className="home__item home__scissors" style={{backgroundImage: `url(${scissorsIcon})`}} onClick={playGame}/>
            </Link>
            <Link to="/play">
                <div data-id="rock" className="home__item home__rock" style={{backgroundImage: `url(${rockIcon})`}} onClick={playGame}/>
            </Link>
        </div>
    )
}

export default Home;