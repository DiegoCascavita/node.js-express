const estatusPedido = ()=>{
    const estatus = Math.random() < 0.8;
    console.log(estatus)
    return estatus
}

for(let i = 0; i < 10; i++){
    console.log(estatusPedido())
}