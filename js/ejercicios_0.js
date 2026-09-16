const nombreProducto = "Laptop Gamer";
let precioOriginal = "4500.99";
const descuento = 15;
let stockDisponible = "5";
let enOferta = "true";


let precioFinal = precioOriginal - precioOriginal * descuento / 100;

console.log("🔹Producto:",nombreProducto);
console.log("🔹Precio Original: S/", precioOriginal);
    console.log("🔹Descuento",descuento, "%");
    console.log("🔹Precio Final:S/", precioFinal.toFixed(2));
    console.log("🔹Stock Disponible:", stockDisponible);
    console.log("🔹 En oferta:", enOferta ? "Si": "No");

    let cantidadComprada =2;

    if (cantidadComprada < stockDisponible) {
    stockDisponible -= cantidadComprada;
    console.log("✅ Compra realizada con exito.");
    console.log("📦 Stock actualizado:", stockDisponible);
    } else {
        console.log("✖️ No hay sufciente stock disponible.");
    }