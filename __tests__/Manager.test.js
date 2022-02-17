const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("constructor", () => {
        it("should create a new Manager object with the given properties", () =>{
            const manager = new Manager('Bob', '1', 'bob@company.com', '2B');
            expect(manager.name).toEqual('Bob');
            expect(manager.id).toEqual('1');
            expect(manager.email).toEqual('bob@company.com');
            expect(manager.officeNumber).toEqual('2B');
        });
    });

    describe("getRole", () => {
        it("should return the manager's role", () => {
            const manager = new Manager('Bob', '1', 'bob@company.com', '2B');
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});