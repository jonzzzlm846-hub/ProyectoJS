<?php
//FASE DE ENTRADA: DECLARACION DE VARIABLES
//let producto = "Zapatillas Adidas";

$producto = "Zapatillas Adidas";
//const curso = "Logica y Programacion";
$precio = 350;
$descuento = 0.08;
$igv = 0.18;

//FASE DE PROCESO: ES LA LOGICA DEL PROGRAMA
$precioIGV = $precio * $igv;
$precioDescuento = $precio * $descuento;
$precioFinal = $precio + $precioIGV - $precioDescuento;

//FASE DE SALIDA: Impresion de resultados.
//Modo JavaScript: console.log("El precio del productos es: " , precio);
echo "El precio del producto es: S/ " . $precio . "<br>";
echo "El IGV es: S/ " . $precioIGV . "<br>";
echo "El descuento es: S/ " . $precioDescuento . "<br>";
echo "El precio final es: S/ " . $precioFinal . "<br>";


?>
