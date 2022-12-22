import React from "react";
import './create.css'
// import {Routes,Route,useNavigate} from 'react-router-dom'

export default function Read(){

    function Back(){
        window.location.replace("http://localhost:3000/")
}

    const readprison = () =>{
        window.location.replace("http://localhost:3000/readprison")
    }
    const readprisoner = () =>{
        window.location.replace("http://localhost:3000/readprisoner")
    }
    const readvisitor = () =>{
        window.location.replace("http://localhost:3000/readvisitor")
    }
    const readguard = () =>{
        window.location.replace("http://localhost:3000/readguard")
    }
    const readpunish = () =>{
        window.location.replace("http://localhost:3000/readpunishment")
    }
    const readparole = () =>{
        window.location.replace("http://localhost:3000/readparole")
    }
    return(
        <div className="createPage">
            <br />
            <div className = "create3">
                            <h3>Read Page</h3>
            </div>
                <div className = "create2">
                        <button className="prisonerb1" variant = "contained" onClick={readprisoner}>Prisoner</button>
                     <br />
                     <button className="prisonb1" variant = "contained" onClick={readprison}>Prison</button>
                     <br />
                     <button className="visitorb1" variant = "contained" onClick={readvisitor}>Visitor</button>
                    <br />
                    <button className="guardb1" variant = "contained" onClick={readguard}>Guard</button>
                     <br /> 
                     <button className="punishmentb1" variant = "contained" onClick={readpunish}>Punishment</button>
                     <br />
                     <button className="paroleb1" variant = "contained" onClick={readparole}>Parole</button>
                </div>
                <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
        </div>

    )
}