import React from "react";
import "./createprison.css"

function Prisonerform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Prisoner Creation</h1>
                </div>
            <div className="createprison2">
                <form action="http://localhost:3001/api/CreatePrisoner" method="post">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Prisoner Name</td>
                        <td><input type="text" name ="Prisoner_Name" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>
                            Prison ID
                        </td>
                        <td><input type="text" name="Prison_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Prisoner Age</td>
                        <td><input type="number" className="num1" name="Prisoner_Age"/></td>
                    </tr>
                                <tr>
                                    <td  className="c1">City</td>
                                    <td><input type="text" name="Prisoner_City" className="text1" /></td>
                                </tr>
                                <tr>
                                    <td className="c2">State</td>
                                    <td><input type="text" name="Prisoner_State" className="text1" /></td>
                                </tr>
                    <tr>
                        <td>Cell No</td>
                        <td><input type="Number" name="Cell_No" className="num1" /></td>
                    </tr>
                    <tr>
                        <td>Punishment ID</td>
                        <td><input type="text" name="Punishment_ID" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Arrested Year</td>
                        <td><input type="date" name="Arrested_Year" className="text1" /></td>
                    </tr>
                    <tr>
                    <td>Release Year</td>
                        <td><input type="date" name="Release_Year" className="text1" /></td>
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

export default Prisonerform;