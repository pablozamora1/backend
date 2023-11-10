const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const operacion = () => console.log("tarea2");

console.log("tarea1");
temporizador(operacion);
console.log("tarea3");

