import { useState } from 'react';
import "./createprison.css"

function Punishmentform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }

    const [Punishment_ID,setpunishmentid] = useState('');
    const [Prisoner_ID, setprisonerid] = useState('');
    const [Punishment,setpunishment] = useState('');
    const [Case_No,setcaseno] = useState('');
    const [Sections,setsection] = useState('');
    const [Crime,setcrime] = useState('');
    const [Lawyer_Name,setlawyername] = useState('');
    const[Court_City,setcity] = useState('');
    const[Court_State,setstate] = useState('');

    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Punishment_ID,Prisoner_ID,Punishment,Case_No,Sections,Crime,Lawyer_Name,Court_City,Court_State}

        fetch('http://localhost:3001/api/UpdatePunishment',{
            method : 'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log(body);
            console.log('Updated')
        })
        setpunishmentid('');
        setprisonerid('');
        setpunishment('');
        setcaseno('');
        setcrime('');
        setsection('');
        setlawyername('');
        setcity('');
        setstate('');
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Punishment Creation</h1>
                </div>
            <div className="createprison2">
                <form method="post">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Punishment ID</td>
                        <td><input type="text" name ="Punishment_ID" className="text1"  value={Punishment_ID} onChange={(e)=>setpunishmentid(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1"  value={Prisoner_ID} onChange={(e)=>setprisonerid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Punishment </td>
                        <td><input type="text" name="Punishment" className="text1"  value={Punishment} onChange={(e)=>setpunishment(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Case No</td>
                        <td><input type="number" className="num1" name="Case_No"  value={Case_No} onChange={(e)=>setcaseno(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Section</td>
                        <td><input type="text" name="Sections" className="num1"  value={Sections} onChange={(e)=>setsection(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Crime</td>
                        <td><input type="text" name="Crime" className="text1"  value={Crime} onChange={(e)=>setcrime(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Lawyer Name</td>
                        <td><input type="text" name="Lawyer_Name" className="text1"  value={Lawyer_Name} onChange={(e)=>setlawyername(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <td>Court city</td>
                        <td><input type="text" name="Court_City" className="text1"  value={Court_City} onChange={(e)=>setcity(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Court State</td>
                        <td><input type="text" name="Court_State" className="text1"  value={Court_State} onChange={(e)=>setstate(e.target.value)}/></td>
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

export default Punishmentform;