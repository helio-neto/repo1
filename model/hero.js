'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hero = new Schema({
    id: Number,
    name: String
});

let modelHero = mongoose.model('Hero', hero);

module.exports = modelHero;