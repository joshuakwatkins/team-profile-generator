const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("name", () => {
      it("Accept a name value in the construction and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const school = "USC"
        const employee = new Intern(name, id, email, school);
  
        const testValue = employee.getName();
  
        expect(testValue).toEqual(name);
      });
    });
    describe("id", () => {
      it("Accept an id value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const school = "USC"
        const employee = new Intern(name, id, email, school);
  
        const testValue = employee.getID();
  
        expect(testValue).toEqual(id);
      });
    });
    describe("email", () => {
      it("Accept an email value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const school = "USC"
        const employee = new Intern(name, id, email, school);
  
        const testValue = employee.getEmail();
  
        expect(testValue).toEqual(email);
      });
    });
    describe("school", () => {
      it("Accept an school value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const school = "USC"
        const employee = new Intern(name, id, email, school);
  
        const testValue = employee.getSchool();
  
        expect(testValue).toEqual(school);
      });
    });
    describe("role", () => {
      it("Return the correct role value", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const school = "USC"
        const employee = new Intern(name, id, email, school);
  
        const testValue = employee.getRole();
  
        expect(testValue).toEqual("Intern");
      });
    });
});