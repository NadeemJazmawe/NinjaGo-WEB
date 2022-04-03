const express = require('express');
const router = express.Router();
const Ninja = require('../schema/ninja');

router.get('/ninjas', function(req,res){

    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    })

    // Ninja.geoNear(
    //     {type:'Point' , coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    //     {maxDistance: 1000000, spherical: true}
    // ).then(function(ninjas){
    //     res.send(ninjas);
    // });
    // res.send({type:'GET'})
});

router.post('/ninjas',  async function(req,res){
    // var ninja = new Ninja(req.body);
    // ninja.save();

    //  OR

    const {name, rank, available, lat, long} = req.body;
    
    // res.send(req.body)
    // res.send({name: name,
    //         rank: rank,
    //         available: available,
    //         geomtry: {
    //                     type: "Point",
    //                     coordinates: [lat, long]
    //                 }});
    const userToAdd = new Ninja({
        name: name,
        rank: rank,
        available: available,
        geomtry: {
            type: "Point",
            coordinates: [lat, long]
        }
    })
    // res.send("ok");

    userToAdd.save().then(() => {
        console.log("user saved");
      });
      res.send({ "ok": true });
    // Ninja.create(req.body).then(function(ninja){
    //     res.send([{}])
    // })
})

router.put('/edit/:id', async function(req,res){
    // res.send({type:'PUT'})
    // console.log("heelo");
    // const {name, rank, available, lat, long} = req.body;

    // console.log(req.body);

    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(ninja){
        res.send({ok: true});
    })
})

router.delete('/delete/:id', function(req,res){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send({"ok": true});
    })
})

module.exports = router;