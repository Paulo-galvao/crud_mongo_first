const Caneta = require('../models/caneta_model.js');

function store(req, res) {
    Caneta.create(req.body);
    res.json();
}

function index(req, res) {
    const content = Caneta.find().exec();
    res.json(content);
}

function show(req, res) {
    const content = Caneta.findById(req.params.id).exec();
    res.json(content);
}

function update(req, res) {
    Caneta.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
}

function destroy(req, res) {
    Caneta.findByIdAndDelete(req.params.id).exec();
    res.json();
}

module.exports = {store, index, show, update, destroy};