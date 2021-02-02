import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const PirateOne = (props) => {
    const [pirate, setPirate] = useState({});

    // axios is using route we made in server
    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + props.id)
            .then((res) => setPirate(res.data))
            .catch((err) => console.log(err));
    }, [])

    return (
        <div className="pirate-one-container">
            <div className="top-page">
                <h2>{pirate.name}</h2>
            </div>
            <div className="pirate-one-img-container">
                <img className="pirate-one-img" src={pirate.pirateImage} alt="" />
                <h2>{pirate.catchPhrase}</h2>
            </div>
            <div>
                <p>Number of Chest: {pirate.numberOfTreasureChest}</p>
                <p>Crew Position: {pirate.crewPosition}</p>
                <p>Peg Leg?: {pirate.hasPegLeg}</p>
                <p>has Eye Patch?: {pirate.hasEyePatch}</p>
                <p>has Hook Hand?: {pirate.hasHookHand}</p>
            </div>
            {/* goes back to get all */}
            <Link to="/">
                <button className="home-btn">Back</button>
            </Link>
        </div>
    )
}

export default PirateOne;