import "./newPosts.css";
import optionsImage from "./images/more_icon.png";
import likesImage from "./images/heart.png";
import shareImage from "./images/share.png";

const Posts = (props) => {

const { author, location, description, image, date } = props.data;

    return (
        <div className="outer-container">
            <section className="post-container">
                <article className="header-post">
                    <article>
                        <h2 className="author">{author}</h2>
                        <h4 className="location">{location}</h4>
                    </article>
                    <article className="dot-icon">
                        <img src={optionsImage} alt="dot-icon" className="optionsImage" />
                    </article>
                </article>
                <img src={image} alt="user-post" className="post-img" />
                <article className="icons-row">
                    <article>
                        <img src={likesImage} alt="heart-icon" className="icons" />
                        <img src={shareImage} alt="share-icon" className="icons" />
                    </article>
                    <article>
                        <h4 className="date">{date}</h4>
                    </article>
                </article> 
                <article>
                    <h4 className="likes-count">0 likes</h4>
                    <h3 className="description">{description}</h3>
                </article>
            </section>
        </div>
    )
}

export default Posts;