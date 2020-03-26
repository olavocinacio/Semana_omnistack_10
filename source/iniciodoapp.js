const express = require("express");

//Declarando a "biblioteca" que vai permitir a conexão entre  programa e o banco de dados
const mongoose = require("mongoose");

//Importando as rotas do arquivo rotas.js
const routes = require("./routes");

const app = express();

mongoose.connect("mongodb+srv://vovo:197328@cluster0-afswl.mongodb.net/week10?retryWrites=true&w=majority",{
    useNewUrlParser: true , 
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

//MongoDB -> Banco de dados não relacional hospedado na nuvem
app.listen(3333);


