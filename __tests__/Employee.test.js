const Employee = require("../lib/Employee");

describe(`Employee`, () => {
  it("Sets name to Johnny", () => {
    const addEmployee = new Employee("Johnny");
    expect(addEmployee.name).toEqual("Johnny");
  });
  it("getName method returns name", () => {
    const addEmployee = new Employee("Johnny");
    expect(addEmployee.getName()).toEqual("Johnny");
  });

  it("Throws an error if name not given", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addEmployee = new Employee();
    }).toThrow("Invalid name");
  });
  it("Throws an error if given empty string", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addEmployee = new Employee("");
    }).toThrow("Invalid name");
  });
  it("sets ID to 1", () => {
    const addEmployee = new Employee("Johnny", 1);
    expect(addEmployee.id).toEqual(1);
  });
  it("getID method returns ID", () => {
    const addEmployee = new Employee("Johnny", 1);
    expect(addEmployee.getId()).toEqual(1);
  });
  it("sets email to test@hotmail.com", () => {
    const addEmployee = new Employee("Johnny", 1, "test@hotmail.com");
    expect(addEmployee.email).toEqual("test@hotmail.com");
  });
  it("getEmail method returns email", () => {
    const addEmployee = new Employee("Johnny", 1, "test@hotmail.com");
    expect(addEmployee.getEmail()).toEqual("test@hotmail.com");
  });
  it("getRole method returns Employee", () => {
    const addEmployee = new Employee("Johnny", 1, "test@hotmail.com");
    expect(addEmployee.getRole()).toEqual("Employee");
  });
});

// Falsify - break app as much as possible
// Throws error if name isnt given
