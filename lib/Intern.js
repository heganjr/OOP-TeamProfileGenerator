const Employee = require("../lib/Employee");
class Intern extends Employee {
  // Intern is an extension of Employee - Super gets info from parent class (Employee)
  // Everything within the parent class is an extension ... Fucntions and paramaters from the parent class dont need to be re-declared.

  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
