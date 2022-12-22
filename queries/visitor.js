const Visitor = require("../models/visitors")
//const prisoner = require("../models/prisoner")

Createvisitor = (req,res) =>{
    const body = req.body
    console.log(body)
    if(!body){
        return res.status(400).json({
            success:false,
            error : 'Provide a visitor',
        })
    }

    const visitor = new Visitor(body)

    if(!visitor){
        return res.status(400).json({
            success: false,
            error:err
        })
    }

    visitor
    .save()
    .then(() =>{
        return res.status(201).json({
            success : true,
            message : 'visitor Details Created!!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message : "visitor Details Not Created!!"
        })
    })
}
updatevisitor = async(req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success : false,
            error : 'Body is needed for update',
        })
    }
    Visitor.findOne({ Visitor_ID:body.Visitor_ID},(err,visitor)=>{
            if(err){
                return res.status(404).json({
                    err,
                    message : 'visitor Not Found!!!',
                })    
            }
            visitor.Visitor_Name = body.Visitor_Name
            visitor.Visitor_ID = body.Visitor_ID
            visitor.Prisoner_ID = body.Prisoner_ID
            visitor.Visitor_Relation = body.Visitor_Relation
            // visitor.Visitor_Age = body.Visitor_Age
            // visitor.Case_No = body.Case_No
            // visitor.Crime = body.Crime
            // visitor.Sections  = body.Sections
            // visitor.Lawyer_Name = body.Lawyer_Name
            visitor.Visitor_City = body.Visitor_City
            visitor.Visitor_State = body.Visitor_State

            visitor
                .save()
                .then(()=>{
                    return res.status(200).json({
                        success:true,
                        id :  visitor._id,
                        message: "visitor Updated" 
                    })
                })
                .catch(error =>{
                    return res.status(404).json({
                        error,
                        message:"visitor Updated",
                    })
                })
            })
}
deletevisitor  = async (req, res) => {
    await Visitor.findOneAndDelete({ Visitor_ID:body.Visitor_ID }, (err, visitor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!visitor) {
            return res
                .status(404)
                .json({ success: false, error: `visitor not found` })
        }

        return res.status(200).json({ success: true, data: visitor })
    }).catch(err => console.log(err))
}

getvisitorById = async (req, res) => {
    await Visitor.findOne({  Visitor_ID:body.Visitor_ID}, (err, visitor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!visitor) {
            return res
                .status(404)
                .json({ success: false, error: `visitor not found` })
        }
        return res.status(200).json({ success: true, data: visitor})
    }).catch(err => console.log(err))
}

getvisitor = async (req, res) => {
    await Visitor.find({}, (err, visitor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!visitor.length) {
            return res
                .status(404)
                .json({ success: false, error: `visitor not found` })
        }
        return res.status(200).json({ success: true, data: visitor })
    }).catch(err => console.log(err))
}

module.exports = {
    Createvisitor,
    updatevisitor,
    deletevisitor,
    getvisitorById,
    getvisitor
}