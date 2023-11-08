const listaElementos = [];

function createElement(valor) {
  listaElementos.push(valor);
}

function updateElement(posicion) {}

function deleteElement(posicion) {}

function readElement() {
  const listado = document.getElementById("listado");
  listado.innerHTML = "";
  listaElementos.forEach((element, index) => {
    listado.innerHTML += `
      <li>${element} <button onclick="updateElement(${index})">Editar</button> <button>Eliminar</button></li>
    `;
  });
}

function manejarFormulario(event) {
  event.preventDefault();
  // aca puedo acceder al input
  const inputValor = document.getElementById("valor");
  createElement(inputValor.value);
  inputValor.value = "";
  readElement();
}
