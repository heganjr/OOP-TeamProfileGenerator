const Engineer = require("../lib/Engineer");

describe(`Engineer`, () => {
  it("Sets name to Johnny", () => {
    const addEngineer = new Engineer("Johnny");
    expect(addEngineer.name).toEqual("Johnny");
  });
  it("getName method returns name", () => {
    const addEngineer = new Engineer("Johnny");
    expect(addEngineer.getName()).toEqual("Johnny");
  });

  it("Throws an error if name not given", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addEngineer = new Engineer();
    }).toThrow("Invalid name");
  });
  it("Throws an error if given empty string", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addEngineer = new Engineer("");
    }).toThrow("Invalid name");
  });
  it("sets ID to 1", () => {
    const addEngineer = new Engineer("Johnny", 1);
    expect(addEngineer.id).toEqual(1);
  });
  it("getID method returns ID", () => {
    const addEngineer = new Engineer("Johnny", 1);
    expect(addEngineer.getId()).toEqual(1);
  });
  it("sets email to test@hotmail.com", () => {
    const addEngineer = new Engineer("Johnny", 1, "test@hotmail.com");
    expect(addEngineer.email).toEqual("test@hotmail.com");
  });
  it("getEmail method returns email", () => {
    const addEngineer = new Engineer("Johnny", 1, "test@hotmail.com");
    expect(addEngineer.getEmail()).toEqual("test@hotmail.com");
  });
  it("getRole method returns Engineer", () => {
    const addEngineer = new Engineer("Johnny", 1, "test@hotmail.com");
    expect(addEngineer.getRole()).toEqual("Engineer");
  });
  it("getGitHub method returns GitHub Username", () => {
    const addEngineer = new Engineer("Johnny", 1, "test@hotmail.com", "EngineerCoder");
    expect(addEngineer.getGitHub()).toEqual("EngineerCoder");
  });
});
