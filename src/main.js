import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

document.getElementById("cards").setAttribute("class","sectionCard")

//fetch 
// promesas
for (let i = 0; i < data.pokemon.length; i++) {
    let cardPokemon = document.createElement("SECTION");
    cardPokemon.setAttribute("class", "item");
    
    let imgPokemon = document.createElement("IMG");
    imgPokemon.src = data.pokemon[i].img;
    cardPokemon.appendChild(imgPokemon);  

    let namePokemon = document.createElement("h4");
    namePokemon.innerHTML = data.pokemon[i].name;
    cardPokemon.appendChild(namePokemon); 

    let numPokemon = document.createElement("h3");
    numPokemon.innerHTML = data.pokemon[i].num;
    cardPokemon.appendChild(numPokemon); 
    
    cardPokemon.insertBefore(numPokemon, namePokemon);
    
    document.getElementById("cards").appendChild(cardPokemon);
}
