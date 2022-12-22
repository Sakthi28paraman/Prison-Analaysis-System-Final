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
            "http://localhost:3001/api/ReadPrisoner")
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
                                Prisoner_Name: { items.data[key].Prisoner_Name },
                                Prisoner_ID: { items.data[key].Prisoner_ID },  
                                Prison_ID: { items.data[key].Prison_ID }, 
                                Prisoner_Age: { items.data[key].Prisoner_Age },
                                Prisoner_City:{items.data[key].Prisoner_City} 
                                Prisoner_State:{items.data[key].Prisoner_State} 
                                Cell_No:{items.data[key].Cell_No} 
                                Punishment_ID:{items.data[key].Punishment_ID} 
                                Arrested_Year:{items.data[key].Arrested_Year}
                                Release_Year:{items.data[key].Release_Year} 
                                </ol>  
                            ))
                        }
                    <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
                    </div>
                );
            }
    }

export default ReadPage;