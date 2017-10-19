const config = require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/dbMongo');
const pub = require('./model/pub');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(config.server.port);
console.log("App listening on port : " + config.server.port);

app.route('/')
    .get(function(req, res) {
        res.send("Hello Beer Lovers!!! ");
    });

app.route('/api/pub')
    .get(function(req, res) {
        pub.find(function(err, pub) {
            if (err)
                res.send(err);

            res.json(pub);
        });
    })
    .post(function(req, res) {

        let Pub = new pub(); // create a new instance of the Bear model
        Pub.name = req.body.name; // set the bears name (comes from the request)
        Pub.owner = req.body.owner;
        Pub.phone = req.body.phone;
        // save the bear and check for errors
        Pub.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Pub created!' });
        });

    });

app.route('/api/pub/:pub_id')
    .get(function(req, res) {
        pub.findById(req.params.pub_id, function(err, pub) {
            if (err)
                res.send(err);
            res.json(pub);
        });
    })
    .put(function(req, res) {
        pub.update({ _id: req.params.pub_id }, {
                $push: {
                    beers: {
                        name: req.body.name,
                        style: req.body.style,
                        abv: req.body.abv,
                        ibu: req.body.ibu
                    }
                }
            },
            (err, pub) => {
                if (err)
                    res.send(err);
                res.json({ message: 'Beer added!' });
            });
    })
    .delete(function(req, res) {
        pub.remove({ _id: req.params.pub_id }, function(err, pub) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted pub!!!' });
        });
    });