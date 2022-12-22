import { useState } from "react";
import "./createprison.css"

function Paroleform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }

    const [Parole_ID,setparoleid] = useState('');
    const [Prisoner_ID,setprisonerid] = useState('');
    const [No_of_Times,settimes] = useState('');
    const [Out_year,setoutyear] = useState('');
    const [Out_Month,setoutmonth] = useState('');
    const [Out_Date,setoutdate] = useState('');
    const [In_year,setinyear] = useState('');
    const[In_Month,setinmonth] = useState('');
    const [In_Date,setindate] = useState('');

    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Parole_ID,Prisoner_ID,No_of_Times,Out_year,Out_Month,Out_Date,In_year,In_Month,In_Date}
        fetch('http://localhost:3001/api/UpdateParole',{
            method : 'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log(body);
            console.log('Updated');
        })
       setparoleid('');
       setprisonerid('');
       settimes('');
       setoutyear('');
       setoutmonth('');
       setoutdate('');
       setinyear('');
       setinmonth('');
       setindate('');
    }

    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Parole Update</h1>
                </div>
            <div className="createprison2">
                <form  method="post">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Parole ID</td>
                        <td><input type="text" name ="Parole_ID" className="text1"value={Parole_ID} onChange={(e)=>setparoleid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1" value={Prisoner_ID} onChange={(e)=>setprisonerid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>No of Times Parole Taken</td>
                        <td><input type="Number" name="No_of_Times" className="text1" value={No_of_Times} onChange={(e)=>settimes(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Out_year</td>
                        <td><input type="text" className="num1" name="Out_year" value={Out_year} onChange={(e)=>setoutyear(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Out_Month</td>
                        <td><input type="text" name="Out_Month" className="num1" value={Out_Month} onChange={(e)=>setoutmonth(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Out_Date</td>
                        <td><input type="text" name="Out_Date" className="text1" value={Out_Date} onChange={(e)=>setoutdate(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>In_year</td>
                        <td><input type="text" name="In_year" className="text1" value={In_year} onChange={(e)=>setinyear(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <td>In_Month</td>
                        <td><input type="text" name="In_Month" className="text1" value={In_Month} onChange={(e)=>setinmonth(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>In_Date</td>
                        <td><input type="text" name = "In_Date" className="text1" value={In_Date} onChange={(e)=>setindate(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <td align="center" colspan="2" >
                    <input type="submit" value="Submit" className="Submit" onClick={handlesubmit}/>
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