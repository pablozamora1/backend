const fs = require("fs");

fs.writeFile(
  "./textoDelCallback.txt",
  "escribiendo con un callback",
  (error, contenido) => {
    if (error) {
      return console.log("hubo un problema para leer el archivo");
    }
    console.log(contenido);
  }
);
fs.readFile("./textoDelCallback.txt", "utf-8", (error, contenido) => {
  if (error) {
    return console.log("hubo un error al leer el archivo");
  }
  console.log(contenido);

  fs.appendFile(
    "./textoDelCallback.txt",
    "/n texto resien salido del horno",
    (error) => {
      if (error) {
        return console.log("hubo un error al agregar contenido  el archivo");
      }
      fs.readFile("./textoDelCallback.txt", "utf-8", (error, contenido) => {
        if (error) {
          return console.log("hubo un error al leer el archivo");
        }
        console.log(contenido);

        fs.unlink("./textoDelCallback.txt", (error) => {
          if (error) {
            return console.log("hubo un error al eliminar el archivo");
          }
        });
      });
    }
  );
});
