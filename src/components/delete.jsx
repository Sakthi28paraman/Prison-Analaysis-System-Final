import React from "react";
import './create.css'
// import {Routes,Route,useNavigate} from 'react-router-dom'

export default function Delete(){

    function Back(){
        window.location.replace("http://localhost:3000/")
}

    const deleteprison = () =>{
        window.location.replace("http://localhost:3000/DeletePrison")
    }
    const deleteprisoner = () =>{
        window.location.replace("http://localhost:3000/DeletePrisoner")
    }
    const deletevisitor = () =>{
        window.location.replace("http://localhost:3000/DeleteVisitor")
    }
    const deleteguard = () =>{
        window.location.replace("http://localhost:3000/DeleteGuard")
    }
    const deletepunish = () =>{
        window.location.replace("http://localhost:3000/DeletePunishment")
    }
    const deleteparole = () =>{
        window.location.replace("http://localhost:3000/DeleteParole")
    }
    return(
        <div className="createPage">
            <br />
            <div className = "create3">
                            <h3>delete Page</h3>
            </div>
                <div className = "create2">
                        <button className="prisonerb1" variant = "contained" onClick={deleteprisoner}>Prisoner</button>
                     <br />
                     <button className="prisonb1" variant = "contained" onClick={deleteprison}>Prison</button>
                     <br />
                     <button className="visitorb1" variant = "contained" onClick={deletevisitor}>Visitor</button>
                    <br />
                    <button className="guardb1" variant = "contained" onClick={deleteguard}>Guard</button>
                     <br /> 
                     <button className="punishmentb1" variant = "contained" onClick={deletepunish}>Punishment</button>
                     <br />
                     <button className="paroleb1" variant = "contained" onClick={deleteparole}>Parole</button>
                </div>
                <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
        </div>

    )
}