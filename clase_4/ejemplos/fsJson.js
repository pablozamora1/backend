const fs = require("fs");

const operacion = async (filename, Objecto) => {
  try {
    await fs.promises.writeFile(filename, JSON.stringify(Objecto, null, "\t"));

    let contenido = await fs.promises.readFile(filename, "utf-8");
    console.log(contenido);
    console.log(JSON.parse(contenido));
    console.log(typeof contenido);
  } catch (error) {
    console.log("hubo un error");
  }
};

const filename = "./texto.json";
const Objecto = {
  id: 1,
  nombre: "pablo",
  age: 24,
};
operacion(filename, Objecto);
