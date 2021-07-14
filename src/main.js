import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

console.log(data.pokemon[0].num);
console.log(data.pokemon[0].size.height);

let card = [];
//let idCard = "";

for (let i = 0; i < data.pokemon.length; i++) {
    let idCard = "card"+ i.toString();
    card[i] = document.createElement("section");
    card[i].setAttribute("id", i);
    console.log(i);
    //Se toma la imagen de la data y se añade al index
    let imgPokemon = document.createElement("img");
    imgPokemon.src = data.pokemon[i].img;
    document.getElementById(i).appendChild(imgPokemon);

    //Se toma el número del pokémon de la data y se añade al index
    let numPokemon = document.createElement("h2");
    numPokemon.innerHTML = data.pokemon[i].num;
    document.getElementById(i).appendChild(numPokemon);

    //Se toma el nombre del pokémon de la data y se añade al index
    let namePokemon = document.createElement("h2");
    namePokemon.innerHTML = data.pokemon[i].name;
    document.getElementById(i).appendChild(namePokemon);
    document.getElementById("cards").appendChild(card[i]);    
}







//fetch 
// promesas
