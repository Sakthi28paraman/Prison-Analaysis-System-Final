import { useState } from "react";
import './createprison.css'

function Prisonerform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }

    const [Prisoner_Name, setprisonername] = useState('');
    const [Prisoner_ID, setprisonerid] = useState('');
    const [Prison_ID,setprisonid] = useState('');
    const [Prisoner_Age,setage] = useState('');
    const [Prisoner_City , setprisonercity] = useState('');
    const [Prisoner_State, setprisonerstate] = useState('');
    const [Cell_No,setcellno] = useState('');
    const [Punishment_ID,setpunishment] = useState('');
    const[Arrested_Year,setArrestyear] = useState('');
    const[Release_Year,setreleaseyear] = useState('');

    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Prisoner_Name,Prisoner_ID,Prison_ID,Prisoner_Age,Prisoner_City,Prisoner_State,Cell_No,Punishment_ID,Arrested_Year,Release_Year}

        fetch('http://localhost:3001/api/UpdatePrisoner',{
            method : 'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log(body);
            console.log('Updated');
        })
        setprisonername('');
        setprisonerid('');
        setprisonid('');
        setage('');
        setprisonercity('');
        setprisonerstate('');
        setcellno('');
        setpunishment('');
        setArrestyear('');
        setreleaseyear('');
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Prisoner Creation</h1>
                </div>
            <div className="createprison2">
                <form  method="post">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Prisoner Name</td>
                        <td><input type="text" name ="Prisoner_Name" className="text1" value={Prisoner_Name} onChange={(e)=>setprisonername(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1"value={Prisoner_ID} onChange={(e)=>setprisonerid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>
                            Prison ID
                        </td>
                        <td><input type="text" name="Prison_ID" className="text1" value={Prison_ID} onChange={(e)=>setprisonid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Prisoner Age</td>
                        <td><input type="number" className="num1" name="Prisoner_Age" value={Prisoner_Age} onChange={(e)=>setage(e.target.value)} /></td>
                    </tr>
                                <tr>
                                    <td  className="c1">City</td>
                                    <td><input type="text" name="Prisoner_City" className="text1" value={Prisoner_City} onChange={(e)=>setprisonercity(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td className="c2">State</td>
                                    <td><input type="text" name="Prisoner_State" className="text1" value={Prisoner_State} onChange={(e)=>setprisonerstate(e.target.value)}/></td>
                                </tr>
                    <tr>
                        <td>Cell No</td>
                        <td><input type="Number" name="Cell_No" className="num1"value={Cell_No} onChange={(e)=>setcellno(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Punishment ID</td>
                        <td><input type="text" name="Punishment_ID" className="text1" value={Punishment_ID} onChange={(e)=>setpunishment(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Arrested Year</td>
                        <td><input type="date" name="Arrested_Year" className="text1" value={Arrested_Year} onChange={(e)=>setArrestyear(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <td>Release Year</td>
                        <td><input type="date" name="Release_Year" className="text1" value={Release_Year} onChange={(e)=>setreleaseyear(e.target.value)} /></td>
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

export default Prisonerform;