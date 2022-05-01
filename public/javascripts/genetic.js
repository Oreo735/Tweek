//phenotype is a set of timetables for the school
const School = require("../../models/school");
const Teacher = require("../../models/teacher");
const Timetable = require("../../models/timetable");
const Classroom = require("../../models/classroom");

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

const init = async (schoolId) => {
  const school = School.findById(schoolId)
    .populate("teachers")
    .populate("classrooms");
  const teachers = school.teachers;
  const classrooms = school.classrooms;

  const days = [
    {
      name: "Sunday",
    },
  ];
  let timetable = new Timetable();
  return [];
};

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
