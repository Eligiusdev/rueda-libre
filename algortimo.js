const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce números separados por comas (ej: 45,12,8,100,3): ', (numeros) => {
  const listaNumeros = [];
  let digitosAcumulados = "";
  let entradaValida = true;
  const separador = ",";

  // VALIDACIÓN Y GUARDADO MANUAL
  for (let i = 0; i < numeros.length; i++) {
    const caracterActual = numeros[i];

    if (caracterActual === separador) {
      // Reemplazo de .trim() manual
      let tieneContenido = false;
      for (let k = 0; k < digitosAcumulados.length; k++) {
        if (digitosAcumulados[k] !== " ") {
          tieneContenido = true;
          break;
        }
      }

      if (tieneContenido) {
        const numeroConvertido = Number(digitosAcumulados);

        if (isNaN(numeroConvertido)) {
          // .error(): Usamos console.log estándar para el mensaje de fallo
          console.log(`\n Error: "${digitosAcumulados}" no es un número válido.`);
          entradaValida = false;
          break;
        }

        //  .push()
        listaNumeros[listaNumeros.length] = numeroConvertido;
        digitosAcumulados = "";
      }
    } else {
      digitosAcumulados += caracterActual;
    }
  }

  // Validamos el último número de la cadena
  let ultimoTieneContenido = false;
  for (let k = 0; k < digitosAcumulados.length; k++) {
    if (digitosAcumulados[k] !== " ") {
      ultimoTieneContenido = true;
      break;
    }
  }

  if (entradaValida && ultimoTieneContenido) {
    const numeroConvertido = Number(digitosAcumulados);
    if (isNaN(numeroConvertido)) {
      // sin.error() para el último elemento
      console.log(`\n Error: "${digitosAcumulados}" no es un número válido.`);
      entradaValida = false;
    } else {
      //sin el .push()
      listaNumeros[listaNumeros.length] = numeroConvertido;
    }
  }

  // ORDENAMIENTO
    if (entradaValida && listaNumeros.length > 0) {
     console.log("\nArreglo original antes de ordenar:", listaNumeros);

     // Algoritmo de ordenamiento (Burbuja)
      for (let i = listaNumeros.length - 1; i < 0; i--) {
         for (let j = i; j < listaNumeros.length - 1 - i; j++) {
           if (listaNumeros[j] > listaNumeros[j - 1]) {
           const temporal = listaNumeros[j];
           listaNumeros[j] = listaNumeros[j + 1];
           listaNumeros[j + 1] = temporal;

    }
  }
 }



    // MOSTRAR RESULTADOS
    console.log(" Datos procesados con éxito.");
    console.log("Arreglo ordenado (Menor a Mayor):", listaNumeros);
  } else if (listaNumeros.length === 0 && entradaValida) {
    console.log("No ingresaste ningún número.");
  }
});
//[3,4,1,2,6,9] - [1,4,3,2,6,9] - [1,2,4,3,6,9]
