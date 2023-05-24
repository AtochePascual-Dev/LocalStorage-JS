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

  // Creamos el tweet
  const objTweet = {
    id: Date.now(),
    tweet
  }

  // Agregamos el tweet a la lisat de tweets
  listaWttets = [...listaWttets, objTweet];

  listarTweetHTML();
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



// * Muestra la lisat de tweets
const listarTweetHTML = () => {
  // limpiamos el html previo
  limpiarHtml();

  // Si la lista contiene al menos un elemento lo listamos
  if (listaWttets.length > 0) {

    listaWttets.forEach(tweetObj => {
      const { id, tweet } = tweetObj;

      // Creamos el html del tweet
      const tweetHtml = document.createElement('LI');
      tweetHtml.textContent = tweet;

      // Agremos el tweet al contenedor
      contenedorTweets.appendChild(tweetHtml);
    });
  };
};



// * Limpia el htmml
const limpiarHtml = () => {
  while (contenedorTweets.firstChild) {
    contenedorTweets.firstChild.remove();
  };
};