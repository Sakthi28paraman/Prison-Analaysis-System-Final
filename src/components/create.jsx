import React from "react";
import './create.css'
// import {Routes,Route,useNavigate} from 'react-router-dom'

export default function Create(){

    function Back(){
            window.location.replace("http://localhost:3000/")
    }

//     const navigate  = useNavigate();
//     const navigatetocreate = () =>{
//         navigate('/Create')
//     };
    const createprison = () =>{
        window.location.replace("http://localhost:3000/createprison")
    }
    const createprisoner = () =>{
        window.location.replace("http://localhost:3000/createprisoner")
    }
    const createvisitor = () =>{
        window.location.replace("http://localhost:3000/createvisitor")
    }
    const createguard = () =>{
        window.location.replace("http://localhost:3000/createguard")
    }
    const createpunish = () =>{
        window.location.replace("http://localhost:3000/createpunishment")
    }
    const createparole = () =>{
        window.location.replace("http://localhost:3000/createparole")
    }


    return(
        <div className="createPage">
            {/* <form method="post" action="/create">
                <input type={"button"} value = "Prisoners" className="createb1"/>
                <br />
                <input type={"button"} value = "Prison" className="readb1"/>
                <br />
                <input type={"button"} value = "Visitors" className="updateb1"/>
                <br />
                <input type={"button"} value = "Guard" className="deleteb1"/>
                <br />
                <input type={"button"} value = "Punishment" className="deleteb1"/>
                <br />
                <input type={"button"} value = "Parole" className="deleteb1"/>
            </form> */}
            <br />  
            <div className = "create3">
                            <h3>Create Page</h3>
            </div>
                <div className = "create2">
                        <button className="prisonerb1" variant = "contained" onClick={createprisoner}>Prisoner</button>
                     <br />
                     <button className="prisonb1" variant = "contained" onClick={createprison}>Prison</button>
                     <br />
                     <button className="visitorb1" variant = "contained" onClick={createvisitor}>Visitor</button>
                    <br />
                    <button className="guardb1" variant = "contained" onClick={createguard}>Guard</button>
                     <br />
                     <button className="punishmentb1" variant = "contained" onClick={createpunish}>Punishment</button>
                     <br />
                     <button className="paroleb1" variant = "contained" onClick={createparole}>Parole</button>
                </div>
            <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
        </div>
    )
}