const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const empArray = [];
let HTMLstring = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Team</title>
    <link rel="stylesheet" href="assets/style.css" />
</head>
<body>
    <h1>Your Team</h1>
    <div id="container">`;

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
        // console.log(choice);
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
        // console.log(empArray);
    });
}

const generateHTML = (empArray) => {
    empArray.forEach((employee) => {
        HTMLstring += `\n \n<div class="card">
            <b>${employee.name}</b> <br>
            Role: ${employee.getRole()} <br>
            Email: ${employee.email} <br>`;
        switch(employee.getRole()) {
            case 'Engineer': 
                HTMLstring += `Github: ${employee.github} <br></div>`;
                break;
            case 'Intern':
                HTMLstring += `School: ${employee.school} <br></div>`;
                break;
            case 'Manager':
                HTMLstring += `Office Number: ${employee.officeNumber} <br></div>`;
                break;
        }
    });

    HTMLstring += `   </div>
    </body>
    </html>`;
}

const outputToFile = () => {
    generateHTML(empArray);
    fs.writeFileSync('index.html', HTMLstring, 'utf-8');
}

initialize();