import { useState } from "react";

import "./createprison.css"

function Prisonform(){
    function Back(){
        window.location.replace("http://localhost:3000/update")
    }

    const [Prison_Name, setprisonname] = useState('');
    const [Prison_ID, setprisonid] = useState('');
    const [Prison_capacity,setcapacity] = useState('');
    const [Prison_City , setprisoncity] = useState('');
    const [Prison_State, setprisonstate] = useState('');
    const [Current_Prisoners,setcurrent] = useState('');
    const [No_of_Males,setmales] = useState('');
    const[No_of_Females,setfemales] = useState('');

    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Prison_Name,Prison_ID,Prison_capacity,Prison_City,Prison_State,Current_Prisoners,No_of_Males,No_of_Females}

        fetch('http://localhost:3001/api/UpdatePrison',{
            method : 'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log(body);
            console.log('Updated');
        })
        setprisonname('');
        setprisonid('');
        setcapacity('');
        setprisoncity('');
        setprisonstate('');
        setcurrent('');
        setmales('');
        setfemales('');
    }

    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Prison Creation</h1>
                </div>
            <div className="createprison2">
                <br />
                <form  method="post" autoComplete="on">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Prison Name</td>
                        <td><input type="text" name ="Prison_Name" className="text1" value={Prison_Name} onChange={(e)=>setprisonname(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Prison ID</td>
                        <td><input type="text" name="Prison_ID" className="text1" value={Prison_ID} onChange={(e)=>setprisonid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Prison Capacity</td>
                        <td><input type="Number" name="Prison_capacity" className="num1" value={Prison_capacity} onChange={(e)=>setcapacity(e.target.value)} /></td>
                    </tr>
                            <tr>
                                <th className="h5">Prison Location</th>
                            </tr>

                                <tr>
                                    <td  className="c1">Prison City</td>
                                    <td><input type="text" name="Prison_City" className="text1" value={Prison_City} onChange={(e)=>setprisoncity(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td className="c2">Prison State</td>
                                    <td><input type="text" name="Prison_State" className="text1" value={Prison_State} onChange={(e)=>setprisonstate(e.target.value)} /></td>
                                </tr>
                    <tr>
                        <td>Current Prisoners</td>
                        <td><input type="Number" name="Current_Prisoners" className="num1"value={Current_Prisoners} onChange={(e)=>setcurrent(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Males</td>
                        <td><input type="Number" name="No_of_Males" className= "num1" value={No_of_Males} onChange={(e)=>setmales(e.target.value)}/></td>
                    </tr>
                    <tr>
                               <td>Females</td>
                        <td><input type="Number" name="No_of_Females" className="num1" value={No_of_Females} onChange={(e)=>setfemales(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <td align="center" colspan="2" >
                    <input type="submit" value="Update" className="Submit" onClick={handlesubmit}/>
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