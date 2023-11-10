const contador = () => {
  let contador = 1;
  console.log("iniciando contador");
  let timer = setInterval(() => {
    console.log("Contador:", contador);
    contador++;
    if (contador > 5) {
      clearInterval(timer);
    }
  }, 1000);
};

console.log("tarea1");
contador();
console.log("tarea2");
