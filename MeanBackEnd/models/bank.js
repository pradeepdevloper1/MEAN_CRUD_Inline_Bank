var mongoose =require('mongoose');
var Bank=mongoose.model('bank',{
    bankID:{type:String},
    bankName:{type:String},
   });
module.exports={Bank};