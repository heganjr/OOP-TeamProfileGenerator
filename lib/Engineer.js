const Employee = require("../lib/Employee");
class Engineer extends Employee {
  // Intern is an extension of Employee - Super gets info from parent class (Employee)
  // Everything within the parent class is an extension ... Fucntions and paramaters from the parent class dont need to be re-declared.

  constructor(name, id, email, gitHub) {
    super(name, id, email);

    this.gitHub = gitHub;
  }

  getGitHub() {
    return this.gitHub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
