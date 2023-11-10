function dividir(numero1, numero2) {
  return new Promise((resolve, reject) => {
    if (numero2 === 0) {
      reject("no se puede dividir por 0");
    } else {
      resolve(numero1 / numero2);
    }
  });
}


let respuesta = dividir(3, 0).then((resultado) => {
  console.log(resultado)
}).catch((error) => {
  console.log("salio todo mal")
  console.log(error)
})

console.log(respuesta)