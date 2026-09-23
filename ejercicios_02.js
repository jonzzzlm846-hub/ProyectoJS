let nombreProducto = "Mouse Optico";
let precioProducto = 100;

const descuento = 0.08;
const porcentajegv = 0.18;

let Descuento = precioProducto * descuento;
let subTotal = precioProducto - descuento;
let montoIgv = subTotal * porcentajegv;
let totalPagar = subTotal + montoIgv;

console.log("🛒Productos:", nombreProducto);
console.log("💵Precio base S/ : ", precioProducto);
console.log("💵Descuento (8%) S/ : ", descuento);
console.log("💵SubTotal S/ : " , subTotal);
console.log("💵IGV (18%) S/ : " , montoIgv);
console.log("Total a Pagar S/ : ", totalPagar);