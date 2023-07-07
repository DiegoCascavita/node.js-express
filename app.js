const saludos = require("./saludos.js"); //importar
//alternativa
const { saludar, saludarHolaMundo } = require("./saludos.js");

console.log(saludos.saludar("diego"));
console.log(saludos.saludarHolaMundo());

