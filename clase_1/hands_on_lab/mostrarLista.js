const mostrarLista = (arr) => {
  if (arr.length == 0) return "lista vacia";

  arr.map((elementos) => {
    console.log(elementos);
  });
  return `el array tiene ${arr.length} elementos`
};

console.log(mostrarLista([]))
console.log(mostrarLista([5]))
console.log(mostrarLista([23, 46, 64, "nombre" ,true]))
