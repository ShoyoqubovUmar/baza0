const Student = require('../models/students')

exports.index = async (req,res)=>{
    let data = await Student.find({})
    if(data){
        res.json({title:"All student",data})
    }
}
exports.show = async (req,res)=>{
    let data = await Student.findById(req.params.id)
    if(data){
        res.json({title:"Special student",data})
    }
}
exports.create = (req,res)=>{
    let {firstName, lastName, email, phone, password,parentsNumber}=req.body
    if(firstName && lastName && email && phone && password && parentsNumber){
        let student = new Student({
            firstName,
            lastName,
            email,
            phone,
            password,
            parentsNumber:{
                mother:req.body.parentsNumber.mother,
                father:req.body.parentsNumber.father
            }
        })
        student.save()
        .then(data=>{
            if(data){
                    res.json({title:"Student created",data:data})
            }
        })
    }else{
        res.json({title:'malumot toliq kiritilmagan'})
    }
}
exports.remove = async (req,res)=>{
    let data = await Student.findByIdAndDelete(req.params.id)
    if(data){
        res.json({title:"student removed",data})
    }
}
exports.edit = async (req,res)=>{
    let {firstName, lastName, email,subject, phone, parentsNumber, password}=req.body
    let {mother,father} = parentsNumber
    if(firstName || lastName || email || subject || phone || password || mother ||father ){
        let data = await Student.findByIdAndUpdate(req.params.id,req.body)
        if(data){
            res.json({title:"Student edited ",data})
        }
    }else{
        res.json({title:'malumot yoq'})
    }
}