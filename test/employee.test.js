const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("name", () => {
      it("Accept a name value in the construction and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const employee = new Employee(name, id, email);
  
        const testValue = employee.getName();
  
        expect(testValue).toEqual(name);
      });
    });
    describe("id", () => {
      it("Accept an id value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const employee = new Employee(name, id, email);
  
        const testValue = employee.getID();
  
        expect(testValue).toEqual(id);
      });
    });
    describe("email", () => {
      it("Accept an id value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const employee = new Employee(name, id, email);
  
        const testValue = employee.getEmail();
  
        expect(testValue).toEqual(email);
      });
    });
    describe("role", () => {
      it("Return the corect role value", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const employee = new Employee(name, id, email);
  
        const testValue = employee.getRole();
  
        expect(testValue).toEqual("Employee");
      });
    });
});