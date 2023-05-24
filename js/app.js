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

    return;
  }
};