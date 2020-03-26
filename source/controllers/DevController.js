//Axios => Será utilizada para a retirada de informações da API do github
const axios = require("axios");

const Dev = require("../models/Dev");

const parseAsString = require("../utils/parseStringAsArray");

//Controller apresenta no máximo 5 funções. Index, show, store, update, destroy
//Index -> listar recurso
//Show -> mostra um único item
//Store -> Cadastrar um item
//Update -> editar um item
//Destroy -> deletar um item

module.exports = {
    //Função para listar usuário
    async index(request, response)
    {
        const devs = await Dev.find();
        return response.json(devs);
    },

    //Função para cadastrar usuário
    async store(request, response) 
    {
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({ github_username }); //Checa se já existe algum usuário com esse github cadastrado

        if(!dev)
        {
            const apiResponse = await axios.get( `https://api.github.com/users/${github_username}` ); //Await => indica que o código deve esperar o fim da execução dessa linha para continuar a ser executado
        
            const { name = login, avatar_url, bio } = apiResponse.data;// Recolhe as informações nome, vatr_url e bio do perifl do github. Se não existir um nome, ele pega o login do usuário
            
            const techsArray = parseStringAsArray(techs);

            const location ={
                type: "Point",
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        return response.json(dev);
    }

 //   async update() {
//
//   }, //editar informações de um usuário
//
//    async destroy(){
//
//    },//deletar um usuário

} 