const { set } = require("express/lib/application");

const estatusPedido = ()=>{
    return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(estatusPedido()){
            resolve("Pedido en camino");
        }else{
            reject("Pedido rechazado");
        }
    }, 3000);
})

const manejarPedido = (mensajeDeConfirmacion)=>{
    console.log(mensajeDeConfirmacion);
}

const rechazarPedido = (mensajeDeError)=>{
    console.log(mensajeDeError);
}
//exito de la promesa
miPedidoDePizza.
    then((mensajeDeConfirmacion)=>{
        console.log(mensajeDeConfirmacion);
    })
//rechazo con then
    // .then(null,(mensajeDeError)=>{
    //     console.log(mensajeDeError);
    // })
    //rechazo con .catch()
    .catch((mensajeDeError)=>{
        console.log(mensajeDeError);
    })