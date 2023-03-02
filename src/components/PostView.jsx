import MainNav from "./homeTop";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PostView.css";

const PostForm = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState([]); // since it is an array of image src's
    const [user, setUser] = useState({ author: "", location: "", description: "" });
    
    const register = async () => {
        let publishDate = new Date();
        let date = `${publishDate.getDate()}/${publishDate.getMonth()+1}/${publishDate.getFullYear()}`
        console.log(user);
        const formdata = new FormData();
        formdata.append("image", image);
        formdata.append("author", user.author);
        formdata.append("location", user.location);
        formdata.append("description", user.description);
        formdata.append("date", date);
        axios
        .post("https://instaclone-backend-wq4r.onrender.com/posts", formdata)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            alert("Error while Posting, Please try again");
        });
        navigate("/home");
        alert("Post Uploaded successfully!");
    }
    return (
        <>
        
            <MainNav /> 
            <div className="form-container">
                <form onSubmit={register} className="form">
                    <section>
                        <input id="file" type="file" required onChange={(e) => { setImage(e.target.files[0]) }} />
                    </section>
                    <section className="author-location">
                        <input className="author-location-width" required placeholder="Author" onChange={(e) => { setUser({ ...user, author: e.target.value }) }} />
                        <input className="author-location-width" required placeholder="Location" onChange={(e) => { setUser({ ...user, location: e.target.value }) }} />
                    </section>
                    <section className="author-location">
                        <input id="description" required placeholder="Description" onChange={(e) => { setUser({ ...user, description: e.target.value }) }} />
                    </section>
                    <article id="btn-container">
                        <input id="btn" type="submit" value="Post" />
                    </article>
                </form>
            </div>
        </>
    )
}

export default PostForm; // clear