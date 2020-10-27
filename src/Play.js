import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";

function Play(props) {

    const myPick = props.mine;
    const housePick = props.house;
    const [countDown, setCountDown] = useState("3");
    const [playerPickElement, setPlayerElement] = useState("");
    const [housePickElement, setHouseElement] = useState("");
    const [resultMessage, setResultMessage] = useState("");

    const [playerWins, setPlayerWins] = useState(false);
    const [houseWins, setHouseWins] = useState(false);

    function chooseWinner() {
        if (myPick === "rock" && housePick === "scissors") {
            setPlayerWins(true);
            setHouseWins(false);
        } else if (myPick === "rock" && housePick === "paper") {
            setHouseWins(true);
            setPlayerWins(false);
        } else if (myPick === "scissors" && housePick === "paper") {
            setPlayerWins(true);
            setHouseWins(false);
        } else if (myPick === "scissors" && housePick === "rock") {
            setHouseWins(true);
            setPlayerWins(false);
        } else if (myPick === "paper" && housePick === "rock") {
            setPlayerWins(true);
            setHouseWins(false);
        } else if (myPick === "paper" && housePick === "scissors") {
            setHouseWins(true);
            setPlayerWins(false);
        } else {
            setHouseWins(false);
            setPlayerWins(false);
        }
    }

    function showWinner() {

        const currentScore = props.score;

        if (playerWins) {
            props.setScore(currentScore + 1);
            setResultMessage("You Win");
        } else if (houseWins) {
            props.setScore(currentScore - 1);
            setResultMessage("You Lose");
        } else {
            setResultMessage("Draw");
        }
    }

    function setMyPickIcon(pick) {
        if (pick === "rock") {
            return rockIcon;
        } else if (pick === "paper") {
            return paperIcon;
        } else if (pick === "scissors") {
            return scissorsIcon;
        }
    }

    function setMyPickClass(pick) {
        if (pick === "rock") {
            return "pick__rock";
        } else if (pick === "paper") {
            return "pick__paper";
        } else if (pick === "scissors") {
            return "pick__scissors";
        }
    }

    useEffect(() => {

        chooseWinner();

        setTimeout(() => (setCountDown("2")), 500);
        setTimeout(() => (setCountDown("1")), 1000);
        setTimeout(() => {
            setHouseElement(
                <div className="pick">
                    <div className="result__desktop pick__title">The House Picked {housePick}</div>
                    <div className={"pick__item " + (houseWins? "winner " : "") + setMyPickClass(housePick)} style={{backgroundImage: `url(${setMyPickIcon(housePick)}`}}></div>
                    <div className="result__mobile pick__title">The House Picked {housePick}</div>
                </div>
            );
            setPlayerElement(
                <div className="pick">
                    <div className="result__desktop pick__title">You Picked {myPick}</div> 
                    <div className={"pick__item " + (playerWins? "winner " : "") + setMyPickClass(myPick)} style={{backgroundImage: `url(${setMyPickIcon(myPick)}`}}></div>   
                    <div className="result__mobile pick__title">You Picked {myPick}</div> 
                </div>
            )
            showWinner();
        },1500);
    }, [setHouseElement, setCountDown, houseWins, playerWins])

    return (
        <div className="play-wrapper">
            {playerPickElement? playerPickElement : 
                <div className="pick">
                    <div className="result__desktop pick__title">You Picked {myPick}</div> 
                    <div className={"pick__item " + setMyPickClass(myPick)} style={{backgroundImage: `url(${setMyPickIcon(myPick)}`}}></div>   
                    <div className="result__mobile pick__title">You Picked {myPick}</div> 
                </div>
            }
            <div className={"result__desktop game__result " + (resultMessage.length? "" : "invisible")}>
                <h3>{resultMessage}</h3>
                <Link className="play-again__button " to="/" onClick={()=>(props.setHousePick())}>Play Again</Link>
            </div>
            {housePickElement? housePickElement : 
                <div className="pick">
                    <div className="pick__title result__desktop">The House Picked:</div>
                    <div className="pick__item" ><span>{countDown}</span></div>
                    <div className="pick__title result__mobile">The House Picked:</div>
                </div>
            }
            <div className={"result__mobile game__result " + (resultMessage.length? "" : "invisible")}>
                <h3>{resultMessage}</h3>
                <Link className="play-again__button " to="/" onClick={()=>(props.setHousePick())}>Play Again</Link>
            </div>
        </div>
    )
}

export default Play;