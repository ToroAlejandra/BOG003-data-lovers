// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  condition = JSON.parse(condition);
  var key = Object.keys(condition);
  var key1 = Object.keys(condition[key]);
  let filterPokemon;

  if (condition[key][key1] !== undefined) {
    filterPokemon = data.filter(
      (poke) => poke[key][key1] === condition[key][key1]
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
