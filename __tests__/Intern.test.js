const Intern = require("../lib/Intern");

describe(`Intern`, () => {
  it("Sets name to Johnny", () => {
    const addIntern = new Intern("Johnny");
    expect(addIntern.name).toEqual("Johnny");
  });
  it("getName method returns name", () => {
    const addIntern = new Intern("Johnny");
    expect(addIntern.getName()).toEqual("Johnny");
  });

  it("Throws an error if name not given", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addIntern = new Intern();
    }).toThrow("Invalid name");
  });
  it("Throws an error if given empty string", () => {
    expect(() => {
      // Jest requires an arrow function for errors
      const addIntern = new Intern("");
    }).toThrow("Invalid name");
  });
  it("sets ID to 1", () => {
    const addIntern = new Intern("Johnny", 1);
    expect(addIntern.id).toEqual(1);
  });
  it("getID method returns ID", () => {
    const addIntern = new Intern("Johnny", 1);
    expect(addIntern.getId()).toEqual(1);
  });
  it("sets email to test@hotmail.com", () => {
    const addIntern = new Intern("Johnny", 1, "test@hotmail.com");
    expect(addIntern.email).toEqual("test@hotmail.com");
  });
  it("getEmail method returns email", () => {
    const addIntern = new Intern("Johnny", 1, "test@hotmail.com");
    expect(addIntern.getEmail()).toEqual("test@hotmail.com");
  });
  it("getRole method returns Employee", () => {
    const addIntern = new Intern("Johnny", 1, "test@hotmail.com");
    expect(addIntern.getRole()).toEqual("Intern");
  });
  it("getSchool method returns School", () => {
    const addIntern = new Intern("Johnny", 1, "test@hotmail.com", "UCLA");
    expect(addIntern.getSchool()).toEqual("UCLA");
  });
});
