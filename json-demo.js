const curso = require('./curso.json');

console.log(curso.titulo);//se accede a propiedades del opbjeto
//-------------------------------------------------
let infoCurso = {
    "titulo": "Aula 01 - Node.js",
    "numVistas": 123,
    "temas": [
        "Javascript",
        "React"
    ],
    "publico": true
}
//objeto a string
let infoCursoJSON = JSON.stringify(infoCursoJSON);
//string a json
let infoCursoJS = JSON.parse(infoCursoJSON);