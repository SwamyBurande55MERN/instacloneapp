import "./HomePage.css";
import { Link } from "react-router-dom";
import iconImage from "./images/icon.png";
import cameraLogo from "./images/camera.png";

const MainNav = () => {
    return (
        <div className="top-part">
            <section className="header">
                <article className="logo-section">
                <Link to="/"><img src={iconImage} alt="instaclone-logo" className="instaclone-logo" /></Link>
                    <h2 className="logo-text">Instaclone</h2>
                </article>
                <article>
                    <Link to="/Form"><img src={cameraLogo} alt="camera-logo" className="camera-logo" /></Link>
                </article>
            </section>
        </div>
    )
}

export default MainNav;  //clear