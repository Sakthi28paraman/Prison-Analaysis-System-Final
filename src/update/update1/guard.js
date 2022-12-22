import { useState } from "react";
import "./createprison.css"

function Guardform(){
    function Back(){
        window.location.replace("http://localhost:3000/update")
    }

    const [Guard_Name, setguardname] = useState('');
    const [Guard_ID, setguardid] = useState('');
    const [Prison_ID,setprisonid] = useState('');
    const [Guard_Age,setguardage] = useState('');
    const [Guard_Rank,setrank] = useState('');
    const [Guard_City,setguardcity] = useState('');
    const [Guard_State,setguardstate] = useState('');
    const[Guard_Salary,setsalary] = useState('');

    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Guard_Name,Guard_ID,Prison_ID,Guard_Age,Guard_City,Guard_State,Guard_Rank,Guard_Salary}

        fetch('http://localhost:3001/api/UpdateGuard',{
            method : 'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log(body);
            console.log('Updated');
        })
        setguardname('');
        setguardid('');
        setprisonid('');
        setguardage('');
        setguardcity('');
        setguardstate('');
        setrank('');
        setsalary('');
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
                        <td><input type="text" name ="Guard_Name" className="text1"  value={Guard_Name} onChange={(e)=>setguardname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Prison ID</td>
                        <td><input type="text" name="Prison_ID" className="text1"  value={Prison_ID} onChange={(e)=>setprisonid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Guard ID</td>
                        <td><input type="text" name="Guard_ID" className="text1"  value={Guard_ID} onChange={(e)=>setguardid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Guard Age</td>
                        <td><input type="Number" name="Guard_Age" className="num1"  value={Guard_Age} onChange={(e)=>setguardage(e.target.value)} /></td>
                    </tr>
                            <tr>
                                <th className="h5">Address</th>
                            </tr>

                                <tr>
                                    <td  className="c1">City</td>
                                    <td><input type="text" name="Guard_City" className="text1"  value={Guard_City} onChange={(e)=>setguardcity(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td className="c2">State</td>
                                    <td><input type="text" name="Guard_State" className="text1"  value={Guard_State} onChange={(e)=>setguardstate(e.target.value)} /></td>
                                </tr>
                    <tr>
                        <td>Guard Rank</td>
                        <td><input type="text" name="Guard_Rank" className="num1"  value={Guard_Rank} onChange={(e)=>setrank(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Guard Salary</td>
                        <td><input type="Number" name="Guard_Salary" className= "num1" value={Guard_Salary} onChange={(e)=>setsalary(e.target.value)} /></td>
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

export default Guardform;