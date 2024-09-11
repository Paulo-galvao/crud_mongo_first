const db = require('../db.js');

const Schema = db.Schema;

const motoSchema = new Schema({
    marca: {
        type: Schema.Types.String, //type: String
        required: true
    },
    cor: {
        type: Schema.Types.String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    cilindrada: {
        type: BigInt,
        required: true
    },
    peso: {
        type: BigInt,
        required: true
    }
});

const Moto = db.model("Moto", motoSchema);

module.exports = Moto;