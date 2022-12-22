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
            "http://localhost:3001/api/ReadPunishment")
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
                               Punishment_ID: { items.data[key].Punishment_ID },  
                                Prisoner_ID: { items.data[key].Prisoner_ID }, 
                                Punishment: { items.data[key].Punishment },
                                Case_No:{items.data[key].Case_No} 
                                Sections:{items.data[key].Sections} 
                                Crime:{items.data[key].Crime}
                                Lawyer_Name:{items.data[key].Lawyer_Name} 
                                Court_City:{items.data[key].Court_City} 
                                Court_State:{items.data[key].Court_State} 
                                </ol>  
                            ))
                        }
                    <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
                    </div>
                );
            }
    }
export default ReadPage;