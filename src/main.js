import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

//console.log(data.pokemon[0].num);
//console.log(data.pokemon[0].size.height);

data.pokemon.forEach((element) => {
    let containerBox = document.getElementById("container");

    //Se establece el atributo para el estilo de los div
    containerBox.setAttribute("class", "containerCard");

    let boxCard = document.createElement("div");
    boxCard.setAttribute("class", "boxPokemon");
    let whiteBoxCard = document.createElement("div");
    whiteBoxCard.setAttribute("class", "white-Box");
    boxCard.appendChild(whiteBoxCard);

    //Se toma la imagen de la data y se añade al index
    let box = document.createElement("div");
    let imgBox = document.createElement("div");
    let imgPokemon = document.createElement("img");
    box.setAttribute("class", "box-Content");
    imgBox.setAttribute("class", "image-Pokemon");
    imgPokemon.src = element.img;
    imgBox.appendChild(imgPokemon);
    box.appendChild(imgBox);
    
    //Se toma el número del pokémon de la data y se añade al index
    let nameBox = document.createElement("div");
    let numPokemon = document.createElement("h2");
    let namePokemon = document.createElement("h2");
    nameBox.setAttribute("class", "name-NumPokemon");
    numPokemon.setAttribute("class", "num-Style");
    namePokemon.setAttribute("class", "name-Style");
    numPokemon.innerHTML = element.num;
    nameBox.appendChild(numPokemon);
    namePokemon.innerHTML = element.name;
    nameBox.appendChild(namePokemon);

    let typeBox = document.createElement("div");
    element.type.forEach((e) => {
        let typeImage = document.createElement("img");
        typeImage.src="img/"+e + ".webp";
        typeImage.setAttribute("class", "typeImg");
        typeBox.appendChild(typeImage);
    });
    
    typeBox.setAttribute("class", "typeBox-Img");

    let tableStats = document.createElement("div");
    let titleStats = document.createElement("div");
    let titleCp = document.createElement("h4");
    let titleAttack = document.createElement("h4");
    let titleDefense = document.createElement("h4");
    let titleStamina = document.createElement("h4");

    let numStats = document.createElement("div");

    let numCp = document.createElement("h5");
    let numAttack = document.createElement("h5");
    let numDefense = document.createElement("h5");
    let numStamina = document.createElement("h5");

    tableStats.setAttribute("class", "stats-Data");
    titleStats.setAttribute("class", "title-stats");
    numStats.setAttribute("class", "num-stats");

    titleCp.innerHTML = "CP";
    titleAttack.innerHTML = "Attack";
    titleDefense.innerHTML = "Defense";
    titleStamina.innerHTML = "Stamina";

    numCp.innerHTML = element.stats['max-cp'];
    numAttack.innerHTML = element.stats['base-attack'];
    numDefense.innerHTML = element.stats['base-defense'];
    numStamina.innerHTML = element.stats['base-stamina'];

    tableStats.appendChild(titleStats);
    tableStats.appendChild(numStats);

    titleStats.appendChild(titleCp);
    titleStats.appendChild(titleAttack);
    titleStats.appendChild(titleDefense);
    titleStats.appendChild(titleStamina);

    numStats.appendChild(numCp);
    numStats.appendChild(numAttack);
    numStats.appendChild(numDefense);
    numStats.appendChild(numStamina);

    //Se crean los div y los estilos para el giro de las tarjetas
    let flipCard = document.createElement("div");
    flipCard.setAttribute("class", "flip-card");
    let flipCardInner = document.createElement("div");
    flipCardInner.setAttribute("class", "flip-card-inner");

    //Se toma
    box.appendChild(boxCard);
    box.appendChild(nameBox);
    box.appendChild(typeBox);
    box.appendChild(tableStats);

    flipCardInner.appendChild(box);

    flipCard.appendChild(flipCardInner);

    containerBox.appendChild(flipCard);

});
