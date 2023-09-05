const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const PokemonImg=document.querySelector(".pokemon__image");
const pokemonType=document.querySelector(".pokemon__type");
const form=document.querySelector(".form");
const input=document.querySelector(".input__search");
const fetchPokemon = async (pokemon) => {
  const Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
  const data = await Response.json();
  return data;
  
};


const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = `#${data.id}`;
  
  
  PokemonImg.src=data['sprites']['versions']['generation-v'] ['black-white'] ['animated']['front_default']
  
  pokemonType.innerHTML=`Type: ${data['types']['0']['type']['name']}`

  //adicionando a busca por nome ou numero da api
  form.addEventListener('submit',async (event)=>{
    event.preventDefault();
    renderPokemon(input.value);
    input.value='';
  });
  
  
  console.log(data)
};

renderPokemon('25')

