'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let beer = new Schema({
    name: String,
    style: String,
    abv: String,
    ibu: String
});

let pub = new Schema({
    name: String,
    email: String,
    address: {
        street: String,
        geo: { lat: Number, lng: Number }
    },
    owner: String,
    phone: String,
    photo: String,
    beers: [beer],
    date: { type: Date, default: Date.now }
});

let modelPub = mongoose.model('Pub', pub);

module.exports = modelPub;