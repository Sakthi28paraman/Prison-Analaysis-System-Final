// const Prison = require("../models/Prison")
const Prison = require("../models/Prison")

CreatePrison = (req,res) =>{
    const body = req.body
    console.log(body)
    if(!body){
        return res.status(400).json({
            success:false,
            error : 'Provide a Prison',
        })
    }

    const prison = new Prison(body)

    if(!prison){
        return res.status(400).json({
            success: false,
            error:err
        })
    }

    prison
    .save()
    .then(() =>{
        return res.status(201).json({
            success : true,
            message : 'Prison Details Created!!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message : "Prison Details Not Created!!"
        })
    })
}
updatePrison = async(req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success : false,
            error : 'Body is needed for update',
        })
    }
    Prison.findOne({ Prison_ID:body.Prison_ID},(err,prison)=>{
            if(err){
                return res.status(404).json({
                    err,
                    message : 'Prison Not Found!!!',
                })    
            }
            prison.Prison_Name = body.Prison_Name
            prison.Prison_ID = body.Prison_ID
            prison.Prison_capacity = body.Prison_capacity
            prison.Prison_City = body.Prison_City
            prison.Prison_State = body.Prison_State
            prison.Current_Prisoners = body.Current_Prisoners
            prison.No_of_Males = body.No_of_Males
            prison.No_of_Females = body.No_of_Females

            prison
                .save()
                .then(()=>{
                    return res.status(200).json({
                        success:true,
                        id :  prison._id,
                        message: "Prison Updated" 
                    })
                })
                .catch(error =>{
                    return res.status(404).json({
                        error,
                        message:"Prison Updated",
                    })
                })
            })
}
deletePrison  = async (req, res) => {
    await Prison.findOneAndDelete({ _id: req.params.id }, (err, prison) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!prison) {
            return res
                .status(404)
                .json({ success: false, error: `Prison not found` })
        }

        return res.status(200).json({ success: true, data: prison })
    }).catch(err => console.log(err))
}

getPrisonById = async (req, res) => {
    await Prison.findOne({ _id: req.params.id }, (err, prison) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!prison) {
            return res
                .status(404)
                .json({ success: false, error: `Prison not found` })
        }
        return res.status(200).json({ success: true, data: prison})
    }).catch(err => console.log(err))
}

getPrison = async (req, res) => {
    await Prison.find({}, (err, prison) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!prison.length) {
            return res
                .status(404)
                .json({ success: false, error: `Prison not found` })
        }
        return res.status(200).json({ success: true, data: prison })
    }).catch(err => console.log(err))
}

module.exports = {
    CreatePrison,
    updatePrison,
    deletePrison,
    getPrisonById,
    getPrison
}