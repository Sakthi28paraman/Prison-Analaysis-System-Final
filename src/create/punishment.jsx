import React from "react";
import "./createprison.css"

function Punishmentform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Punishment Creation</h1>
                </div>
            <div className="createprison2">
                <form action="http://localhost:3001/api/CreatePunishment" method="post">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Punishment ID</td>
                        <td><input type="text" name ="Punishment_ID" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Punishment </td>
                        <td><input type="text" name="Punishment" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Case No</td>
                        <td><input type="number" className="num1" name="Case_No"/></td>
                    </tr>
                    <tr>
                        <td>Section</td>
                        <td><input type="text" name="Sections" className="num1" /></td>
                    </tr>
                    <tr>
                        <td>Crime</td>
                        <td><input type="text" name="Crime" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Lawyer Name</td>
                        <td><input type="text" name="Lawyer_Name" className="text1" /></td>
                    </tr>
                    <tr>
                    <td>Court city</td>
                        <td><input type="text" name="Court_City" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Court State</td>
                        <td><input type="text" name="Court_State" className="text1" /></td>
                    </tr>
                    <tr>
                    <td align="center" colspan="2" >
                    <input type="submit" value="Submit" className="Submit"/>
                        &nbsp;&nbsp; <input type="reset" value="Reset" className="Reset"/>
                    </td>
                    </tr>
                    </table>
                </form>
            </div>
            <button variant = "contained" className="Back" color="error" onClick={Back}>Back</button>
        </div>
    )
}

export default Punishmentform;