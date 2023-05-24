// * VARIABLES
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let listaWttets = [];


// * EVENTOS
document.addEventListener('DOMContentLoaded', () => {
  formulario.addEventListener('submit', agregarTweet);
  listaWttets = JSON.parse(localStorage.getItem('tweets')) || [];
  listarTweetHTML();
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

  // Listamos los tweets
  listarTweetHTML();

  // Reseteamos el formulario
  formulario.reset();

  // Sincrinizamos con el local Storage
  sincronizarStorage();
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



// * Muestra la lista de tweets
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


      // Creasmos un boton para eliminar
      const btnEliminar = document.createElement('A');
      btnEliminar.classList.add('borrar-tweet');
      btnEliminar.textContent = 'X';

      // Añadimos la funcion de eliminar tweet
      btnEliminar.onclick = () => {
        // Obtenemos la nueva lista de tweets
        listaWttets = eliminarTweet(id);
        // Listamos la nueva lista
        listarTweetHTML();
        sincronizarStorage();
      }

      tweetHtml.appendChild(btnEliminar);

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



// * Sincroniza con el local storage
const sincronizarStorage = () => {
  localStorage.setItem('tweets', JSON.stringify(listaWttets));
};



// * Elimina un tweet
const eliminarTweet = (id) => listaWttets.filter(tweet => tweet.id !== id);