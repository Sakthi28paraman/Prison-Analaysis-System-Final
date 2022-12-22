const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Prison = new Schema({

        Prison_Name : {type: String , required: true},
        Prison_ID : {type: String , required: true},
        Prison_capacity : {type: Number , required: true},
        Prison_City : {type: String , required: true},
        Prison_State : {type: String , required: true},
        Current_Prisoners:{type:Number , required:true},
        No_of_Males:{type:Number , required:true},
        No_of_Females:{type:Number , required:true}
    },{collection:'Prison'}
)

module.exports = mongoose.model('Prison',Prison)