import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

let containerBox = document.createElement("div");
document.body.appendChild(containerBox);
containerBox.setAttribute("id","container");
data.pokemon.forEach((element) => {
    //let containerBox = document.getElementById("container");

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
    namePokemon.setAttribute("class", "name-Style");
    nameBox.appendChild(namePokemon);
    //backgroundWhite.appendChild(namePokemon);

    let typeBox = document.createElement("div");
    element.type.forEach((e) => {
        let typeIcon = document.createElement("picture");
        typeIcon.setAttribute("class", "type-Icon");
        
        let typeImage = document.createElement("img");
        typeImage.src="img/"+e + ".webp";
        typeImage.setAttribute("class", "typeImg");
        typeIcon.appendChild(typeImage);
        typeBox.appendChild(typeIcon);
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

    let cardBack = document.createElement("div");
    cardBack.setAttribute("class","card-Back");
        
    let imgBoxRotate = document.createElement("div");
    imgBoxRotate.setAttribute("class", "image-Rotate-Pokemon");
    let imgPokemonRotate = document.createElement("img");
    imgPokemonRotate.src = element.img;
    imgBoxRotate.appendChild(imgPokemonRotate);

    let whiteBoxCardRotate = document.createElement("div");
    whiteBoxCardRotate.setAttribute("class", "white-Box-Rotate");
    cardBack.appendChild(whiteBoxCardRotate);

    let resistantBox = document.createElement("div");
    resistantBox.setAttribute("class", "resistant");
    cardBack.appendChild(resistantBox);
    cardBack.appendChild(imgBoxRotate);
    

    let boxFlip = document.createElement("div");
    boxFlip.setAttribute("class", "flip-box");

    let boxFlipInner = document.createElement("div");
    boxFlipInner.setAttribute("class", "flip-box-inner");

    //Se toma el nombre del pokémon de la data y se añade al index

    box.appendChild(boxCard);
    box.appendChild(nameBox);
    box.appendChild(typeBox);
    box.appendChild(tableStats);

    boxFlipInner.appendChild(cardBack);
    boxFlipInner.appendChild(box);
    boxFlipInner.insertBefore(box, cardBack);
    boxFlip.appendChild(boxFlipInner);

    containerBox.appendChild(boxFlip);
});

//fetch
//promesas