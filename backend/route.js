const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const database = require('./database');
const db = database.db;



//users
router.post('/signup', (req, res)=>{
    // console.log(req.body);
    db.users.find({email: req.body.email}, (err, data)=>{
        if(data.length > 0){
            console.log("already exist");
        }else{
            bcrypt.hash(req.body.password, 10, (err, hash)=>{
                if(err){
                    console.log("error in hashing");
                }else{
                    db.users.save({
                        email: req.body.email,
                        password: hash
                    });
                }
                console.log("inserted");
            })
        }
    })  
});

router.post('/login', (req, res)=>{
    // console.log(req.body);

    db.users.findOne({email: req.body.email}, (err, data)=>{

        if(data){
            bcrypt.compare(req.body.password, data.password, (err, result)=>{
                if(result){
                    const token = jwt.sign({
                        userId: data._id
                    }, "private key");
        
                console.log(token);
                res.send(token);

                }else{
                    console.log("password doesnot matched");                  
                }
            })
        }else{
            console.log("User doesnot exist");            
        }
    })
})

//customers
router.get('/getAll', (req, res)=>{
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