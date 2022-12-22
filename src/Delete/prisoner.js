import { useState } from "react";
import '../createprison.css'

function CreatePage () {

    const Back = ()=>{
      window.location.replace("http://localhost:3000/delete")
    }
    const [Prisoner_ID, setprisonerid] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault();
        const blog = {Prisoner_ID};
        
        fetch('http://localhost:3001/api/DeletePrisoner',{
            method:'DELETE',
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('DELETED');
        })
        setprisonerid('');
    }
    return(
        <div className="createpage">
                <div className="createhead">
                    <br />
                    <h1 >Prisoner Deletion</h1>
                </div>
            <div className="createprison2">
                <br />
                <form>
                    <table className="table" cellPadding={10}>
                    <tr>
                        <td>Guard Name</td>
                        <td><input type="text" name ="Prisoner_ID" className="text1"  value={Prisoner_ID} onChange={(e)=>setprisonerid(e.target.value)} /></td>
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