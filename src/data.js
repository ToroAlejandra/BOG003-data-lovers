// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  let actualPokemon = [];
  if (condition !== "") {
    data.forEach(element => {
      if (element.generation.name == condition) {
        actualPokemon.push(element);
      } else if (element.type.includes(condition)) {
        actualPokemon.push(element);
      }
    });
  } else {
    actualPokemon = data;
  }
  return actualPokemon;
};

export const sortData = (data, sortBy, sortOrder) => {
  let actualPokemon = [];
  let sortPokemon = data.sort(function (a, b) {
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  });
  
  switch (sortOrder) {
    case "ascendente":
      actualPokemon = sortPokemon;
      break;
    case "descendente":
      actualPokemon = sortPokemon.reverse();
      break;
    default:
      break;
  }
  return actualPokemon;
};
