

const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const PokemonImg = document.querySelector(".pokemon__image");
const pokemonType = document.querySelector(".pokemon__type");

const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buton = document.querySelector(".btn-next");
const buton2 = document.querySelector(".btn-prev");
let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {
  const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await Response.json();
  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  pokemonName.innerHTML = data.species.name;
  pokemonNumber.innerHTML = `#${data.id}`;
  input.value = "";
  searchPokemon = data.id;
  PokemonImg.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
   
  pokemonType.innerHTML = `Type:<span> ${data["types"]["0"]["type"]["name"]}</span>`;
  
 // <!-- adicionando cores aos tipos -->
  switch ((data["types"]["0"]["type"]["name"])) {
    case "grass":
      pokemonType.innerHTML = `Type:<span style="color: #1ddd33;"> ${data["types"]["0"]["type"]["name"]}</span>`;
      break;
  case "water":
    pokemonType.innerHTML = `Type:<span style="color: blue;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
  break;
  case "fire":
    pokemonType.innerHTML = `Type:<span style="color: red;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
  break;
  case "normal":
    pokemonType.innerHTML = `Type:<span style="color: #cb97a7;"> ${data["types"]["0"]["type"]["name"]}</span>`;
    break;
case "bug":
  pokemonType.innerHTML = `Type:<span style="color: green;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "dark":
  pokemonType.innerHTML = `Type:<span style="color: #000000;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "fairy":
  pokemonType.innerHTML = `Type:<span style="color: #951a44 ;"> ${data["types"]["0"]["type"]["name"]}</span>`;
  break;
case "electric":
pokemonType.innerHTML = `Type:<span style="color:#e3e31b;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "ground":
pokemonType.innerHTML = `Type:<span style="color: #a9702c;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "ice":
pokemonType.innerHTML = `Type:<span style="color: #86d2f5;"> ${data["types"]["0"]["type"]["name"]}</span>`;
break;
case "poison":
pokemonType.innerHTML = `Type:<span style="color: #5e2d88;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "dragon":
pokemonType.innerHTML = `Type:<span style="color: #458a95;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "ghost":
  pokemonType.innerHTML = `Type:<span style="color: #333368;"> ${data["types"]["0"]["type"]["name"]}</span>`;
  break;
case "steel":
pokemonType.innerHTML = `Type:<span style="color:#5a5979;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "rock":
pokemonType.innerHTML = `Type:<span style="color: #8b3e21;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "fighting":
pokemonType.innerHTML = `Type:<span style="color:#994023;"> ${data["types"]["0"]["type"]["name"]}</span>`;
break;
case "flying":
pokemonType.innerHTML = `Type:<span style="color: #4a677d;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
case "psychic":
pokemonType.innerHTML = `Type:<span style="color: #f81c91;"> ${data["types"]["0"]["type"]["name"]}</span>`;  
break;
    default:
      break;
  }
   
};
//adicionando a busca por nome ou numero da api
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
  input.value = "";
});

// adicionando botoes
buton.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});
buton2.addEventListener("click", () => {
  searchPokemon -= 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
