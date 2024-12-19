"use strict";

let nums = [9, 4, 2, 8];

let sumaTotal = nums.reduce((acc, num) => acc + num, 0);

let esMayorQueVeinte = sumaTotal > 20;
alert(esMayorQueVeinte ? "Sí" : "No");
