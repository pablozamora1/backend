const fs = require("fs");

class ManagerUsusarios {
  constructor(filename) {
    this.filename = filename;
    if (fs.existsSync(filename)) {
      try {
        let Ususarios = fs.readFileSync(filename, "utf-8");
        this.Ususarios = JSON.parse(Ususarios);
      } catch (error) {
        this.Ususarios = [];
      }
    } else {
      this.Ususarios = [];
    }
  }

  async saveFile(data) {
    try {
      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(data, null, "\t")
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async crearUsuario(Ususario) {
    this.Ususarios.push(Ususario);
    const respuesta = await this.saveFile(this.Ususarios);

    if (respuesta) {
      console.log("usuario Creado");
    } else {
      console.log("hubo un error al crear un ususario");
    }
  }
  consultarUsuarios() {
    console.log(this.Ususarios);
    return this.Ususarios;
  }
}

class Ususario {
  constructor(nombre, apellido, edad, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
  }
}

const usuario1 = new Ususario("mariano", "lopez", 26, "backend");
const usuario2 = new Ususario("maria", "asus", 27, "java");
const usuario3 = new Ususario("mauro", "barrera", 20, "frontend");

const manager = new ManagerUsusarios("./Usuarios.json");

manager.crearUsuario(usuario1);
console.log(manager.consultarUsuarios());

manager.crearUsuario(usuario2);
manager.crearUsuario(usuario3);
console.log(manager.consultarUsuarios());

for