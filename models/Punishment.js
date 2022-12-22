const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Punishment = new Schema({

        Punishment_ID : {type: String , required: true},
        Prisoner_ID : {type: String , required: true},
        Punishment : {type: String , required: true},
        Case_No : {type: Number , required: true},
        Crime : {type:[String],required:true},
        Sections : {type:  [String] , required: true},
        Lawyer_Name : {type: String, required: true},
        Court_City: {type: String ,required:true},
        Court_State : {type: String , required: true},
    },
       {collection:"Punishment"}
)

module.exports = mongoose.model('Punishment',Punishment)
