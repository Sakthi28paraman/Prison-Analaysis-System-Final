import { useState } from "react";
import '../createprison.css'

function CreatePage () {

    const Back = ()=>{
      window.location.replace("http://localhost:3000/delete")
    }
    const [Visitor_ID, setvisitorid] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Visitor_ID};
        
        fetch('http://localhost:3001/api/DeleteVisitor',{
            method:'DELETE',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('DELETED');
        })
        setvisitorid('');
    }
    return(
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Guard Creation</h1>
                </div>
            <div className="createprison2">
                <br />
                <form>
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Guard Name</td>
                        <td><input type="text" name ="Visitor_ID" className="text1"  value={Visitor_ID} onChange={(e)=>setvisitorid(e.target.value)} /></td>
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
export default CreatePage;