const findTheOldest = function (people) {
  /**
   * Get people
   * Store empty age list
   * For each person, push calculated age to the list
   * Filter oldest person by:
   *   Storing oldest age in variable
   *   Comparing person age with oldest age
   * Return oldest person
   */

  const ageList = [];

  for (person of people) {
    person.age = person.yearOfDeath - person.yearOfBirth;
    ageList.push(person.age);
  }
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
