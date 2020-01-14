
interface Pedido{
    nombre: string
    cantidad: Number    
}


class Cliente{
    realizarPedido(mozo : Mozo, pedido : Pedido){
        mozo.recibirPedido(pedido); // <--- El momento donde se origina el mensaje
    }
}

class Mozo{
    recibirPedido(pedido: Pedido): void {
        console.log('Se recibio el pedido:',pedido.nombre,'\ncantidad: ',pedido.cantidad);
    }
}

let main = () =>{
    let cliente = new Cliente();
    let mozo : Mozo = new Mozo();
    let pedido : Pedido ={
        nombre: 'Cevivhe',
        cantidad: 20
    }
    

    cliente.realizarPedido(mozo,pedido);

}

main();