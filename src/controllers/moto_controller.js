const Moto = require('../models/moto_model.js');

function store(req, res) {
    Moto.create(req.body);
    res.json();
}

function index(req, res) {
    const content = Moto.find().exec();
    res.json(content);
}

function show(req, res) {
    const content = Moto.findById(req.params.id).exec();
    res.json(content);
}

function update(req, res) {
    Moto.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
}

function destroy(req, res) {
    Moto.findByIdAndDelete(req.params.id).exec();
    res.json();
}

module.exports = {store, index, show, update, destroy};