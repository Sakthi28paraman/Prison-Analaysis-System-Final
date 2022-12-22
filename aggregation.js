const { MongoClient } = require('mongodb');
agg1 = async (req,res) => {
    console.log('hello');
    const uri = "mongodb://localhost:27017//prisonproject";

    const client = new MongoClient(uri);
        client.connect();
        console.log('connected');

    const pipeline=[
        // '$project':{
        //     'Prison_Name' : 1

        // }
        {
            '$lookup':{
                from:'Guard',
                localField:'Prison_ID',
                foreignField:'Prison_ID',
                as:'Details'
            }},
            {
                '$unwind':"$Details"
            },
            // {
            //     $match:{
            //         Prison_State:{$ne:["$Prison_State","$Details.Guard_State"]}
            //     }
            // },
            {
                    '$group':{
                        _id:{name:'$Details.Guard_Name'},
                        Age:{$max:"$Details.Guard_Age"}
                    }
            },
            {
               
                '$project': {
                  
                    _id:1,
                    Age:1,
                    Prison_State:{$ne:["$Prison_State","$Details.Guard_State"]}
                    
                }
                }

    ];
    lis = []
    const aggCursor = client.db('prisonproject').collection("Prison").aggregate(pipeline);
    await aggCursor.forEach(ele =>{
        lis.push(ele);
    })
    return res.status(200).send({data:lis});
}
agg2 = async (req,res) => {
    console.log('hello');
    const uri = "mongodb://localhost:27017//prisonproject";

    const client = new MongoClient(uri);
        client.connect();
        console.log('connected');

        const pipeline = [ {
                '$match': {
                  Prisoner_Age:{$lt:18}
                }
            },
        
        {
        '$group':
        {
                _id:{Name:"$Prisoner_Name",Age:'$Prisoner_Age'}
        }
        },
        {
        '$project':
        {
        _id:1,
        need:
        {
                $cond:{if:{$lt:['$Prisoner_Age',18]},then:"ok",else:"notok"}
        }
        }
        },
        {
            '$sort': {
              'Prisoner_Age': -1
            }
        }
        ];
    lis = []
    const aggCursor = client.db('prisonproject').collection("Prisoner").aggregate(pipeline);
    await aggCursor.forEach(ele =>{
        lis.push(ele);
    })
    return res.status(200).send({data:lis});
}
// agg3 = async (req,res) => {
//     console.log('hello');
//     const uri = "mongodb://localhost:27017//prisonproject";

//     const client = new MongoClient(uri);
//         client.connect();
//         console.log('connected');

//     const pipeline=[{
//         '$project':{
//             'Prison_Name' : 1

//         },
//             '$group':{
//                 'Prison_State': "Tn"
//             }
//     }
//     ];
//     lis = []
//     const aggCursor = client.db('prisonproject').collection("Prison").aggregate(pipeline);
//     await aggCursor.forEach(ele =>{
//         lis.push(ele);
//     })
//     console.log(lis);
//     return res.status(200).send({data:lis});
// }



module.exports={
    agg1,
    agg2
    // agg3
}