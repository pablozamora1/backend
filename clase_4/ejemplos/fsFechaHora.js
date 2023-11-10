const fs = require("fs");

const fecha = new Date().toLocaleString();
// console.log(fecha)
fs.writeFile("./textoDelCallback.txt", fecha, (error) => {
  if (error) {
    return console.log("hubo un problema para leer el archivo");
  }
  "console.log(contenido);"
});
fs.readFile("./textoDelCallback.txt", "utf-8", (error, contenido) => {
  if (error) {
    return console.log("hubo un error al leer el archivo");
  }
  console.log(contenido);
});
