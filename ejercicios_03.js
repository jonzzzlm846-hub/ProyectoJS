let nombreEmpleado = "obrero";
let prendasConfeccionadas = 40;
let tarifaPrenda = 10;


let salarioBruto = prendasConfeccionadas * tarifaPrenda;


let impuesto = 0.03 * salarioBruto;
let seguro = 0.02 * salarioBruto;
let solidaridad = 0.01 * salarioBruto;


let bonificacion = 0.05 * salarioBruto;


let salarioNeto = salarioBruto - impuesto - seguro - solidaridad + bonificacion;

console.log("..........BOLETA DE PAGO..........");
console.log("Nombre del Empleado: ", nombreEmpleado);
console.log("Prendas confeccionadas: ", prendasConfeccionadas);
console.log("💵Tarifa por prenda: S/ ", tarifaPrenda);
console.log("💵Salario Bruto: S/ ", salarioBruto);
console.log("💵Impuesto (3%): S/ ", impuesto);
console.log("💵Seguro (2%): S/ ", seguro);
console.log("Solidaridad (1%): S/ ", solidaridad);
console.log("Bonificación (5%): S/ ", bonificacion);
console.log("💵Salario Neto: S/ ", salarioNeto);
