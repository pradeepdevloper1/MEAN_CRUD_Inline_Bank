const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Bank } = require('../models/bank');

// => localhost:3000/BankAccount/
router.get('/', (req, res) => {
    Bank.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Bank :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Bank.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Bank :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var bk = new Bank({
        bankID:req.body.bankID,
        bankName: req.body.bankName,
        
    });
    bk.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Bank Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var bk = {
        bankID:req.body.bankID,
        bankName: req.body.bankName,
        };
        Bank.findByIdAndUpdate(req.params.id, { $set: bk }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Bank Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Bank.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Bank Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;