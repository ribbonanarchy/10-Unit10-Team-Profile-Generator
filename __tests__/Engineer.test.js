const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("constructor", () => {
        it("should create a new Engineer object with the given properties", () =>{
            const engineer = new Engineer('Bob', '1', 'bob@company.com', 'engineerbob');
            expect(engineer.name).toEqual('Bob');
            expect(engineer.id).toEqual('1');
            expect(engineer.email).toEqual('bob@company.com');
            expect(engineer.github).toEqual('engineerbob');
        });
    });

    describe("getGithub", () => {
        it("should return the engineer's github username", () => {
            const engineer = new Engineer('Bob', '1', 'bob@company.com', 'engineerbob');
            expect(engineer.getGithub()).toEqual('engineerbob');
        });
    });

    describe("getRole", () => {
        it("should return the engineer's role", () => {
            const engineer = new Engineer('Bob', '1', 'bob@company.com', 'engineerbob');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});