import { filterData, sortData } from '../src/data.js';

let initialData = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"]}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"]}, {name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"]}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"]}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"]}];

let sortByName = [{name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"]}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"]}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"]}, {name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"]}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"]}];

let sortByNum = [{name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"]}, {name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"]}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"]}, {name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"]}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"]}];

let filterByKanto = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"]}, {name: "charizard", num: "006", generation: {name: "kanto"}, type:["fire", "flying"]}, {name: "mr. mime", num: "122", generation: {name: "kanto"}, type:["psychic"]}];

let filterByJohto = [{name: "granbull", num: "210", generation: {name: "johto"}, type:["fairy"]}, {name: "tyranitar", num: "248", generation: {name: "johto"}, type:["rock", "dark"]}];

let filterByTypePoison = [{name: "muk", num: "089", generation: {name: "kanto"}, type:["poison"]}];

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

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
