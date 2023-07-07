function saludar(nombre){
    return `hola, ${nombre}`
}

function saludarHolaMundo(){
    return 'hola mundo';
}

module.exports.saludar = saludar;//exportar
module.exports.saludarHolaMundo = saludarHolaMundo;//exportar
// alternativa
module.exports = {
    saludar : saludar,
    saludarHolaMundo : saludarHolaMundo 
}