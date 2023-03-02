import Posts from "./newPost";
import "./HomePage.css"
import { useState, useEffect } from "react";
import MainNav from "./homeTop";

const HomePage = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://instaclone-backend-wq4.onrender.com").then((res) => res.json()).then((userData) => setData(userData)).catch((err) => console.log(err));
    }, []);    //4=>p##t=> r

    return (
        <>
            <MainNav />
            <div>
                {
                    data.map((ele, idx) => {
                        return <Posts data={ele} />
                    })
                }
            </div>
        </>
    )
}

export default HomePage;  //clear