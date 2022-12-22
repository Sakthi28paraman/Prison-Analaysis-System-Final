import React from "react";
import "./createprison.css"

function Paroleform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Parole Creation</h1>
                </div>
            <div className="createprison2">
                <form action="http://localhost:3001/api/CreateParole" method="post">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Parole ID</td>
                        <td><input type="text" name ="Parole_ID" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>No of Times Parole Taken</td>
                        <td><input type="Number" name="No_of_Times" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>Out_year</td>
                        <td><input type="text" className="num1" name="Out_year"/></td>
                    </tr>
                    <tr>
                        <td>Out_Month</td>
                        <td><input type="text" name="Out_Month" className="num1" /></td>
                    </tr>
                    <tr>
                        <td>Out_Date</td>
                        <td><input type="text" name="Out_Date" className="text1"/></td>
                    </tr>
                    <tr>
                        <td>In_year</td>
                        <td><input type="text" name="In_Year" className="text1" /></td>
                    </tr>
                    <tr>
                    <td>In_Month</td>
                        <td><input type="text" name="In_Month" className="text1" /></td>
                    </tr>
                    <tr>
                        <td>In_Date</td>
                        <td><input type="text" name = "In_Date" className="text1"/></td>
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

export default Paroleform;