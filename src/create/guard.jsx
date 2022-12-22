import React from "react";
import "./createprison.css"

function Guardform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Guard Creation</h1>
                </div>
            <div className="createprison2">
                <br />
                <form action="http://localhost:3001/api/CreateGuard" method="post" >
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Guard Name</td>
                        <td><input type="text" name ="Guard_Name" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Prison ID</td>
                        <td><input type="text" name="Prison_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Guard ID</td>
                        <td><input type="text" name="Guard_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Guard Age</td>
                        <td><input type="Number" name="Guard_Age" className="num1" /></td>
                    </tr>
                            <tr>
                                <th className="h5">Address</th>
                            </tr>

                                <tr>
                                    <td  className="c1">City</td>
                                    <td><input type="text" name="Guard_City" className="text1" /></td>
                                </tr>
                                <tr>
                                    <td className="c2">State</td>
                                    <td><input type="text" name="Guard_State" className="text1" /></td>
                                </tr>
                    <tr>
                        <td>Guard Rank</td>
                        <td><input type="text" name="Guard_Rank" className="num1" /></td>
                    </tr>
                    <tr>
                        <td>Guard Salary</td>
                        <td><input type="Number" name="Guard_Salary" className= "num1" /></td>
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

export default Guardform;