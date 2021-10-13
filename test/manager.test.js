const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("name", () => {
      it("Accept a name value in the construction and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const officeNumber = "45c"
        const employee = new Manager(name, id, email, officeNumber);
  
        const testValue = employee.getName();
  
        expect(testValue).toEqual(name);
      });
    });
    describe("id", () => {
      it("Accept an id value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const officeNumber = "45c"
        const employee = new Manager(name, id, email, officeNumber);
  
        const testValue = employee.getID();
  
        expect(testValue).toEqual(id);
      });
    });
    describe("email", () => {
      it("Accept an email value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const officeNumber = "45c"
        const employee = new Manager(name, id, email, officeNumber);
  
        const testValue = employee.getEmail();
  
        expect(testValue).toEqual(email);
      });
    });
    describe("office number", () => {
      it("Accept an office number value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const officeNumber = "45c"
        const employee = new Manager(name, id, email, officeNumber);
  
        const testValue = employee.getOfficeNumber();
  
        expect(testValue).toEqual(officeNumber);
      });
    });
    describe("role", () => {
      it("Return the corect role value", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const officeNumber = "45c"
        const employee = new Manager(name, id, email, officeNumber);
  
        const testValue = employee.getRole();
  
        expect(testValue).toEqual("Manager");
      });
    });
});