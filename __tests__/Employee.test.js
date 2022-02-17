const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("constructor", () => {
        it("should create a new Employee object with the given properties", () =>{
            const emp = new Employee('Bob', '1', 'bob@company.com');
            expect(emp.name).toEqual('Bob');
            expect(emp.id).toEqual('1');
            expect(emp.email).toEqual('bob@company.com');
        });
    });

    describe("getName", () => {
        it("should return the employee's name", () => {
            const emp = new Employee('Bob', '1', 'bob@company.com');
            expect(emp.getName()).toEqual('Bob');
        });
    });

    describe("getId", () => {
        it("should return the employee's id", () => {
            const emp = new Employee('Bob', '1', 'bob@company.com');
            expect(emp.getId()).toEqual('1');
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const emp = new Employee('Bob', '1', 'bob@company.com');
            expect(emp.getEmail()).toEqual('bob@company.com');
        });
    });

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const emp = new Employee('Bob', '1', 'bob@company.com');
            expect(emp.getRole()).toEqual('Employee');
        });
    });
});