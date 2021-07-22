// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  let myobj = JSON.parse(condition);

  let key;
  let keytype;
  let actualPokemon;
  for (var key1 in myobj) {
    key = key1;

    if (Object.keys(myobj[key]).length === 1) {
      for (var key2 in myobj[key]) {
        keytype = key2;
      }
      actualPokemon = data.filter(filterPokemon => filterPokemon[key][keytype] === myobj[key][keytype]);
      
    } else {
      actualPokemon = data.filter(filterPokemon => filterPokemon[key][keytype] === myobj[key]);
    }
    //console.log(Object.keys(myobj[key]));
  }
  return actualPokemon;
  console.log(key);


};

export const anotherExample = () => {
  return 'OMG';
};
