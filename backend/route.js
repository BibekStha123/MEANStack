const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const database = require('./database');
const db = database.db;

router.get('/', (req, res)=>{
    db.customerlist.find({}, (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.send(data);
        }
    });
});

router.post('/submit', (req, res)=>{
    db.customerlist.save({
        name: req.body.name,
        mobile: req.body.mobile,
        address: req.body.address,
        email: req.body.email
    });

    res.redirect('/');
    // console.log(req.body);
    
});

router.put('/edit/:id', (req, res)=>{
    // console.log(req.params.id);
    db.customerlist.findByIdAndUpdate(req.params.id, (err, data)=>{
        if(data){
            console.log(data);
            /* db.customerlist.name = req.body.name,
            db.customerlist.mobile = req.body.mobile,
            db.customerlist.address = req.body.address,
            db.customerlist.email = req.body.email */
        }

    })
});

router.delete('/delete/:id', (req, res)=>{
    // console.log(req.params.id);
    db.customerlist.remove({
        _id: mongojs.ObjectId(req.params.id)
    });
});

module.exports = router;