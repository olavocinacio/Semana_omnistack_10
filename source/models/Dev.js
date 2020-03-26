//Models => Representações de entidades dentro da aplicação
//Entidade =>  Informações que serão armazenadas no banco de dados => No caso desse aplicativo, é o cadastro do usuário

const mongoose = require("mongoose");

const PointSchema = require("./utils/PointSchema")

//Schema => estrutura da entidade dentro do banco de dados
const devSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: { 
        type: PointSchema,
        index: "2dsphere", //Índice de uma medida de duas dimensões -> latitude e longitude
     }
});

module.exports = mongoose.model("Dev", devSchema);