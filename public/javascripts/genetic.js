//phenotype is a set of timetables for the school

function mutationFunction(phenotype) {
  // make a random change to phenotype
  return phenotype;
}

function crossoverFunction(phenotypeA, phenotypeB) {
  // move, copy, or append some values from a to b and from b to a
  return [phenotypeA, phenotypeB];
}

function fitnessFunction(phenotype) {
  let score = 0;
  // use your phenotype data to figure out a fitness score
  return phenotype.num;
}

let firstPhenotype = {
  dummyKey: "dummyValue",
  num: 0,
};
let secondPhenotype = {
  dummyKey: "dummyValue",
  num: 4,
};

function doesABeatB(a, b) {
  if (a.num < b.num) return true;
  else return false;
}

function init(school) {
  let initial = [];
  let rooms = school.classrooms;
  let teachers = school.teachers;

  return initial;
}

let initialPopulation = init();

let geneticAlgorithmConstructor = require("geneticalgorithm");
let geneticAlgorithm = geneticAlgorithmConstructor({
  mutationFunction: mutationFunction,
  crossoverFunction: crossoverFunction,
  fitnessFunction: fitnessFunction,
  doesABeatBFunction: doesABeatB,
  population: initialPopulation,
});

console.log("Starting with:");
console.log(firstPhenotype);
for (let i = 0; i < 100; i++) geneticAlgorithm.evolve();
let best = geneticAlgorithm.best();
delete best.score;
console.log("Finished with:");
console.log(best);
