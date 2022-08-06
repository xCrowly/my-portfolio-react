import img1 from "../assets/images/main-header.jpg";
import img2 from "../assets/images/my-profile-img.jpg";

const style = {
    zIndex: '2000'
}

const onImgClick = () => alert(`Don't click on my face 😈`);

function Header() {
    return (
        <header id="img-header" className="position-relative d-flex flex-wrap">
            <img className="img-fluid img-header-background" src={img1} alt="main-header" />
            <div className="d-flex flex-column header-text align-content-center">
                <h1>Hi there!,</h1>
                <p>My name is</p>
                <h2>"Ahmed Badawy"</h2>
                <h3>I'm a Front-end developer.</h3>
            </div>
            <div>
                <img className="img-profile img-fluid  
                    translate-middle rounded-circle border
                    border-3 border-light" onClick={onImgClick}
                    style={style} src={img2} alt="My profile img" />
            </div>
        </header>
    )
}

export default Header;