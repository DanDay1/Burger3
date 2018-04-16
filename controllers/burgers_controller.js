var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');


router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});


router.post('/burgers', function(req, res) {
    burger.insertOne([
        'burger_name'
    ], [req.body.burger_name], function(data) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(data) {
        res.redirect('/');
    });
});

router.delete('/burgers/:id', function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne( 
    condition, function(data) {
    res.redirect("/");
  });
});


// API DELETE: components will use this to delete saved article in the database
// router.post('/burgers/:id', function(req, res) {
//     burger.remove(req.params.articleMongoId, function(err, todo) {
//         if (err) {
//             // Send Failure header
//             console.log(err);
//             res.sendStatus(400);
//         } else {
//             // Send Success header
//             res.sendStatus(200);
//         }
//     });

// });

// API DELETE: components will use this to delete saved article in the database
// router.post("/api/delete/:articleMongoId", function(req, res) {
//     console.log(req.params.articleMongoId)
//     Article.findByIdAndRemove(req.params.articleMongoId, function(err, todo) {
//         if (err) {
//             // Send Failure header
//             console.log(err);
//             res.sendStatus(400);
//         } else {
//             // Send Success header
//             res.sendStatus(200);
//         }
//     });

// });

// DELETE FROM `burgers_db`.`burgers` WHERE `id`='17';

// router.put('/burgers/:id', function(req, res) {
//     var condition = 'id = ' + req.params.id;

//     burger.deleteOne({
//         DELETE this.id;
//     }, condition, function(data) {
//         res.redirect('/');
//     });
// });



module.exports = router;