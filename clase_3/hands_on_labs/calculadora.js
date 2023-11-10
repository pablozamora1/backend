function dividir(numero1, numero2) {
  return new Promise((resolve, reject) => {
    if (numero2 === 0) {
      reject("no se puede dividir por 0");
    } else {
      resolve(numero1 / numero2);
    }
  });
}

function suma(numero1, numero2) {
  return new Promise((resolve, reject) => {
    if (numero1 === 0 || numero2 === 0) {
      reject("operacion innecesaria");
    } else {
      const resultado = numero1 + numero2;
      resolve(resultado);
    }
  });
}

function resta(numero1, numero2) {
  return new Promise((resolve, reject) => {
    if (numero1 === 0 || numero2 === 0) {
      reject("Operacion innecesaria");
    } else {
      const resultado = numero1 - numero2;
      if (resultado <= 0) {
        reject("la calculadora solo devuelve numeros positivos");
      } else {
        resolve(resultado);
      }
    }
  });
}

function multiplicar(numero1, numero2) {
  return new Promise((resolve, reject) => {
    if (numero1 < 0 || numero2 < 0) {
      reject("Operacion innecesaria");
    } else {
      const resultado = numero1 * numero2;

      if (resultado < 0) {
        reject("la calculadora solo devuelve numeros positivos");
      } else {
        resolve(resultado);
      }
    }
  });
}

async function calculos(numero1, numero2) {
  try {
    const resultadoSuma = await suma(numero1, numero2);
    console.log("resultado Suma:" + resultadoSuma);
    const resultadoResta = await resta(numero1, numero2);
    console.log("resultado resta: " + resultadoResta);
    const resultadoMultiplicacion = await multiplicar(numero1, numero2);
    console.log("resultado multiplicacion: " + resultadoMultiplicacion);
    const resultadoDivicion = await dividir(numero1, numero2);
    console.log("resultado Divicion:" + resultadoDivicion);
  } catch (error) {
    console.log(error);
  }
}

calculos(7, 3);
calculos(9, 7);
calculos(6, 4);
