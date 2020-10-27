import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal ({children}) {
    const elRef = useRef(null);
    if (!elRef.current) {
        const div = document.createElement("div");
        div.classList.add("modal-wrapper");
        elRef.current = div;
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current)

        return  () => modalRoot.removeChild(elRef.current);
    },[]);

    return createPortal(<div className="modal-inner">{children}</div>, elRef.current);
}

export default Modal;