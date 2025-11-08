const findTheOldest = function (people) {
  /**
   * Get the people
   * Create an empty age list array
   * For each person of people:
   *   Calculate death year minus birth year
   *   Push result to age list
   * Return maximum age
   */
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
