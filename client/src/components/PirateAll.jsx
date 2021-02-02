import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

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
                <h1>Pirate Crew</h1>
                <Link to="/pirates/new">
                    <button>Add Pirate</button>
                </Link>
            </div>
            {
                // need to add delete pirate btn
                allPirates.map((pirate, index) => (
                    <div key={index}>
                        <h2>{pirate.name}</h2>
                        <Link to={`/pirates/${pirate._id}`}>
                            <button>View {pirate.name}</button>
                        </Link>
                         {/* go to edit route */}
                         <Link to={`/pirates/${pirate._id}/edit`}>
                            <button>Edit Pirate</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default PirateAll;