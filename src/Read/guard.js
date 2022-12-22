import React from "react";
import "../createprison.css"


const Back = () =>{
    window.location.replace("http://localhost:3000/read")
}

class ReadPage extends React.Component{
    constructor(props){
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
            "http://localhost:3001/api/ReadGuard")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
        }
        render(){
            const { DataisLoaded, items } = this.state;
            console.log("hello");
            console.log(items);
            if (!DataisLoaded) return <div>
                <h1> Pleses wait some time.... </h1> </div> ;
                return (
                    <div className = "App">
                         {
                            Object.keys(items.data).map((key) => ( 
                            <ol key = {key} >
                                Guard_Name: { items.data[key].Guard_Name },
                                Guard_ID: { items.data[key].Guard_ID },  
                                Prison_ID: { items.data[key].Prison_ID }, 
                                Guard_Age: { items.data[key].Guard_Age },
                                Guard_City:{items.data[key].Guard_City} 
                                Guard_State:{items.data[key].Guard_State} 
                                Guard_Salary:{items.data[key].Guard_Salary} 
                                </ol>  
                            ))
                        }
                    <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
                    </div>
                );
            }
    }

export default ReadPage;