import React from "react";
import "../Homepage/Homepage.css"
import { Link } from "react-router-dom";
import picture from "../Data/pictures.json"

const Homepage = () => {
    const data = picture.map((pictures) => {
        return (
                <Link><img className="Pokemon" src={pictures.image}/></Link>
        )
    })
    return (
        <div className="Container-Pokemon">
            {data}
        </div>
    )
}
export default Homepage;