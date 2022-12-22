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
            "http://localhost:3001/api/ReadPrison")
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
                    <div className = "createpage">
                         {
                            Object.keys(items.data).map((key) => ( 
                            <ol key = {key} >
                                Prison_Name: { items.data[key].Prison_Name },  
                                Prison_ID: { items.data[key].Prison_ID }, 
                                Prison_Capacity: { items.data[key].Prison_Capacity },
                                Prison_City:{items.data[key].Prison_City} 
                                Prison_State:{items.data[key].Prison_State} 
                                Current_Prisoners:{items.data[key].Current_Prisoners} 
                                No_of_Males:{items.data[key].No_of_Males} 
                                No_of_females:{items.data[key].No_of_Females} 
                                </ol>  
                            ))
                        }
                    <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
                    </div>
                );
            }
    }
export default ReadPage;