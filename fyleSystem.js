const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, contenido) => {
    if (err) {
        console.log(err);
    } else {
    console.log(contenido);
    }
});

fs.appendFile('index.html', '<p>carnalin</p>',(err) => {
    if (err) {
        console.log(err);
    }
    console.log('Se ha añadido contenido al archivo');
})
fs.writeFile()//sobreescribe el archivo
fs.unlinkSync()//elimina el archivo
//para que se ejecuten antes de las sincronas agregar la palabra 'sync'