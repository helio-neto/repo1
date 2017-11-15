const router = require('express').Router();
const pub = require('../model/pub');
const hero = require('../model/hero');

router.get('/', (req, res) => {
    res.send("Hello Beer Lovers!!! ");
});

router.get('/api/pub', (req, res) => {
    pub.find(function(err, pub) {
        if (err)
            res.send(err);

        res.json(pub);
    });
});
router.post('/api/pub', (req, res) => {
    // create the pub from the post request
    let Pub = new pub();
    Pub.name = req.body.name;
    Pub.email = req.body.email;
    Pub.address.street = req.body.address.street;
    //Pub.address.geo.lat = req.body.address.geo.lat;
    //Pub.address.geo.lng = req.body.address.geo.lng;
    //Pub.owner = req.body.owner;
    //Pub.phone = req.body.phone;
    //Pub.photo = req.body.photo;
    // save the pub and check for errors
    Pub.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Pub created!' });
    });
});

router.get('/api/pub/:pub_id', (req, res) => {
    pub.findById(req.params.pub_id, function(err, pub) {
        if (err)
            res.send(err);
        res.json(pub);
    });
});
router.put('/api/pub/:pub_id', (req, res) => {
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
});
router.delete('/api/pub/:pub_id', (req, res) => {
    pub.remove({ _id: req.params.pub_id }, function(err, pub) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted pub!!!' });
    });
});

router.get('/api/heroes', (req, res) => {
    hero.find(function(err, hero) {
        if (err)
            res.send(err);

        res.json(hero);
    });
});
router.post('/api/heroes', (req, res) => {
    // create the pub from the post request
    let Hero = new hero();
    Hero.name = req.body.name;

    Hero.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Hero created!' });
    });
});
module.exports = router;