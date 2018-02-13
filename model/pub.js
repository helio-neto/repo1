'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let beer = new Schema({
    name: String,
    style: String,
    abv: String,
    ibu: String,
    obs: String
});

let pub = new Schema({
    name: String,
    email: String,
    address: {
        street: String,
        geo: { lat: Number, lng: Number },
        city: String,
        uf: String
    },
    owner: String,
    phone: String,
    photo: String,
    beers: [beer],
    created: { type: Date, default: Date.now }
});

let modelPub = mongoose.model('Pub', pub);

module.exports = modelPub;