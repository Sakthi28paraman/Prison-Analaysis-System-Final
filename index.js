const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const Prisonquery =  require("./queries/prison")
const db = require('./DB/connect')
const Router =  require('./routers/route')
// const Prisonmodel = require("./models/Prison")
// const { default: mongoose } = require('mongoose')
const app =express()

const PORT = 3001

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error',console.error.bind(console,"MongoDB connection error:"))

// const prison_details = mongoose.model('Prison',new Prisonmodel)
app.get('/',(req,res) =>{
    res.send('This is Prison Analytics Project!!')
    //res.sendFile(__dirname+'/index.js')
});

// app.post('/Prisonquery',async(req,res)=>{
//     if(await prison_details.findOne({id:req.body.id}))
//     return res.send(req.body)
//     prison_details.insertMany({
//         _id: req.body.Prisonid,
//         name: req.body.Prisonname,
//         Capacity : req.body.Capacity,
//         City : req.body.Prisoncity,
//         State : req.body.Prisonstate,
//         Current_Prisoners: req.body.Current_Prisoners,
//         Males : req.body.Males,
//         Females : req.body.Females
//     })
//     return res.send('user' + req.body.Prisonername+'Added successfully')
// })


app.use('/api',Router)

app.listen(PORT,() => console.log(`Server is Running Successfully on Port ${PORT}`))
