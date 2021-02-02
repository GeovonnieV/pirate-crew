import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";
// Import styles
import "../styles/app.scss"

const PirateAll = () => {
    const [allPirates, setAllPirates] = useState([]);

    useEffect(() => {
        // props.id 
        axios.get("http://localhost:8000/api/pirates")
            // res holds all the pirates that are in the db
            // dont forget have to put res.data holds the data
            .then((res) => setAllPirates(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <div className="top-page">
                <h1 className="top-page-head">PirateBook</h1>
                <Link to="/pirates/new">
                    <button className="top-page-btn">Add Pirate</button>
                </Link>
            </div>
            {
                // need to add delete pirate btn
                allPirates.map((pirate, index) => (
                    <div key={index} className="pirate-all-container">
                        <div className="pirate-all-img">
                            <img src={pirate.pirateImage} alt="" className="pirate-all-img" />
                        </div>
                        <div className="pirate-all-right">
                            <h2>{pirate.name}</h2>
                            <Link to={`/pirates/${pirate._id}`}>
                                <button className="pirate-all-view">View {pirate.name}</button>
                            </Link>
                            {/* go to edit route */}
                            <Link to={`/pirates/${pirate._id}/edit`}>
                                <button className="pirate-all-edit">Edit Pirate</button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PirateAll;