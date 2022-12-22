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
            "http://localhost:3001/api/ReadVisitor")
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
                                Visitor_Name: { items.data[key].Visitor_Name },
                                Visitor_ID: { items.data[key].Visitor_ID },  
                                Prisoner_ID: { items.data[key].Prisoner_ID }, 
                                Visitor_Relation: { items.data[key].Visitor_Relation },
                                Visitor_City:{items.data[key].Visitor_City} 
                                Visitor_State:{items.data[key].Visitor_State} 
                                </ol>  
                            ))
                        }
                    <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
                    </div>
                );
            }
    }

export default ReadPage;