// para poder hacer un CRUD necesitamos una Estructura de Datos
// array y los objetos literales

const miArray = [];
miArray.push("Hola 1"); // Esto es una Create
miArray.push("Hola 2"); // Esto es una Create
miArray.push("Hola 3"); // Esto es una Create
miArray.push("Hola 4"); // Esto es una Create
miArray.push("Hola 5"); // Esto es una Create
miArray.push("Hola 6"); // Esto es una Create
miArray.push("Hola 7"); // Esto es una Create

// console.log(miArray[0]);
// console.log(miArray[1]);
// console.log(miArray[2]);
// console.log(miArray[3]);
// console.log(miArray[4]);

function control(element, x) {
  console.log(element, x);
}

miArray.forEach(control);

miArray.forEach((el, i) => {
  console.log(el, i);
});
// antes tengo que saber a elemento le quiero hacer un update
miArray[3] = "Pepe";

miArray.forEach((el, i) => {
  console.log(el, i);
});

// delete
// antes tengo que saber a elemento le quiero hacer borrar
miArray.splice(5, 1);

miArray.forEach((el, i) => {
  console.log(el, i);
});
