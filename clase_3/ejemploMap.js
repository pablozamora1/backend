// const numeros = [2, 3, 4, 6, 78, 13];

// function cuadrado(numeros, index) {
//   console.log(index);
//   return numeros ** 2;
// }

// const numerosNuevos = numeros.map(cuadrado);

// const numeros2 = [2, 3, 4, 6, 78, 13];

// const numerosNuevos2 = numeros.map((numeros) => {
//   return numeros + 1
// })

// console.log(numerosNuevos);
// console.log(numerosNuevos2);

function mapCustom(array, callback) {
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    let nuevoValor = callback(array[i]);
    nuevoArray.push(nuevoValor);
  }
  return nuevoArray;
}

const arrayNuevo = [2, 3, 4, 6, 78, 13];

const nuevoArr = mapCustom(arrayNuevo, (valor) => {
  return valor ** 2;
});
console.log(nuevoArr);
