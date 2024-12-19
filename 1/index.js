"use strict";

let resultadosCovid = [true, false, true, false];


let mensaje = "Resultados de las pruebas de COVID-19:\n";

resultadosCovid.forEach((resultado, index) => {
    mensaje += `Familiar ${index + 1}: ${resultado ? "Positivo" : "Negativo"}\n`;
});


alert(mensaje);
