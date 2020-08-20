const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { BankAccount } = require('../models/bankaccount');

// => localhost:3000/BankAccount/
router.get('/', (req, res) => {
  BankAccount.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving BankAccount :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        BankAccount.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving BankAccount :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var ba = new BankAccount({
        accountNumber: req.body.accountNumber,
        position: req.body.position,
        accountHolder: req.body.accountHolder,
        bankID: req.body.bankID,
        IFSC:req.body.IFSC,
    });
    ba.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in BankAccount Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var ba = {
      accountNumber: req.body.accountNumber,
      position: req.body.position,
      accountHolder: req.body.accountHolder,
      bankID: req.body.bankID,
      IFSC:req.body.IFSC,
    };
    BankAccount.findByIdAndUpdate(req.params.id, { $set: ba }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in BankAccount Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        BankAccount.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in BankAccount Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;