const {model,Schema}= require('mongoose');

module.exports = model("students",new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:Number,
    parentsNumber:
    {
        mother:Number,
        father:Number,
    },
    password:String,
    totalScore:Number,
    attendance:[
        {
            status:Boolean,
            date:Date,
            reason:String,
            score:Number
        }
    ]
}))