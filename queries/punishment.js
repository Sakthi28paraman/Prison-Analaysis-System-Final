const Punishment = require("../models/Punishment")
//const prisoner = require("../models/prisoner")

Createpunishment = (req,res) =>{
    const body = req.body
    console.log(body)
    if(!body){
        return res.status(400).json({
            success:false,
            error : 'Provide a Punishment',
        })
    }

    const punishment = new Punishment(body)

    if(!punishment){
        return res.status(400).json({
            success: false,
            error:err
        })
    }

    punishment
    .save()
    .then(() =>{
        return res.status(201).json({
            success : true,
            message : 'punishment Details Created!!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message : "punishment Details Not Created!!"
        })
    })
}
updatepunishment = async(req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success : false,
            error : 'Body is needed for update',
        })
    }
    Punishment.findOne({ Punishment_ID:body.Punishment_ID},(err,punishment)=>{
            if(err){
                return res.status(404).json({
                    err,
                    message : 'punishment Not Found!!!',
                })    
            }
            // punishment.punishment = body.punishment_Name
            punishment.Punishment_ID = body.Punishment_ID
            punishment.Prisoner_ID = body.Prisoner_ID
            punishment.Punishment = body.Punishment
            punishment.Case_No = body.Case_No
            punishment.Crime = body.Crime
            punishment.Sections  = body.Sections
            punishment.Lawyer_Name = body.Lawyer_Name
            punishment.Court_City = body.Court_City
            punishment.Court_State = body.Court_State

            punishment
                .save()
                .then(()=>{
                    return res.status(200).json({
                        success:true,
                        id :  punishment._id,
                        message: "punishment Updated" 
                    })
                })
                .catch(error =>{
                    return res.status(404).json({
                        error,
                        message:"punishment Updated",
                    })
                })
            })
}
deletepunishment  = async (req, res) => {
    await Punishment.findOneAndDelete({ Punishment_ID:body.Punishment_ID }, (err, punishment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!punishment) {
            return res
                .status(404)
                .json({ success: false, error: `punishment not found` })
        }

        return res.status(200).json({ success: true, data: punishment })
    }).catch(err => console.log(err))
}

getpunishmentById = async (req, res) => {
    await Punishment.findOne({Punishment_ID:body.Punishment_ID }, (err, punishment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!punishment) {
            return res
                .status(404)
                .json({ success: false, error: `punishment not found` })
        }
        return res.status(200).json({ success: true, data: punishment})
    }).catch(err => console.log(err))
}

getpunishment = async (req, res) => {
    await Punishment.find({}, (err, punishment) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!punishment.length) {
            return res
                .status(404)
                .json({ success: false, error: `punishment not found` })
        }
        return res.status(200).json({ success: true, data: punishment })
    }).catch(err => console.log(err))
}

module.exports = {
    Createpunishment,
    updatepunishment,
    deletepunishment,
    getpunishmentById,
    getpunishment
}