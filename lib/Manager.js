const Employee = require("../lib/Employee");
class Manager extends Employee {
  // Intern is an extension of Employee - Super gets info from parent class (Employee)
  // Everything within the parent class is an extension ... Fucntions and paramaters from the parent class dont need to be re-declared.

  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber= officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
