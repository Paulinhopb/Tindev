const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();


mongoose.connect('mongodb+srv://admin1:admin123@app-xydws.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado...")
}).catch((err) => {
    console.log("Erro ao se Conectar : "+err)
});

server.use(express.json());
server.use(routes);

server.listen(3333);
