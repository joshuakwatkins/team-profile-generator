const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("name", () => {
      it("Accept a name value in the construction and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const github = "willy-yam"
        const employee = new Engineer(name, id, email, github);
  
        const testValue = employee.getName();
  
        expect(testValue).toEqual(name);
      });
    });
    describe("id", () => {
      it("Accept an id value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const github = "willy-yam"
        const employee = new Engineer(name, id, email, github);
  
        const testValue = employee.getID();
  
        expect(testValue).toEqual(id);
      });
    });
    describe("email", () => {
      it("Accept an email value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const github = "willy-yam"
        const employee = new Engineer(name, id, email, github);
  
        const testValue = employee.getEmail();
  
        expect(testValue).toEqual(email);
      });
    });
    describe("GitHub", () => {
      it("Accept a GitHub value in the and return the same", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const github = "willy-yam"
        const employee = new Engineer(name, id, email, github);
  
        const testValue = employee.getGithub();
  
        expect(testValue).toEqual(github);
      });
    });
    describe("role", () => {
      it("Return the corect role value", () => {
        const name = "will"
        const id = "88"
        const email = "will@will.com"
        const github = "willy-yam"
        const employee = new Engineer(name, id, email, github);
  
        const testValue = employee.getRole();
  
        expect(testValue).toEqual("Engineer");
      });
    });
});