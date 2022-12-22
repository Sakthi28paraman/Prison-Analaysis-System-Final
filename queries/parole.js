const Parole = require("../models/Parole")
//const prisoner = require("../models/prisoner")

Createparole = (req,res) =>{
    const body = req.body
    console.log(body)
    if(!body){
        return res.status(400).json({
            success:false,
            error : 'Provide a parole',
        })
    }

    const parole = new Parole(body)

    if(!parole){
        return res.status(400).json({
            success: false,
            error:err
        })
    }

    parole
    .save()
    .then(() =>{
        return res.status(201).json({
            success : true,
            message : 'parole Details Created!!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message : "parole Details Not Created!!"
        })
    })
}
updateparole = async(req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success : false,
            error : 'Body is needed for update',
        })
    }
    Parole.findOne({ Parole_ID:body.Parole_ID},(err,parole)=>{
            if(err){
                return res.status(404).json({
                    err,
                    message : 'parole Not Found!!!',
                })    
            }
            // parole.parole = body.parole_Name
            parole.Parole_ID = body.Parole_ID
            parole.Prisoner_ID = body.Prisoner_ID
            parole.No_of_Times = body.No_of_Times
            parole.Out_year = body.Out_year
            parole.Out_Month = body.Out_Month
            parole.Out_Date = body.Out_Date
            parole.In_year = body.In_year
            parole.In_Month = body.In_Month
            parole.In_Date = body.In_Date

            parole
                .save()
                .then(()=>{
                    return res.status(200).json({
                        success:true,
                        id :  parole._id,
                        message: "parole Updated" 
                    })
                })
                .catch(error =>{
                    return res.status(404).json({
                        error,
                        message:"parole Updated",
                    })
                })
            })
}
deleteparole  = async (req, res) => {
    await Parole.findOneAndDelete({ Parole_ID:body.Parole_ID }, (err, parole) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!parole) {
            return res
                .status(404)
                .json({ success: false, error: `parole not found` })
        }

        return res.status(200).json({ success: true, data: parole })
    }).catch(err => console.log(err))
}

getparoleById = async (req, res) => {
    await Parole.findOne({  Parole_ID:body.Parole_ID }, (err, parole) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!parole) {
            return res
                .status(404)
                .json({ success: false, error: `parole not found` })
        }
        return res.status(200).json({ success: true, data: parole})
    }).catch(err => console.log(err))
}

getparole = async (req, res) => {
    await parole.find({}, (err, parole) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!parole.length) {
            return res
                .status(404)
                .json({ success: false, error: `parole not found` })
        }
        return res.status(200).json({ success: true, data: parole })
    }).catch(err => console.log(err))
}

module.exports = {
    Createparole,
    updateparole,
    deleteparole,
    getparoleById,
    getparole
}