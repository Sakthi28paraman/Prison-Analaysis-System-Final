import { useState } from "react";
import "./createprison.css"

function Visitorform(){
    function Back(){
        window.location.replace("http://localhost:3000/create")
    }

    const [Visitor_Name,setvisitorname] = useState('');
    const [Visitor_ID,setvisitorid] = useState('');
    const [Prisoner_ID,setprisonerid] = useState('');
    const [Visitor_Relation,setrelation] = useState('');
    const [Visitor_City , setvisitorcity] = useState('');
    const [Visitor_State, setvisitorstate] = useState('');

    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Visitor_Name,Visitor_ID,Prisoner_ID,Visitor_Relation,Visitor_City,Visitor_State}

        fetch('http://localhost:3001/api/UpdateVisitor',{
            method : 'PUT',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then((body)=>{
            console.log(body);
            console.log('Updated');
        })
        setvisitorname('');
        setvisitorid('');
        setprisonerid('');
        setrelation('');
        setvisitorcity('');
        setvisitorstate('');
    }
    return (
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Visitor Creation</h1>
                </div>
            <div className="createprison2">
                <br />
                <form method="post">
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Visitor Name</td>
                        <td><input type="text" name ="Visitor_Name" className="text1"  value={Visitor_Name} onChange={(e)=>setvisitorname(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Prisoner ID</td>
                        <td><input type="text" name="Prisoner_ID" className="text1"  value={Prisoner_ID} onChange={(e)=>setprisonerid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Visitor ID</td>
                        <td><input type="text" name="Visitor_ID" className="text1"  value={Visitor_ID} onChange={(e)=>setvisitorid(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Visitor Relation</td>
                        <td><input type="text" name="Visitor_Relation" className="num1"  value={Visitor_Relation} onChange={(e)=>setrelation(e.target.value)}/></td>
                    </tr>
                            <tr>
                                <th className="h5">Address</th>
                            </tr>

                                <tr>
                                    <td  className="c1">City</td>
                                    <td><input type="text" name="Visitor_City" className="text1"  value={Visitor_City} onChange={(e)=>setvisitorcity(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td className="c2">State</td>
                                    <td><input type="text" name="Visitor_State" className="text1"  value={Visitor_State} onChange={(e)=>setvisitorstate(e.target.value)} /></td>
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

export default Visitorform;