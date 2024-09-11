const express = require('express');
const app = express();
const port = 3000;

const caneta_route = require('./routes/caneta_route.js');
const moto_route = require('./routes/moto_route.js');

app.use(express.json());
app.use('/caneta', caneta_route);
app.use('/moto', moto_route);

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});
