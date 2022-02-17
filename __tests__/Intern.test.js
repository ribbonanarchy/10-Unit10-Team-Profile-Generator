const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("constructor", () => {
        it("should create a new Intern object with the given properties", () =>{
            const intern = new Intern('Bob', '1', 'bob@company.com', 'Intern University');
            expect(intern.name).toEqual('Bob');
            expect(intern.id).toEqual('1');
            expect(intern.email).toEqual('bob@company.com');
            expect(intern.school).toEqual('Intern University');
        });
    });

    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const intern = new Intern('Bob', '1', 'bob@company.com', 'Intern University');
            expect(intern.getSchool()).toEqual('Intern University');
        });
    });

    describe("getRole", () => {
        it("should return the intern's role", () => {
            const intern = new Intern('Bob', '1', 'bob@company.com', 'Intern University');
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});