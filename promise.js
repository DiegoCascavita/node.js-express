//asincrono
const promesaCumplida = false;

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve("Todo ok");
        } else{
            reject("promesa rechazada");
        }
    }, 3000);
});

const cumplida = (valor)=>{
    console.log(valor);
}

const rechazada = (razonRechazo)=>{
    console.log(razonRechazo);
}

promesa.then(cumplida,rechazada);