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
    default: actualPokemon = data;
      break;
  }
  return actualPokemon;
};

export const computeStats = (data) => {
  let sumHeight = 0;
  let averageTotal = 0;
  data.forEach(element => {
    let sumStats = 0;
    sumStats = sumStats + parseInt(element.stats["base-attack"]);
    sumStats = sumStats + parseInt(element.stats["base-defense"]);
    sumStats = sumStats + parseInt(element.stats["base-stamina"]);
    sumStats = sumStats + parseInt(element.stats["max-cp"]);
    sumStats = sumStats + parseInt(element.stats["max-hp"]);
    sumStats = sumStats / 5; // Average Stats 
    element.stats["average"] = sumStats;
    averageTotal += element.stats["average"];
    // console.log(sumStats);
    sumHeight = sumHeight + (parseFloat(element.size["height"]) * 100);
  });
  averageTotal = (averageTotal / data.length).toFixed(1);

  sumHeight = (sumHeight / data.length).toFixed(2);

  let sortHeight = data.sort(function (a, b) {
    if (parseFloat(a.size["height"]) > parseFloat(b.size["height"])) {
      return 1;
    }
    if (parseFloat(a.size["height"]) < parseFloat(b.size["height"])) {
      return -1;
    }
    return 0;
  });
  return [averageTotal, sumHeight, sortHeight, sortHeight[0], sortHeight[sortHeight.length - 1]];
};