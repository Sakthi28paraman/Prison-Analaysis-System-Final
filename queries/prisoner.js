const Prisoner = require("../models/prisoners")
//const prisoner = require("../models/prisoner")

Createprisoner = (req,res) =>{
    const body = req.body
    console.log(body)
    if(!body){
        return res.status(400).json({
            success:false,
            error : 'Provide a prisoner',
        })
    }

    const prisoner = new Prisoner(body)

    if(!prisoner){
        return res.status(400).json({
            success: false,
            error:err
        })
    }

    prisoner
    .save()
    .then(() =>{
        return res.status(201).json({
            success : true,
            message : 'prisoner Details Created!!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message : "prisoner Details Not Created!!"
        })
    })
}
updateprisoner = async(req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success : false,
            error : 'Body is needed for update',
        })
    }
    Prisoner.findOne({ Prisoner_ID:body.Prisoner_ID},(err,prisoner)=>{
            if(err){
                return res.status(404).json({
                    err,
                    message : 'prisoner Not Found!!!',
                })    
            }
            prisoner.Prisoner_Name = body.Prisoner_Name
            prisoner.Prisoner_ID = body.Prisoner_ID
            prisoner.Prison_ID = body.Prison_ID
            prisoner.Prisoner_Age = body.Prisoner_Age
            prisoner.Prisoner_City = body.Prisoner_City
            prisoner.Prisoner_State = body.Prisoner_State
            prisoner.Cell_No = body.Current_Prisonerers
            prisoner.Punishment_ID = body.Punishment_ID
            prisoner.Arrested_Year = body.Arrested_Year
            prisoner.Release_year = body.Release_year

            prisoner
                .save()
                .then(()=>{
                    return res.status(200).json({
                        success:true,
                        id :  prisoner._id,
                        message: "prisoner Updated" 
                    })
                })
                .catch(error =>{
                    return res.status(404).json({
                        error,
                        message:"prisoner Updated",
                    })
                })
            })
}
deleteprisoner  = async (req, res) => {
    await Prisoner.findOneAndDelete({ Prisoner_ID:body.Prisoner_ID }, (err, prisoner) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!prisoner) {
            return res
                .status(404)
                .json({ success: false, error: `prisoner not found` })
        }

        return res.status(200).json({ success: true, data: prisoner })
    }).catch(err => console.log(err))
}

getprisonerById = async (req, res) => {
    await Prisoner.findOne({ Prisoner_ID:body.Prisoner_ID }, (err, prisoner) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!prisoner) {
            return res
                .status(404)
                .json({ success: false, error: `prisoner not found` })
        }
        return res.status(200).json({ success: true, data: prisoner})
    }).catch(err => console.log(err))
}

getprisoner = async (req, res) => {
    await Prisoner.find({}, (err, prisoner) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!prisoner.length) {
            return res
                .status(404)
                .json({ success: false, error: `prisoner not found` })
        }
        return res.status(200).json({ success: true, data: prisoner })
    }).catch(err => console.log(err))
}

module.exports = {
    Createprisoner,
    updateprisoner,
    deleteprisoner,
    getprisonerById,
    getprisoner
}