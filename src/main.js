import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

console.log(data.pokemon[0].num);
console.log(data.pokemon[0].size.height);


for (let i = 0; i <data.pokemon.length; i++) {
   
    console.log(i);
    //Se crean los contenedores de cada tarjeta
    let box = document.createElement("div");
    box.setAttribute("class", "boxPokemon");

    //Se toma la imagen de la data y se añade al index
    let imgPokemon = document.createElement("img");
    imgPokemon.src = data.pokemon[i].img;
    box.appendChild(imgPokemon);

    //Se toma el número del pokémon de la data y se añade al index
    let numPokemon = document.createElement("h2");
    numPokemon.innerHTML = data.pokemon[i].num;
    box.appendChild(numPokemon);

    //Se toma el nombre del pokémon de la data y se añade al index
    let namePokemon = document.createElement("h2");
    namePokemon.innerHTML = data.pokemon[i].name;
    box.appendChild(namePokemon);

    let containerBox = document.getElementById("container");
    containerBox.setAttribute("class", "containerCard");

    containerBox.appendChild(box);
}







//fetch 
// promesas
