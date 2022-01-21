//Solicitud de datos

//Se le pide días que quiere calcular
let totalDias = parseInt(prompt("Ingrese dias a calcular"));

//Calculo de años segun dias ingresados
let anios = Math.floor(totalDias / 365);

//Calculo de semanas segun dias ingresados
let semanas = Math.floor((totalDias % 365) / 7);

//Calculo de dias segun dias ingresados
let dias = Math.floor((totalDias % 365) % 7);

//Vista por consola

console.log(`El resultado es el sigueinte: 
  Años ${anios}
  Semanas ${semanas}
  Días ${dias}
  `);
