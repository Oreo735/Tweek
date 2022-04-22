//phenotype is a set of timetables for the school
const School = require("../../models/school");
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
  let initial = [];
  const timetable1 = new Timetable({
    table: [],
    score: 19,
  });
  console.log(timetable1);
  const classr = new Classroom({
    name: "class1",
    timetable: timetable1,
  });
  console.log(classr);
  const school = new School({
    teachers: [],
    classrooms: [classr._id],
  });
  const classrooms = school.classrooms;
  const teachers = school.teachers;
  console.log(school);
  return initial;
};

// let initialPopulation = init(556656);
init(123);
// let geneticAlgorithmConstructor = require("geneticalgorithm");
// let geneticAlgorithm = geneticAlgorithmConstructor({
//   mutationFunction: mutationFunction,
//   crossoverFunction: crossoverFunction,
//   fitnessFunction: fitnessFunction,
//   doesABeatBFunction: doesABeatB,
//   population: initialPopulation,
// });

// console.log("Starting with:");
// console.log(firstPhenotype);
// for (let i = 0; i < 100; i++) geneticAlgorithm.evolve();
// let best = geneticAlgorithm.best();
// delete best.score;
// console.log("Finished with:");
// console.log(best);
