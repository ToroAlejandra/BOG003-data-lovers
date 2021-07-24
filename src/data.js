// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  
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
};

export const anotherExample = () => {
  return 'OMG';
};
