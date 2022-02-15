const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const initQ = [
    {
        type: 'list',
        name: 'job', 
        message: 'What role does this employee have?',
        choices: ['Engineer', 'Intern', 'Manager']
    }, 
    {
        type: 'input', 
        name: 'email', 
        message: 'What is your email address?'
    }
];
const engineerQ = [
    {
        type: 'input', 
        name: 'github', 
        message: 'What is your GitHub username?'
    }
];
const internQ = [
    {
        type: 'input', 
        name: 'school', 
        message: 'What is the name of your school?'
    }
];
const managerQ = [
    {
        type: 'input', 
        name: 'officeNumber', 
        message: 'What is your office number?'
    }
];

const initialize = () => {
    return inquirer.prompt(initQ);
}

initialize();