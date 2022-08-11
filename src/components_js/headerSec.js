import React from "react";
import img2 from "../assets/svg/Code_Development _Flatline.svg";

function Header() {

    const [toast, setToast] = React.useState("")

    // to add the toast element to the scene
    function triggerToast() {
        setToast(t =>
            t = <div className="toast fade show toast-welcome" role="alert"
                aria-live="assertive" aria-atomic="true"
            >
                <div className="toast-header" style={{ backgroundColor: "#4682B4", color: "#FFFFFF" }}>
                    <strong className="me-auto">Ahmed Badawy</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"
                    ></button>
                </div>
                <div className="toast-body bg-secondary rounded-bottom">
                    Hello, Welcome to my website.
                </div>
            </div>
        )
    }

    // timer for lateInit
    function toastCountDown() {
        window.setTimeout(() => triggerToast(), 4000)
    }
    toastCountDown()

    return (
        <header className="d-flex flex-wrap flex-row img-header-background posititon-relative">
            <div className="d-flex flex-column header-text m-auto flex-shrink-1">
                <h1>Hi there!,</h1>
                <p>My name is</p>
                <h2>"Ahmed Badawy"</h2>
                <h3>I'm a Front-end developer.</h3>
            </div>
            <div className="d-flex flex-column m-auto flex-shrink-1">
                <img className="img-profile img-fluid border-3 border-light img-fluid "
                    src={img2} alt="My profile img" />
            </div>

            {toast}

        </header>
    )
}

export default Header;