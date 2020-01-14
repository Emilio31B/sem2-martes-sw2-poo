var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Cliente.prototype.realizarPedido = function (mozo, pedido) {
        mozo.recibirPedido(pedido); // <--- El momento donde se origina el mensaje
    };
    return Cliente;
}());
var Mozo = /** @class */ (function () {
    function Mozo() {
    }
    Mozo.prototype.recibirPedido = function (pedido) {
        console.log('Se recibio el pedido:', pedido.nombre, '\ncantidad: ', pedido.cantidad);
    };
    return Mozo;
}());
var main = function () {
    var cliente = new Cliente();
    var mozo = new Mozo();
    var pedido = {
        nombre: 'Cevivhe',
        cantidad: 20
    };
    cliente.realizarPedido(mozo, pedido);
};
main();
