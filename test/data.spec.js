import { computeStats, filterData, sortData } from '../src/data.js';

let initialData = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"], size:{height: "1.40 m", weight: "48.7 kg"}, stats: {"base-attack": "212", "base-defense": "131", "base-stamina": "207", "max-cp": "2552", "max-hp": "175" }}, {name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"], size:{height: "1.70 m", weight: "90.5 kg"}, stats: {"base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158" }}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"], size:{height: "1.30 m", weight: "54.5 kg"}, stats: {"base-attack": "192", "base-defense": "205", "base-stamina": "120", "max-cp": "2228", "max-hp": "106" }}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"], size:{height: "2.00 m", weight: "202.0 kg"}, stats: {"base-attack": "251", "base-defense": "207", "base-stamina": "225", "max-cp": "3834", "max-hp": "189" }}];

let sortByName = [{name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"], size:{height: "1.70 m", weight: "90.5 kg"}, stats: {"base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158" }}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"], size:{height: "1.40 m", weight: "48.7 kg"}, stats: {"base-attack": "212", "base-defense": "131", "base-stamina": "207", "max-cp": "2552", "max-hp": "175" }}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"], size:{height: "1.30 m", weight: "54.5 kg"}, stats: {"base-attack": "192", "base-defense": "205", "base-stamina": "120", "max-cp": "2228", "max-hp": "106" }}, {name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"], size:{height: "2.00 m", weight: "202.0 kg"}, stats: {"base-attack": "251", "base-defense": "207", "base-stamina": "225", "max-cp": "3834", "max-hp": "189" }}];

let sortByNum = [{name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"], size:{height: "1.70 m", weight: "90.5 kg"}, stats: {"base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158" }}, {name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"], size:{height: "1.30 m", weight: "54.5 kg"}, stats: {"base-attack": "192", "base-defense": "205", "base-stamina": "120", "max-cp": "2228", "max-hp": "106" }}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"], size:{height: "1.40 m", weight: "48.7 kg"}, stats: {"base-attack": "212", "base-defense": "131", "base-stamina": "207", "max-cp": "2552", "max-hp": "175" }}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"], size:{height: "2.00 m", weight: "202.0 kg"}, stats: {"base-attack": "251", "base-defense": "207", "base-stamina": "225", "max-cp": "3834", "max-hp": "189" }}];

let filterByKanto = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}, {name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"], size:{height: "1.70 m", weight: "90.5 kg"}, stats: {"base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158" }}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"], size:{height: "1.30 m", weight: "54.5 kg"}, stats: {"base-attack": "192", "base-defense": "205", "base-stamina": "120", "max-cp": "2228", "max-hp": "106" }}];

let filterByJohto = [{name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"], size:{height: "1.40 m", weight: "48.7 kg"}, stats: {"base-attack": "212", "base-defense": "131", "base-stamina": "207", "max-cp": "2552", "max-hp": "175" }}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"], size:{height: "2.00 m", weight: "202.0 kg"}, stats: {"base-attack": "251", "base-defense": "207", "base-stamina": "225", "max-cp": "3834", "max-hp": "189" }}];

let filterByTypePoison = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}];

let averageData = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"average": 709.4, "base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"], size:{height: "1.30 m", weight: "54.5 kg"}, stats: {"average": 570.2, "base-attack": "192", "base-defense": "205", "base-stamina": "120", "max-cp": "2228", "max-hp": "106" }}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"], size:{height: "1.40 m", weight: "48.7 kg"}, stats: {"average": 655.4, "base-attack": "212", "base-defense": "131", "base-stamina": "207", "max-cp": "2552", "max-hp": "175" }}, {name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"], size:{height: "1.70 m", weight: "90.5 kg"}, stats: {"average": 725.8, "base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158" }}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"], size:{height: "2.00 m", weight: "202.0 kg"}, stats: {"average": 941.2, "base-attack": "251", "base-defense": "207", "base-stamina": "225", "max-cp": "3834", "max-hp": "189" }}];

let dataHeight = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"], size:{height: "1.30 m", weight: "54.5 kg"}, stats: {"base-attack": "192", "base-defense": "205", "base-stamina": "120", "max-cp": "2228", "max-hp": "106" }}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"], size:{height: "1.40 m", weight: "48.7 kg"}, stats: {"base-attack": "212", "base-defense": "131", "base-stamina": "207", "max-cp": "2552", "max-hp": "175" }}, {name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"], size:{height: "1.70 m", weight: "90.5 kg"}, stats: {"base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158" }}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"], size:{height: "2.00 m", weight: "202.0 kg"}, stats: {"base-attack": "251", "base-defense": "207", "base-stamina": "225", "max-cp": "3834", "max-hp": "189" }}, {name: "skarmony", num: "227", generation: {name: "johto"}, type:["steel", "flying"], size:{height: "1.70 m", weight: "50.5 kg"}, stats: {"base-attack": "148", "base-defense": "226", "base-stamina": "163", "max-cp": "2108", "max-hp": "140" }}];

let orderHeight = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"], size:{height: "1.19 m", weight: "30.0 kg"}, stats: {"average": 709.4, "base-attack": "190", "base-defense": "172", "base-stamina": "233", "max-cp": "2757", "max-hp": "195" }}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"], size:{height: "1.30 m", weight: "54.5 kg"}, stats: {"average": 570.2, "base-attack": "192", "base-defense": "205", "base-stamina": "120", "max-cp": "2228", "max-hp": "106" }}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"], size:{height: "1.40 m", weight: "48.7 kg"}, stats: {"average": 655.4, "base-attack": "212", "base-defense": "131", "base-stamina": "207", "max-cp": "2552", "max-hp": "175" }}, {name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"], size:{height: "1.70 m", weight: "90.5 kg"}, stats: {"average": 725.8, "base-attack": "223", "base-defense": "173", "base-stamina": "186", "max-cp": "2889", "max-hp": "158" }}, {name: "skarmony", num: "227", generation: {name: "johto"}, type:["steel", "flying"], size:{height: "1.70 m", weight: "50.5 kg"}, stats: {"average": 557.0, "base-attack": "148", "base-defense": "226", "base-stamina": "163", "max-cp": "2108", "max-hp": "140" }}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"], size:{height: "2.00 m", weight: "202.0 kg"}, stats: {"average": 941.2, "base-attack": "251", "base-defense": "207", "base-stamina": "225", "max-cp": "3834", "max-hp": "189" }}];

describe('filterData', () => {
  it('It filterData is a function', () => {
    expect(typeof filterData).toBe('function');
  });
  it('Pokemon that belong to the Kanto region should return', () => {
    expect(filterData(initialData, "kanto")).toEqual(filterByKanto);
  });
  it('Pokemon that belong to the Johto region should return', () => {
    expect(filterData(initialData, "johto")).toEqual(filterByJohto);
  });
  it('Pokemon that belong Poison should return', () => {
    expect(filterData(initialData, "poison")).toEqual(filterByTypePoison);
  });
  it('Pokemon that belong initialData should return', () => {
    expect(filterData(initialData, "")).toEqual(initialData);
  });
});

describe('sortData', () => {
  it('It sortData is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('Should return the pokemon in alphabetical order according to their name', () => {
    expect(sortData(initialData, "name", "ascendente")).toEqual(sortByName);
  });
  it('Should return the pokemon in descendant alphabetical order according to their name', () => {
    expect(sortData(initialData, "name", "descendente")).toEqual(sortByName.reverse());
  });
  it('Should return the pokemon in numerical order according to their num', () => {
    expect(sortData(initialData, "num", "ascendente")).toEqual(sortByNum);
  });
  it('Should return the pokemon in descendant numerical order according to their num', () => {
    expect(sortData(initialData, "num", "descendente")).toEqual(sortByNum.reverse());
  });
  it('Should return initialData when not given a parameter for sortOrder', () => {
    expect(sortData(initialData, "", "num")).toEqual(initialData);
  });
});

describe('computeStats', () => {
  it('It computeStats is a function', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('Should return the pokemon in order according to their height', () => {
    expect(computeStats(initialData)).toEqual(["720.4", "151.80", averageData, averageData[0], averageData[averageData.length-1]]);
  });
  it('Should return the pokemon in order according to their height', () => {
    expect(computeStats(dataHeight)).toEqual(["693.2", "154.83", orderHeight, orderHeight[0], orderHeight[orderHeight.length-1]]);
  });
});

