const fs = require("fs");

fs.writeFileSync("./text.txt", "Escribiendo en un archivo \n otro texto");

if (fs.existsSync("./text.txt")) {
  console.log("el archivo existe");

  let contenido = fs.readFileSync("./text.txt", "utf-8");

  console.log(contenido);

  fs.appendFileSync("./text.txt", "\n Contenido añadido");

   contenido = fs.readFileSync("./text.txt", "utf-8");
   console.log(contenido)

   fs.unlinkSync('./text.txt')
}
