// Your code here
class Person {
  constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
  }

  introduce() {
      console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(peopleArray) {
      if (!Array.isArray(peopleArray)) {
          console.log("introducePeople only takes an array as an argument.");
          return;
      }

      for (const person of peopleArray) {
          if (!(person instanceof Person)) {
              console.log("All items in array must be Person class instances.");
              return;
          }
      }

      for (const person of peopleArray) {
          person.introduce();
      }
  }
}

module.exports = Person;


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}