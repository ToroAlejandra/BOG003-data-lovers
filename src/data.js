// estas funciones son de ejemplo

export const filterData = (data, condition) => {
/*
  
  let actualPokemon = [];
  if(condition !== ""){
    data.forEach(element => {
      if(element.generation.name == condition){
        actualPokemon.push(element);
      }else if (element.type.includes(condition)){
        actualPokemon.push(element);
      }else {
      }
    });
  } else {
    actualPokemon = data;
  }
  return actualPokemon;
*/
  condition = JSON.parse(condition);
  var key = Object.keys(condition);
  var key1 = Object.keys(condition[key]);
  let filterPokemon;
  let clave;

  if (condition[key][key1] !== undefined) {
    filterPokemon = data.filter(
      (poke) => poke[clave] === condition[clave]//poke[key][key1] === condition[key][key1]
    );
  }else{
    filterPokemon = data.filter(
      (poke) => (poke[key][0]=== condition[key][1] || poke[key][1]=== condition[key][1]) 
    );
  }
  
  return filterPokemon;
};

export const anotherExample = () => {
  return "OMG";
};
