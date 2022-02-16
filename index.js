const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const empArray = [];

const initQ = [
    {
        type: 'list',
        name: 'job', 
        message: 'What role does the next employee have?',
        choices: ['Engineer', 'Intern', 'Manager', 'We have no more employees on our team.']
    },
];
const engineerQ = [
    {
        type: 'input', 
        name: 'name', 
        message: "What is the engineer's name?",
    },
    {
        type: 'input', 
        name: 'id', 
        message: "What is this engineer's employee ID?",
    },
    {
        type: 'input', 
        name: 'email',
        message: "What is this engineer's email address?"
    },
    {
        type: 'input', 
        name: 'github', 
        message: "What is this engineer's GitHub username?"
    }
];
const internQ = [
    {
        type: 'input', 
        name: 'name', 
        message: "What is this intern's name?"
    },
    {
        type: 'input', 
        name: 'id', 
        message: "What is this intern's employee ID?"
    },
    {
        type: 'input', 
        name: 'email', 
        message: "What is this intern's email address?"
    },
    {
        type: 'input', 
        name: 'school', 
        message: "What is the name of this intern's school?"
    }
];
const managerQ = [
    {
        type: 'input', 
        name: 'name', 
        message: "What is this manager's name?" 
    },
    {
        type: 'input', 
        name: 'id', 
        message: "What is this manager's employee ID?"
    },
    {
        type: 'input', 
        name: 'email', 
        message: "What is this manager's email address?"
    },
    {
        type: 'input', 
        name: 'officeNumber', 
        message: "What is this manager's office number?"
    }
];

const initialize = () => {
    return inquirer.prompt(initQ)
    .then(choice => {
        console.log(choice);
        switch(choice.job) {
            case 'Engineer': 
                return inquirer.prompt(engineerQ)
                .then(answers => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    empArray.push(engineer);
                })
                .then( () => { initialize(); });
                break;
            case 'Intern':
                return inquirer.prompt(internQ)
                .then(answers => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    empArray.push(intern);
                })
                .then( () => { initialize(); });
                break;
            case 'Manager':
                return inquirer.prompt(managerQ)
                .then(answers => {
                    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
                    empArray.push(manager);
                })
                .then( () => { initialize(); });
                break;
            default: 
                outputToFile();
                break;
        }
        console.log(empArray);
    });
}

const outputToFile = () => {
    fs.writeFileSync('test.txt', 'test test potatoes test', 'utf-8');
}

initialize();