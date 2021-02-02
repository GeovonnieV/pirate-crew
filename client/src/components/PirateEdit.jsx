import React, {useState, useEffect} from "react";
import {navigate, Link} from "@reach/router";
import axios from "axios";

const PirateEdit = (props) => {
    const [name, setName] = useState("");
    const [numberOfTreasureChest, setNumberOfTreasureChest] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [hasPegLeg, setHasPegLeg] = useState("");
    const [hasEyePatch, setHasEyePatch] = useState("");
    const [hasHookHand, setHasHookHand] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [pirateImage, setPirateImage] = useState("");
    const [errs, setErrs] = useState({});

     // axios is using route we made in server
     useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + props.id)
             .then((res) => {
                 setName(res.data.name);
                 setNumberOfTreasureChest(res.data.numberOfTreasureChest);
                 setCrewPosition(res.data.crewPosition);
                 setHasPegLeg(res.data.hasPegLeg);
                 setHasHookHand(res.data.hasHookHand);
                 setCatchPhrase(res.data.catchPhrase);
                })
             .catch((err) => console.log(err));
    }, [])

     // function ran when form is submitted
     const submitForm = (e) => {
        e.preventDefault();

        axios.put("http://localhost:8000/api/pirates/" + props.id, {
            name: name,
            numberOfTreasureChest: numberOfTreasureChest,
            crewPosition: crewPosition,
            hasPegLeg: hasPegLeg, 
            hasEyePatch: hasEyePatch,
            hasHookHand: hasHookHand,
            catchPhrase: catchPhrase,
            pirateImage: pirateImage
        })
        .then((res) => {
            // if err show err
            if(res.data.errors){
                setErrs(res.data.errors);
            } else {
                navigate(`/pirates/${res.data._id}`)
            }
        })
           .catch((err) => console.log(err));
    }

    return(
        <div>
            <h1>Edit {name}</h1>
            <form onSubmit={submitForm}>
                {/* name input */}
                <div>
                    <label>Name: </label>
                    <input type="text" value={name} autoComplete="false" name="name" onChange={(e) => setName(e.target.value)} />
                     {/* if theres an error */}
                     {errs.title ? (
                        // 
                        <span>{errs.name.message}</span>
                    ) : null}
                </div>
                {/* numberOfTreasureChest input */}
                <div>
                    <label>Number Of Treasure Chest: </label>
                    <input type="text" value={numberOfTreasureChest} name="numberOfTreasureChest" autoComplete="false" onChange={(e) => setNumberOfTreasureChest(e.target.value)} />
                     {/* if theres an error */}
                     {errs.numberOfTreasureChest ? (
                        // 
                        <span>{errs.numberOfTreasureChest.message}</span>
                    ) : null}
                </div>
                {/* crewPostion input */}
                <div>
                    <label>Crew Position: </label>
                    <input type="text" value={crewPosition} name="crewPostion" autoComplete="false" onChange={(e) => setCrewPosition(e.target.value)} />
                     {/* if theres an error */}
                     {errs.crewPosition ? (
                        // 
                        <span>{errs.crewPosition.message}</span>
                    ) : null}
                </div>
                {/* hasPegLeg input */}
                <div>
                <label>Peg Leg?: </label>
                        <select name="hasPegLeg" value={hasPegLeg} onChange={(e) => setHasPegLeg(e.target.value)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                     {errs.hasPegLeg ? (
                        // 
                        <span>{errs.hasPegLeg.message}</span>
                    ) : null}
                </div>
                {/* hasEyePatch input */}
                <div>
                <label>Has Eye Patch?: </label>
                        <select name="hasEyePatch" value={hasEyePatch} onChange={(e) => setHasEyePatch(e.target.value)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                     {errs.hasEyePatch ? (
                        // 
                        <span>{errs.hasEyePatch.message}</span>
                    ) : null}
                </div>
                {/* hasHookHand input */}
                <div>
                <label>Has hook hand?: </label>
                        <select name="hasHookHand" value={hasHookHand} onChange={(e) => setHasHookHand(e.target.value)}>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                     {errs.hasHookHand ? (
                        // 
                        <span>{errs.hasHookHand.message}</span>
                    ) : null}
                </div>
                  {/* catchPhrase input */}
                  <div>
                    <label>Catch Phrase: </label>
                    <input type="text" value={catchPhrase} autoComplete="false" name="catchPhrase" onChange={(e) => setCatchPhrase(e.target.value)} />
                     {/* if theres an error */}
                     {errs.catchPhrase ? (
                        // 
                        <span>{errs.catchPhrase.message}</span>
                    ) : null}
                </div>
                  {/* pirateImage input */}
                  <div>
                    <label>Pirate Image: </label>
                    <input type="text" value={pirateImage} autoComplete="false" name="pirateImage" onChange={(e) => setPirateImage(e.target.value)} />
                     {/* if theres an error */}
                     {errs.pirateImage ? (
                        // 
                        <span>{errs.pirateImage.message}</span>
                    ) : null}
                </div>
                {/* back to home page */}
                <Link to="/" >
                   <button>back</button>     
                </Link>
                  {/* btn submits form */}
                  <button type="submit">Edit {name}</button>
            </form>
        </div>
    )
}

export default PirateEdit;