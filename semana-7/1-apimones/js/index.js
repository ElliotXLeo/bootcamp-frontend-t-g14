'use strict';
const documentReady = () => {
  // const objetoPersona = {
  //   nombre: 'Elliot',
  //   meta: 'Ser un gran programador Frontend'
  // };
  // console.log(objetoPersona);

  // const objetoPersonaJson = `{
  //   "nombre": "Leo",
  //   "meta": "Ser un gran programador Frontend"
  // }`;
  // console.log(objetoPersonaJson);

  // console.log(JSON.stringify(objetoPersona));
  // console.log(JSON.parse(objetoPersonaJson));

  // const operarNumerosCallbackAsync = (numero1, numero2, callback) => {
  //   return setTimeout(() => {
  //     callback(numero1, numero2);
  //   }, 1000);
  // };

  // const operarNumerosCallbackAsyncPromises = (numero1, numero2, callback) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(callback(numero1, numero2));
  //     }, 1000);
  //   });
  // };

  // const saludar = () => {
  //   console.log('Hola <3');
  // };

  // const ejecutarCallback = (callback) => {
  //   callback();
  // };

  // ejecutarCallback(saludar);

  // const mandarMensaje1 = (fn) => {
  //   setTimeout(() => {
  //     console.log('Vamo a calmarno');
  //     fn();
  //   }, 1000);
  // };

  // const mandarMensaje2 = () => {
  //   console.log('-Pikachu sorprendido-');
  // };

  // mandarMensaje1(mandarMensaje2);

  // const datos = [
  //   {
  //     "name": "Pikachu",
  //     "src": "https://i.postimg.cc/26KhW7kb/pikachu.png"
  //   },
  //   {
  //     "name": "Charizard",
  //     "src": "https://static.wikia.nocookie.net/espokemon/images/9/95/Charizard.png/revision/latest?cb=20180325003352"
  //   },
  //   {
  //     "name": "Venusaur",
  //     "src": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  //   },
  //   {
  //     "name": "Vamo a calmarno",
  //     "src": "https://i.pinimg.com/originals/f7/5f/6d/f75f6daa5d8ceef79dfe989a4208bdf8.png"
  //   }
  // ];

  // const getDatos = () => {
  //   return datos;
  // }

  // const getDatos = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (datos.length > 0) {
  //         resolve(datos);
  //       } else {
  //         reject(new Error('No existen datos'));
  //       }
  //     }, 1500);
  //   });
  // };

  // const promesa = getDatos()
  //   .then((respuesta) => { console.log(respuesta) })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .finally(() => {
  //     console.log('Se consultó al API de pokemones');
  //   });
  // console.log(promesa);

  // const consultarData = async () => {
  //   try {
  //     const data = await getDatos();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log('Se consultó al API de pokemones');
  //   }
  // };
  // consultarData();

  // const operarNumerosCallbackAsync = (numero1, numero2, callback) => {
  //   return setTimeout(() => {
  //     callback(numero1, numero2);
  //   }, 1000);
  // };

  // const operarNumerosCallbackAsyncPromises = (numero1, numero2, callback) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(callback(numero1, numero2));
  //     }, 1000);
  //   });
  // };

  // operarNumerosCallbackAsync(2, 4, (n1, n2) => {
  //   console.log(n1 * n2);
  // });

  // const promesa = operarNumerosCallbackAsyncPromises(2, 8, (n1, n2) => {
  //   return (n1 + n2);
  // }).then(result => console.log(result));
  // console.log(promesa);

  // const operarDatos = async () => {
  //   const promesa = await operarNumerosCallbackAsyncPromises(2, 8, (n1, n2) => {
  //     return (n1 - n2);
  //   });
  //   console.log(promesa);
  // };
  // operarDatos();

  const pokemonLocalContainer = document.getElementById('pokemonLocalContainer');
  const pokemonRemoteContainer = document.getElementById('pokemonRemoteContainer');
  const asidePokemonCards = document.getElementById('asidePokemonCards');

  const renderPokemon = (name, src, elemento) => {
    const fragment = document.createDocumentFragment();

    const cardPokemon = document.createElement('div');
    cardPokemon.classList.add('pokemon__card');

    const namePokemon = document.createElement('h3');
    namePokemon.textContent = name;
    namePokemon.classList.add('pokemon__card-name');

    const imageContainerPokemon = document.createElement('figure');
    imageContainerPokemon.classList.add('pokemon__card-image-container');

    const imagePokemon = document.createElement('img');
    imagePokemon.setAttribute('alt', name);
    imagePokemon.setAttribute('src', src);
    imagePokemon.classList.add('pokemon__card-image');

    cardPokemon.appendChild(namePokemon);
    imageContainerPokemon.appendChild(imagePokemon);
    cardPokemon.appendChild(imageContainerPokemon);
    fragment.appendChild(cardPokemon);
    elemento.appendChild(fragment);
  };

  // const pokemonJson = `{
  //   "name": "Pikachu",
  //   "src": "https://i.postimg.cc/26KhW7kb/pikachu.png"
  // }`;
  // const pokemon = JSON.parse(pokemonJson);
  // renderPokemon(pokemon.name, pokemon.src, pokemonLocalContainer);

  fetch('https://elliotxleo.github.io/bootcamp-frontend-t-g-14/semana-7/1-apimones/json/pokemon.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderPokemon(data.name, data.src, pokemonLocalContainer);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log('Se consultó al API de pokemones');
    });

  // fetch('https://pokeapi.co/api/v2/pokemon/25')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     renderPokemon(data.name, data.sprites.front_default, pokemonRemoteContainer);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .finally(() => {
  //     console.log('Se consultó al API de pokemones');
  //   });

  const obtenerPokemon = async () => {
    try {
      const api = await fetch('https://pokeapi.co/api/v2/pokemon/25');
      const data = await api.json();
      renderPokemon(data.name, data.sprites.front_default, pokemonRemoteContainer);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('Se consultó al API de pokemones');
    }
  };
  obtenerPokemon();

  const renderizarPokemonesAleatorios = async (cantidad) => {
    try {
      let data = [];
      for (let index = 0; index < cantidad; index++) {
        const pokemonAleatorio = Math.floor(Math.random() * 151 + 1);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}`);
        data.push(response.data);
      }
      console.log(data);
      data.forEach((element) => {
        asidePokemonCards.innerHTML += `
          <div class="pokemon__card">
            <h3 class="pokemon__card-name">${element.name}</h3>
            <figure class="pokemon__card-image-container">
              <img alt="${element.name}" src="${element.sprites.front_default}" class="pokemon__card-image">
            </figure>
          </div>
        `;
      });
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Se consultó al API de pokemones');
    }
  };

  if (window.innerWidth > 854) {
    renderizarPokemonesAleatorios(3);
  } else {
    renderizarPokemonesAleatorios(2);
  }

  const renderHtmlFooterCredits = () => {
    const footerCredits = document.getElementById('footerCredits');
    footerCredits.innerHTML = `
      🦄Copyright &copy; ${new Date().getFullYear()}
      <a href="https://www.linkedin.com/in/elliotgaramendi/" target="_blank" class="footer-nav__credits-author">Elliot Garamendi.</a>
      Todos los derechos reservados.🦄
    `;
  };
  renderHtmlFooterCredits();

};

document.addEventListener('DOMContentLoaded', documentReady);