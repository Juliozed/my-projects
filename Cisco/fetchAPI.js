
//  Fetch data from an API!!


//  Fetch = function used for making HTTP requests to fetch resourses.
//          JSON style data, images, files etc..
//          Simplifies asynchronous data fetching in javascript and used
//          for interacting with API's to retrieve and send data
//          asunchronously over the web
//          fetch has 2 arguments.
//          fetch(url, {methods: Get, Post , Put, Delete}); yu know ;)
//          basically fetching data from an API
//      fetch is promise based = will either reject or resolve
//       status 1 - 200 is ok . over that not ok

// fetch("https://pokeapi.co/api/v2/pokemon/nidoking")
//       .then(response => {

//         if(!response.ok){
//             throw new Error("Not A Pokemon!");
//         }
//         return response.json();

//       })
//       .then(data => console.log(data))
//       .catch(error => console.error(error))

fetchData();

async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("not a pokemon!");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
