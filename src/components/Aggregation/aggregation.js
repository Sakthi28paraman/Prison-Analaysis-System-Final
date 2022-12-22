import React from "react";
const search=()=>{
    window.location.replace("http://localhost:3001/api/Aggregate1")
}
const search2=()=>{
    window.location.replace("http://localhost:3001/api/Aggregate2")
}
function Aggregate(){
    return(
        <div>
            <div>
                <center>
                <h1>Find Max Age of the guard from other states</h1>
                <button variant = "contained" className="Back" color="error" onClick={search}>OK</button>

                </center>
            </div>
            <div>
                <center>
                <h2>sort the Prisoners Based on the no of juve</h2>
                <button variant = "contained" className="Back" color="error" onClick={search2}>OK</button>
                </center>

            </div>
        </div>
    )
}

export default Aggregate;