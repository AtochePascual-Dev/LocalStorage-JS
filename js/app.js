// * VARIABLES
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let listaWttets = [];


// * EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  formulario.addEventListener('submit', agregarTweet);
});



// * FUNCIONES
// * Argega un tweet a la lista 
const agregarTweet = (event) => {
  event.preventDefault();

  const tweet = document.querySelector('#tweet').value.trim();

  // Si el tweet esta vacio
  if (tweet === '') {
    mostrarAlerta();
    return;
  }

  // Si pasa la validacion eliminamos la alerta de error
  eliminarError();
};



// * Muestra un mensaje de alerta
const mostrarAlerta = () => {

  // verificamos si existe un mensaje de error previo
  const existeError = document.querySelector('.error');

  if (!existeError) {
    const error = document.createElement('P');
    error.textContent = 'Un tweet no puede ir vacio';
    error.classList.add('error');

    // agrega el mensaje al html
    formulario.appendChild(error);
  }
};



// * Elimina el error en caso de exisitr
const eliminarError = () => {
  // verificamos si existe un mensaje de error previo
  const existeError = document.querySelector('.error');

  if (existeError) {
    existeError.remove();
  }
};