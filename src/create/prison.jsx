import React from "react";
import "./createprison.css"

function Prisonform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Prison Creation</h1>
                </div>
            <div className="createprison2">
                <br />
                <form action="http://localhost:3001/api/CreatePrison" method="post" autoComplete="on">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Prison Name</td>
                        <td><input type="text" name ="Prison_Name" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Prison ID</td>
                        <td><input type="text" name="Prison_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Prison Capacity</td>
                        <td><input type="Number" name="Prison_capacity" className="num1" /></td>
                    </tr>
                            <tr>
                                <th className="h5">Prison Location</th>
                            </tr>

                                <tr>
                                    <td  className="c1">Prison City</td>
                                    <td><input type="text" name="Prison_City" className="text1" /></td>
                                </tr>
                                <tr>
                                    <td className="c2">Prison State</td>
                                    <td><input type="text" name="Prison_State" className="text1" /></td>
                                </tr>
                    <tr>
                        <td>Current Prisoners</td>
                        <td><input type="Number" name="Current_Prisoners" className="num1" /></td>
                    </tr>
                    <tr>
                        <td>Males</td>
                        <td><input type="Number" name="No_of_Males" className= "num1" /></td>
                    </tr>
                    <tr>
                               <td>Females</td>
                        <td><input type="Number" name="No_of_Females" className="num1" /></td>
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

export default Prisonform;