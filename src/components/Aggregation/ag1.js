import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);
const handleClick = ()=> {
  window.location.replace("http://localhost:3000/Aggregatepage")
}

class ReadPage extends React.Component{
  
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            lis:[],
            lis2:[],
            label:[],
            data:[],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch(
"http://localhost:3001/api/Aggregate1")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    lis:json.data,
                    DataisLoaded: true
                });
            })
    }
    lis=[];
    render(){
        const {  lis, label, data } = this.state;
        console.log("hello");
        console.log(lis);
        
        console.log(label,data);
            Object.keys(lis).map((key)=>(
                label.push(lis[key].Prison_Name)
               
            ))
            // Object.keys(lis).map((key)=>(
            //     data.push(lis[key].Total_Likes)
               
            // ))
        const data1 = {
              labels: this.state.label,
              datasets: [
                {
                  label: '# of Votes',
                  data: this.state.data,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            };
            return <div><div><Pie data={data1} height="200px" width="200px" options={{ maintainAspectRatio: false }} /></div>
            <button variant="contained" className="Back" color="error" onClick={handleClick}>back</button></div>
          }
      
        }

export default ReadPage;