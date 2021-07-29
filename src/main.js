import { filterData, sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


let currentPokemon = data.pokemon;

let containerBox = document.getElementById("container");
//Se establece el atributo para el estilo de los div
containerBox.setAttribute("class", "containerCard");

const showPokemon = (currentPokemon) => {
    containerBox.innerHTML = "";

    currentPokemon.forEach((element) => {

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
        numPokemon.textContent = element.num;
        nameBox.appendChild(numPokemon);
        namePokemon.textContent = element.name.slice(0, 1).toUpperCase() + element.name.slice(1, element.name.length);
        namePokemon.setAttribute("class", "name-Style");
        nameBox.appendChild(namePokemon);

        let typeBox = document.createElement("div");
        element.type.forEach((e) => {
            let typeImage = document.createElement("img");
            typeImage.src = "img/" + e + ".webp";
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

        titleCp.textContent = "CP";
        titleAttack.textContent = "Attack";
        titleDefense.textContent = "Defense";
        titleStamina.textContent = "Stamina";

        numCp.textContent = element.stats['max-cp'];
        numAttack.textContent = element.stats['base-attack'];
        numDefense.textContent = element.stats['base-defense'];
        numStamina.textContent = element.stats['base-stamina'];

        //Contiene la tabla de la parte inicial de la tarjeta, muestra CP-ataque-defensa-
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
        let boxBack = document.createElement("div");
        boxBack.setAttribute("class", "box-back");

        let imgBoxBack = document.createElement("div");
        let imgPokemonBack = document.createElement("img");
        imgBoxBack.setAttribute("class", "image-Pokemon");
        imgPokemonBack.src = element.img;

        imgBoxBack.appendChild(imgPokemonBack);
        boxBack.appendChild(imgBoxBack);

        let whiteBoxCardBack = document.createElement("div");
        whiteBoxCardBack.setAttribute("class", "white-Box");
        boxBack.appendChild(whiteBoxCardBack);

        let heightBox = document.createElement("div");
        heightBox.setAttribute("class", "blueBox");
        let heightPokemon = document.createElement("div");
        heightPokemon.setAttribute("class", "height-pokemon");
        let titleHeight = document.createElement("h4");
        titleHeight.setAttribute("class", "title-height");
        titleHeight.textContent = "Height";
        let numHeight = document.createElement("h4");
        numHeight.setAttribute("class", "num-height");
        numHeight.textContent = element.size['height'];
        heightPokemon.appendChild(numHeight);
        heightBox.appendChild(heightPokemon);
        boxBack.appendChild(titleHeight);
        boxBack.appendChild(heightBox);

        let weightBox = document.createElement("div");
        weightBox.setAttribute("class", "blueBox");
        let weightPokemon = document.createElement("div");
        weightPokemon.setAttribute("class", "weight-pokemon");
        let titleWeight = document.createElement("h4");
        titleWeight.setAttribute("class", "title-weight");
        titleWeight.textContent = "Weight";
        let numWeight = document.createElement("h4");
        numWeight.setAttribute("class", "num-weight");
        numWeight.textContent = element.size['weight'];
        weightPokemon.appendChild(numWeight);
        weightBox.appendChild(weightPokemon);
        boxBack.appendChild(titleWeight);
        boxBack.appendChild(weightBox);

        // Div de las fortalezas de la parte de átras de la tarjeta
        let titleResistant = document.createElement("h4");
        titleResistant.setAttribute("class", "title-back");
        titleResistant.textContent = "Resistant";
        let resistantBox = document.createElement("div");
        resistantBox.setAttribute("class", "blueBox");
        let resistantPokemon = document.createElement("div");

        resistantPokemon.setAttribute("class", "resistant-pokemon");
        resistantBox.appendChild(resistantPokemon);
        boxBack.appendChild(titleResistant);
        boxBack.appendChild(resistantBox);

        // Div de las debilidades de la parte de átras de la tarjeta
        let weaknessesBox = document.createElement("div");
        weaknessesBox.setAttribute("class", "blueBox");

        let titleWeaknesses = document.createElement("h4");
        titleWeaknesses.setAttribute("class", "title-back");
        titleWeaknesses.textContent = "Weaknesses";
        let weaknessesPokemon = document.createElement("div");

        weaknessesPokemon.setAttribute("class", "weaknesses-pokemon");
        weaknessesBox.appendChild(weaknessesPokemon);

        boxBack.appendChild(titleWeaknesses);
        boxBack.appendChild(weaknessesBox);


        //Se traen los inconos de las resistencias
        element.resistant.forEach((e) => {
            let resistantImage = document.createElement("img");
            resistantImage.src = "img/" + e + ".webp";

            // Se deja la misma clase de la imagen del tipo
            resistantImage.setAttribute("class", "typeImg");
            resistantPokemon.appendChild(resistantImage);
        });

        //Se traen los inconos de las debilidades
        element.weaknesses.forEach((e) => {
            let weaknessesImage = document.createElement("img");
            weaknessesImage.src = "img/" + e + ".webp";

            // Se deja la misma clase de la imagen del tipo
            weaknessesImage.setAttribute("class", "typeImg");
            weaknessesPokemon.appendChild(weaknessesImage);
        });
        box.appendChild(boxCard);
        box.appendChild(nameBox);
        box.appendChild(typeBox);
        box.appendChild(tableStats);

        flipCardInner.appendChild(box);
        flipCardInner.appendChild(boxBack);

        flipCard.appendChild(flipCardInner);
        containerBox.appendChild(flipCard);
    });
};
// Termina función showPokemon

// Sidenav - Se crea el menú lateral que contiene los botones de filtrar y ordenar
let containerSidenav = document.createElement("div");
containerSidenav.setAttribute("class", "container-sidenav");

let sidenav = document.createElement("div");
sidenav.setAttribute("class", "sidenav");

//Botones sort para ordenar por nombre y número
let divSort = document.createElement("div");
divSort.setAttribute("class", "div-sort");

let btnSort = document.createElement("button");
btnSort.setAttribute("class", "btn-sort");
btnSort.textContent = "Sort";
let caretDownSort = document.createElement("i");
caretDownSort.setAttribute("class", "fa fa-caret-down");
let dropdownContainerSort = document.createElement("div");
dropdownContainerSort.setAttribute("class", "dropdown-container-sort");
let dropdownAZ = document.createElement("button");
dropdownAZ.setAttribute("id", "sortAZ");
dropdownAZ.setAttribute("class", "sort");
dropdownAZ.textContent = "A - Z";
let dropdownZA = document.createElement("button");
dropdownZA.setAttribute("id", "sortZA");
dropdownZA.setAttribute("class", "sort");
dropdownZA.textContent = "Z - A";
let dropdownUp = document.createElement("button");
dropdownUp.setAttribute("id", "sortUp");
dropdownUp.setAttribute("class", "sort");
dropdownUp.textContent = "Upward";
let dropdownDown = document.createElement("button");
dropdownDown.setAttribute("id", "sortDown");
dropdownDown.setAttribute("class", "sort");
dropdownDown.textContent = "Downward";

// Botones filter para filtrar por región y tipo
let divFilter = document.createElement("div");
divFilter.setAttribute("class", "div-filter");
let btnFilter = document.createElement("button");
btnFilter.setAttribute("class", "btn-Filter");
btnFilter.textContent = "Filter";
let caretDownFilter = document.createElement("i");
caretDownFilter.setAttribute("class", "fa fa-caret-down");

let divBtnAll = document.createElement("div");
divBtnAll.setAttribute("class", "div-btn-all");
let btnAll = document.createElement("button");
btnAll.setAttribute("class", "dropdown-btn");
btnAll.textContent = "All";
let caretDownAll = document.createElement("i");
caretDownAll.setAttribute("class", "fa fa-caret-down");

let divBtnRegion = document.createElement("div");
divBtnRegion.setAttribute("class", "div-btn-region");

let btnRegion = document.createElement("button");
btnRegion.setAttribute("class", "dropdown-btn");
btnRegion.textContent = "Region";
let caretDown = document.createElement("i");
caretDown.setAttribute("class", "fa fa-caret-down");
let dropdownContainer = document.createElement("div");
dropdownContainer.setAttribute("class", "dropdown-container");
let dropdownKanto = document.createElement("button");
dropdownKanto.setAttribute("id", "filterKanto");
dropdownKanto.setAttribute("class", "regionBtn");
dropdownKanto.textContent = "Kanto";
let dropdownJohto = document.createElement("button");
dropdownJohto.setAttribute("id", "filterJohto");
dropdownJohto.setAttribute("class", "regionBtn");
dropdownJohto.textContent = "Johto";

let divBtnType = document.createElement("div");
divBtnType.setAttribute("class", "div-btn-type");
let dropdownContainerType = document.createElement("div");
dropdownContainerType.setAttribute("class", "dropdown-container");
let btnType = document.createElement("button");
btnType.setAttribute("class", "dropdown-btn");
btnType.textContent = "Type";
let caretDownType = document.createElement("i");
caretDownType.setAttribute("class", "fa fa-caret-down");

//Botones para filtrar cada uno de los tipos
let dropdownBug = document.createElement("button");
dropdownBug.setAttribute("id", "filterBug");
dropdownBug.setAttribute("class", "typeBtn");
dropdownBug.textContent = "Bug";
let dropdownDark = document.createElement("button");
dropdownDark.setAttribute("id", "filterDark");
dropdownDark.setAttribute("class", "typeBtn");
dropdownDark.textContent = "Dark";
let dropdownDragon = document.createElement("button");
dropdownDragon.setAttribute("id", "filterDragon");
dropdownDragon.setAttribute("class", "typeBtn");
dropdownDragon.textContent = "Dragon";
let dropdownElectric = document.createElement("button");
dropdownElectric.setAttribute("id", "filterElectric");
dropdownElectric.setAttribute("class", "typeBtn");
dropdownElectric.textContent = "Electric";
let dropdownFairy = document.createElement("button");
dropdownFairy.setAttribute("id", "filterFairy");
dropdownFairy.setAttribute("class", "typeBtn");
dropdownFairy.textContent = "Fairy";
let dropdownFighting = document.createElement("button");
dropdownFighting.setAttribute("id", "filterFighting");
dropdownFighting.setAttribute("class", "typeBtn");
dropdownFighting.textContent = "Fighting";
let dropdownFire = document.createElement("button");
dropdownFire.setAttribute("id", "filterFire");
dropdownFire.setAttribute("class", "typeBtn");
dropdownFire.textContent = "Fire";
let dropdownFlying = document.createElement("button");
dropdownFlying.setAttribute("id", "filterFlying");
dropdownFlying.setAttribute("class", "typeBtn");
dropdownFlying.textContent = "Flying";
let dropdownGhost = document.createElement("button");
dropdownGhost.setAttribute("id", "filterGhost");
dropdownGhost.setAttribute("class", "typeBtn");
dropdownGhost.textContent = "Ghost";
let dropdownGrass = document.createElement("button");
dropdownGrass.setAttribute("id", "filterGrass");
dropdownGrass.setAttribute("class", "typeBtn");
dropdownGrass.textContent = "Grass";
let dropdownGround = document.createElement("button");
dropdownGround.setAttribute("id", "filterGround");
dropdownGround.setAttribute("class", "typeBtn");
dropdownGround.textContent = "Ground";
let dropdownIce = document.createElement("button");
dropdownIce.setAttribute("id", "filterIce");
dropdownIce.setAttribute("class", "typeBtn");
dropdownIce.textContent = "Ice";
let dropdownNormal = document.createElement("button");
dropdownNormal.setAttribute("id", "filterNormal");
dropdownNormal.setAttribute("class", "typeBtn");
dropdownNormal.textContent = "Normal";
let dropdownPoison = document.createElement("button");
dropdownPoison.setAttribute("id", "filterPoison");
dropdownPoison.setAttribute("class", "typeBtn");
dropdownPoison.textContent = "Poison";
let dropdownPsychic = document.createElement("button");
dropdownPsychic.setAttribute("id", "filterPsychic");
dropdownPsychic.setAttribute("class", "typeBtn");
dropdownPsychic.textContent = "Psychic";
let dropdownRock = document.createElement("button");
dropdownRock.setAttribute("id", "filterRock");
dropdownRock.setAttribute("class", "typeBtn");
dropdownRock.textContent = "Rock";
let dropdownSteel = document.createElement("button");
dropdownSteel.setAttribute("id", "filterSteel");
dropdownSteel.setAttribute("class", "typeBtn");
dropdownSteel.textContent = "Steel";
let dropdownWater = document.createElement("button");
dropdownWater.setAttribute("id", "filterWater");
dropdownWater.setAttribute("class", "typeBtn");
dropdownWater.textContent = "Water";

dropdownContainerSort.appendChild(dropdownAZ);
dropdownContainerSort.appendChild(dropdownZA);
dropdownContainerSort.appendChild(dropdownUp);
dropdownContainerSort.appendChild(dropdownDown);

divBtnAll.appendChild(btnAll);
divBtnAll.appendChild(caretDownAll);

divBtnRegion.appendChild(btnRegion);
divBtnRegion.appendChild(caretDown);

divBtnType.appendChild(btnType);
divBtnType.appendChild(caretDownType);

dropdownContainer.appendChild(dropdownKanto);
dropdownContainer.appendChild(dropdownJohto);
dropdownContainerType.appendChild(dropdownBug);
dropdownContainerType.appendChild(dropdownDark);
dropdownContainerType.appendChild(dropdownDragon);
dropdownContainerType.appendChild(dropdownElectric);
dropdownContainerType.appendChild(dropdownFairy);
dropdownContainerType.appendChild(dropdownFighting);
dropdownContainerType.appendChild(dropdownFire);
dropdownContainerType.appendChild(dropdownFlying);
dropdownContainerType.appendChild(dropdownGhost);
dropdownContainerType.appendChild(dropdownGrass);
dropdownContainerType.appendChild(dropdownGround);
dropdownContainerType.appendChild(dropdownIce);
dropdownContainerType.appendChild(dropdownNormal);
dropdownContainerType.appendChild(dropdownPoison);
dropdownContainerType.appendChild(dropdownPsychic);
dropdownContainerType.appendChild(dropdownRock);
dropdownContainerType.appendChild(dropdownSteel);
dropdownContainerType.appendChild(dropdownWater);

let closeSidenav = document.createElement("div");
closeSidenav.setAttribute("class", "close-sidenav");
let bar1 = document.createElement("div");
bar1.setAttribute("class", "bar-1");
let bar2 = document.createElement("div");
bar2.setAttribute("class", "bar-2");
let bar3 = document.createElement("div");
bar3.setAttribute("class", "bar-3");
closeSidenav.appendChild(bar1);
closeSidenav.appendChild(bar2);
closeSidenav.appendChild(bar3);

divSort.appendChild(caretDownSort);
divSort.appendChild(btnSort);
sidenav.appendChild(closeSidenav);
sidenav.appendChild(divSort);
divFilter.appendChild(btnFilter);
divFilter.appendChild(caretDownFilter);
sidenav.appendChild(dropdownContainerSort);
sidenav.appendChild(divFilter);
sidenav.appendChild(divBtnAll);
sidenav.appendChild(divBtnRegion);

sidenav.appendChild(dropdownContainer);
sidenav.appendChild(divBtnType);
sidenav.appendChild(dropdownContainerType);

containerSidenav.appendChild(sidenav);
document.body.appendChild(containerSidenav);

//Se crea el modal que sale cuando no hay pokemons para filtrar
let modalEmptyType = document.createElement("div");
modalEmptyType.setAttribute("class", "modal-empty-type");
modalEmptyType.textContent = "Sorry, no pokemon to show";

containerBox.appendChild(modalEmptyType);

closeSidenav.addEventListener("click", function () {
    if (sidenav.style.width === "40px") {
        sidenav.style.width = "150px";
        document.getElementById("container").style.marginLeft = "160px";
        closeSidenav.setAttribute("class", "change");
    } else {
        sidenav.style.width = "40px";
        document.getElementById("container").style.marginLeft = "50px";
        closeSidenav.removeAttribute("class", "change");
    }
});
// Botones del menú lateral 

divSort.addEventListener("click", function () {
    divSort.classList.toggle("active");
    if (dropdownContainerSort.style.display === "block") {
        dropdownContainerSort.style.display = "none";
    } else {
        dropdownContainerSort.style.display = "block";
    }
});
divFilter.addEventListener("click", function () {
    divFilter.classList.toggle("active");
    if (btnRegion.style.display === "block") {
        btnAll.style.display = "none";
        caretDownAll.style.display = "none";
        btnRegion.style.display = "none";
        caretDown.style.display = "none";
        dropdownContainer.style.display = "none";
        btnType.style.display = "none";
        caretDownType.style.display = "none";
        dropdownContainerType.style.display = "none";
    } else {
        btnAll.style.display = "block";
        caretDownAll.style.display = "block";
        btnRegion.style.display = "block";
        caretDown.style.display = "block";
        btnType.style.display = "block";
        caretDownType.style.display = "block";
    }
});
divBtnRegion.addEventListener("click", function () {
    if (dropdownContainer.style.display === "block") {
        dropdownContainer.style.display = "none";
    } else {
        dropdownContainer.style.display = "block";
    }
});
divBtnType.addEventListener("click", function () {
    if (dropdownContainerType.style.display === "block") {
        dropdownContainerType.style.display = "none";
    } else {
        dropdownContainerType.style.display = "block";
    }
});
divBtnAll.addEventListener("click", () => {
    currentPokemon = data.pokemon;
    showPokemon(currentPokemon);
});



showPokemon(currentPokemon);
// Botones que ordenan la data de forma ascendente y descendente
let sortBtns = document.querySelectorAll(".sort");
sortBtns.forEach(e => {
    e.addEventListener("click", () => {
        let sortOrder;
        let sortBy;
        if (e.innerText === "A - Z" || e.innerText === "Z - A") {
            sortBy = "name";
            if (e.innerText === "A - Z") {
                sortOrder = "ascendente";
            } else {
                sortOrder = "descendente";
            }
        }
        if (e.innerText === "Upward" || e.innerText === "Downward") {
            sortBy = "num";
            if (e.innerText === "Upward") {
                sortOrder = "ascendente";
            } else {
                sortOrder = "descendente";
            }
        }
        currentPokemon = sortData(currentPokemon, sortBy, sortOrder);
        showPokemon(currentPokemon);
    });
});

let regionBtns = document.querySelectorAll(".regionBtn");

regionBtns.forEach(e => {
    e.addEventListener("click", () => {
        currentPokemon = filterData(currentPokemon, e.innerText.toLowerCase());
        showPokemon(currentPokemon);
    });
});

let typeBtns = document.querySelectorAll(".typeBtn");


typeBtns.forEach(e => {
    e.addEventListener("click", () => {
        currentPokemon = filterData(currentPokemon, e.innerText.toLowerCase());
        showPokemon(currentPokemon);

        let typePokemon = [];
        currentPokemon.forEach(element => {
        element.type.forEach(et =>{
            if (!typePokemon.includes(et)) {
                typePokemon.push(et);
            }
        });
              
        });
        if (typePokemon.length < 2) {
            console.log("No hay pokemon que mostrar");
        }
        

    });
    
});


