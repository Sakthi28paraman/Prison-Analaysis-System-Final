const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Parole = new Schema({

        Parole_ID : {type: String , required: true},
        Prisoner_ID : {type: String , required: true},
        No_of_Times : {type: Number , required: true},
        Out_year : {type: [String] , required: true},
        Out_Month: {type:[String],required:true},
        Out_Date : {type:  [String] , required: true},
        In_year : {type: [String] , required: true},
        In_Month: {type:[String],required:true},
        In_Date : {type:  [String] , required: true},
    },
       {collection:"Parole"}
)

module.exports = mongoose.model('Parole',Parole)
