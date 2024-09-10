const db = require('../db.js');

const Schema = db.Schema;

const canetaSchema = new Schema({
    cor: {
        type: Schema.Types.String, //type: String
        required: true
    },
    ehBic: {
        type: Schema.Types.Boolean,
        required: true
    }
});

const Caneta = db.model("Caneta", canetaSchema);

module.exports = Caneta;