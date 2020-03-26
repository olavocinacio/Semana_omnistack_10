const mongoose = require("mongoose");

//Criando um Schema para coleta de coordenadas -> Retirado da documentação do Mongoose
const PointSchema = new mongoose.Schema({
    type: 
    {
        type: String,
        enum: ["Point"],
        required: true,
    },
    coordinates: 
    {
        type: [Number],
        required: true,
    },
});

module.exports = PointSchema;