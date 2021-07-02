const Manager = require("../lib/Manager");

describe(`Manager`, () => {
  it("Sets name to Johnny", () => {
    const addManager = new Manager("Johnny");
    expect(addManager.name).toEqual("Johnny");
  });
  it("getName method returns name", () => {
    const addManager = new Manager("Johnny");
    expect(addManager.getName()).toEqual("Johnny");
  });

  it("Throws an error if name not given", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addManager = new Manager();
    }).toThrow("Invalid name");
  });
  it("Throws an error if given empty string", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addManager = new Manager("");
    }).toThrow("Invalid name");
  });
  it("sets ID to 1", () => {
    const addManager = new Manager("Johnny", 1);
    expect(addManager.id).toEqual(1);
  });
  it("getID method returns ID", () => {
    const addManager = new Manager("Johnny", 1);
    expect(addManager.getId()).toEqual(1);
  });
  it("sets email to test@hotmail.com", () => {
    const addManager = new Manager("Johnny", 1, "test@hotmail.com");
    expect(addManager.email).toEqual("test@hotmail.com");
  });
  it("getEmail method returns email", () => {
    const addManager = new Manager("Johnny", 1, "test@hotmail.com");
    expect(addManager.getEmail()).toEqual("test@hotmail.com");
  });
  it("getRole method returns Manager", () => {
    const addManager = new Manager("Johnny", 1, "test@hotmail.com");
    expect(addManager.getRole()).toEqual("Manager");
  });
  it("getSchool method returns OfficeNumber", () => {
    const addManager = new Manager("Johnny", 1, "test@hotmail.com", 162);
    expect(addManager.getOfficeNumber()).toEqual(162);
  });
});
