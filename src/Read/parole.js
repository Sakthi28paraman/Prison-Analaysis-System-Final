import React from "react";


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
            "http://localhost:3001/api/ReadParole")
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
                                Parole_ID: { items.data[key].Prisoner_Name },
                                Prisoner_ID: { items.data[key].Prisoner_ID },  
                                No_of_Times: { items.data[key].Prison_ID }, 
                                Out_year: { items.data[key].Out_year },
                                Out_Month:{items.data[key].Out_Month} 
                                Out_Date:{items.data[key].Out_Date} 
                                In_Year:{items.data[key].In_Year} 
                                In_Month:{items.data[key].In_Month} 
                                In_Date:{items.data[key].In_Date}    
                            </ol>  
                            ))
                        }
                    <button variant ="contained" className="Back" color="error" onClick={Back}>Back</button>
                    </div>
                );
            }
    }

export default ReadPage;