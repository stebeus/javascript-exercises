const findTheOldest = function (people) {
  /**
   * Get people
   * Store empty age list
   * For each person, push calculated age to the list
   * Store oldest age variable
   * For each person, compare if age is equal to oldest age and return the oldest person
   */

  const ageList = [];

  for (person of people) {
    person.age = person.yearOfDeath - person.yearOfBirth;
    ageList.push(person.age);
  }

  const oldestAge = Math.max(...ageList);

  for (person of people) {
    if (person.age === oldestAge) return person;
  }
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
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
  {
    name: "Jacob",
    yearOfBirth: 1023,
  },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
