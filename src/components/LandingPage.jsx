import "./LandingPage.css";
import { Link } from "react-router-dom";
import LandingPageImage from "./images/LandingPageImage.png";

const LandingPage = () => {
    return (
        <div className="landing-big-container">
            <div className="landing-small-container">
                <section className="img-section">
                   <img src={LandingPageImage} alt="landing-img" className="landing-img" />
                </section>
                <section className="btn-text-section">
                    <article className="text-section">
                        <h2 className="greet-text">Welcome to Instaclone</h2>
                    </article>
                    <article className="btn-section">
                        <Link to="/home"><button className="enter-btn">Enter</button></Link>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default LandingPage;  //clear