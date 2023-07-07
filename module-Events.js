const EventEmitter = require('events');

const emisorProductos = new EventEmitter();
//event handlers
emisorProductos.on('compra', (total)=>{
    console.log(`Gracias por su compra de ${total} dolares`);
});
// tienes que emitir el evento para activar el listener
emisorProductos.emit('compra', 500);