import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
    backgroundImage: 'none',
    backgroundColor: 'rgba(249, 250, 253, 0.4)',
    backdropFilter: 'blur(4px)'
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md fixed-top shadow w-100" style={styles}>

            <div className="container-fluid">

                <div className="mx-2 text-info">
                    <FontAwesomeIcon icon={faCode} />
                </div>

                <a className="navbar-brand fw-bolder text-primary nav-item-name" href="#img-header">Ahmed Badawy</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#main">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects-sec">My projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills-sec">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer-sec">Contact me</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
