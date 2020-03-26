const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

//APRESENTA INCONSISTÊNCIA NA LOCALIZAÇÃO 

module.exports = {
        //Busca de devs num raio de 10km com filtro de tecnologias
        async index(request, response)  {
            const { latitude, longitude, techs} = request.query;

            const techsArray = parseStringAsArray(techs);

            const devs = await Dev.find({
                techs: {
                    $in: techsArray, //Procura usuários que possuam uma das tecnologias em "techsArray"
                },
                location: {
                    $near: { //Operador do mongodb que permite encontrar usuários próximos
                        $geometry:{
                            type: "Point", 
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: 10000, //10000m -> 10km
                    }
                }
            });

            return response.json( { devs: [] } );
        }
}