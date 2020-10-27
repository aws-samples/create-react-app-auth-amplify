import React, { useState } from "react";
import Modal from "./Modal";
import imageRules from '../images/image-rules.svg';
import closeIcon from "../images/x.svg"

function Footer() {

    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <div>
            <footer>
                <button onClick={toggleModal}>Rules</button>
                <p className="footer__message">Made with &hearts; in Melbourne, Australia by Peter Hanley</p>
            </footer>
            { showModal? (
                <Modal>
                    <div className="modal__header">
                        <h1>Rules</h1>
                        <button className="desktop__button" onClick={toggleModal}>
                            <img src={closeIcon} alt="Close Icon" />
                        </button>
                    </div>
                    <img src={imageRules} alt="Game Rules" />
                    <button className="mobile__button" onClick={toggleModal}>
                            <img src={closeIcon} alt="Close Icon" />
                    </button>
                </Modal>
            ) : null }
        </div>
    )
}

export default Footer;