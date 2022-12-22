import React from "react";
import "./createprison.css"

function Visitorform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Visitor Creation</h1>
                </div>
            <div className="createprison2">
                <br />
                <form action="http://localhost:3001/api/CreateVisitor" method="post" autoComplete="off">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Visitor Name</td>
                        <td><input type="text" name ="Visitor_Name" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Visitor ID</td>
                        <td><input type="text" name="Visitor_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Visitor Relation</td>
                        <td><input type="text" name="Visitor_Relation" className="num1" /></td>
                    </tr>
                            <tr>
                                <th className="h5">Address</th>
                            </tr>

                                <tr>
                                    <td  className="c1">City</td>
                                    <td><input type="text" name="Visitor_City" className="text1" /></td>
                                </tr>
                                <tr>
                                    <td className="c2">State</td>
                                    <td><input type="text" name="Visitor_State" className="text1" /></td>
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

export default Visitorform;