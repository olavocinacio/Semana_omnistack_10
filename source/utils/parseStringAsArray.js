module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(",").map(tech => tech.trim());  //Separa a string de entrada em techs em um vetor onde cada vírgula marca o avanço de uma posição e os espaços são desconsiderados
}