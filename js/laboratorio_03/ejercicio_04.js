// VALIDACION DE EDAD Y PAIS

let edad = prompt("Ingrese su edad: ");
let pais = prompt("Ingrese su país: ");

if (edad >= 18 && pais == "Peru") {
    console.log("Edad. ¡Acede al bono");
} else {
    console.log("Edad y/o No a cede al bono.");
}
