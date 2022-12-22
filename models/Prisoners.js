const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Prisoner = new Schema({

        Prisoner_Name : {type: String , required: true},
        Prisoner_ID : {type: String , required: true},
        Prison_ID : {type: String , required: true},
        Prisoner_Age : {type: Number , required: true},
        Prisoner_City : {type: String , required: true},
        Prisoner_State : {type: String , required: true},
        Cell_No:{type:Number , required:true},
        Punishment_ID:{type:String , required:true},
        Arrested_Year:{type:Date , required:true},
        Release_Year:{type:Date , required:true}
    },
       {collection:'Prisoner'}
)

module.exports = mongoose.model('Prisoner',Prisoner)