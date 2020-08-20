var mongoose =require('mongoose');
var BankAccount=mongoose.model('bankAccount',{
   // bankAcountID:{type:String},
    accountNumber:{type:Number},
    accountHolder:{type:String},
    bankID:{type:String},
    IFSC:{type:String}
});
module.exports={BankAccount};