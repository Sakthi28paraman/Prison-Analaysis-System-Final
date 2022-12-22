import React from "react";
import './create.css'
// import {Routes,Route,useNavigate} from 'react-router-dom'

export default function Update(){

    function Back(){
        window.location.replace("http://localhost:3000/")
}

    const updateprison = () =>{
        window.location.replace("http://localhost:3000/UpdatePrison")
    }
    const updateprisoner = () =>{
        window.location.replace("http://localhost:3000/UpdatePrisoner")
    }
    const updatevisitor = () =>{
        window.location.replace("http://localhost:3000/UpdateVisitor")
    }
    const updateguard = () =>{
        window.location.replace("http://localhost:3000/UpdateGuard")
    }
    const updatepunish = () =>{
        window.location.replace("http://localhost:3000/UpdatePunishment")
    }
    const updateparole = () =>{
        window.location.replace("http://localhost:3000/UpdateParole")
    }
    return(
        <div className="createPage">
            <br />
            <div className = "create3">
                            <h3>Update Page</h3>
            </div>
                <div className = "create2">
                        <button className="prisonerb1" variant = "contained" onClick={updateprisoner}>Prisoner</button>
                     <br />
                     <button className="prisonb1" variant = "contained" onClick={updateprison}>Prison</button>
                     <br />
                     <button className="visitorb1" variant = "contained" onClick={updatevisitor}>Visitor</button>
                    <br />
                    <button className="guardb1" variant = "contained" onClick={updateguard}>Guard</button>
                     <br /> 
                     <button className="punishmentb1" variant = "contained" onClick={updatepunish}>Punishment</button>
                     <br />
                     <button className="paroleb1" variant = "contained" onClick={updateparole}>Parole</button>
                </div>
                <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
        </div>

    )
}