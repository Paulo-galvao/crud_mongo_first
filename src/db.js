const mongoose = require('mongoose');
const mongoDB = "mongodb://localhost:27017/crud_1";

async function main() {
    await mongoose.connect(mongoDB);
}

main().then(() => console.log("sucesso")).catch(err => console.log(err));

module.exports = mongoose;