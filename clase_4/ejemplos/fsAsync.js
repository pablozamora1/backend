const fs = require("fs");

const operaciones = async (filename) => {
  try {
    await fs.promises.writeFile(
      filename,
      "escribiendo en un archivo con promesa"
    );

    let contenido = await fs.promises.readFile(filename, "utf-8");
    console.log(contenido);

    await fs.promises.appendFile(filename, "\n agregando contenido");

    contenido = await fs.promises.readFile(filename, "utf-8");
    console.log(contenido);

    await fs.promises.unlink(filename);
  } catch (error) {
    console.log("hubo un error");
  }
};

operaciones("./textoPromises.txt");
