
const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/intern');
const generateTeam = require('./src/createHTML');


 team = [];

const managerQuestions = () => {

    console.log(`Welcome to Team Profile Generator :D`)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"

        },

        {
            type: 'input',
            name: 'id',
            message: "What is the manager'employee Id?"

        },

        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"

        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"

        },


        {
            type: 'list',
            name: 'addTeam',
            message: 'Who would you like to add next to team?',
            choices: ['Engineer', 'Intern',]

        }

    ])
        .then(managerData => {

            const manager = new Manager(managerData.id, managerData.name, managerData.email, managerData.officeNumber)
           team.push(manager);
            console.log(manager)
            switch (managerData.addTeam) {
                case 'Engineer':
                    EngineerQuestions()
                    break;
                case 'Intern':
                    internQuestions();
                    break;
           
            }
        })
}

const EngineerQuestions = () => {

    inquirer.prompt([

        {

            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"

        },

        {
            type: 'input',
            name: 'id',
            message: "What is the engineer'employee Id?"

        },

        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"

        },

        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username"

        }
    ])

        .then((engineerData) => {
            const engineer = new Engineer(engineerData.id, engineerData.name, engineerData.email, engineerData.github)
           team.push(engineer)
            switch (engineerData.addMember) {
                case 'Engineer':
                    EngineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:
                    internQuestions();
            }
        })
};

const internQuestions = () => {
    inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?"

        },

        {
            type: 'input',
            name: 'email',
            message: "What is the inter's email adress?"

        },


        {
            type: 'input',
            name: 'school',
            message: "Where does the intern study?"

        },


    ])
        .then((internData) => {
            const intern = new Intern(internData.id, internData.name, internData.email, internData.school)
           team.push(intern);
            switch (internData.addMember) {
                case 'Engineer':
                    EngineerQuestions();
                    break;
                case 'Intern':
                    break;
                default:
                    writeToFile('dist/index.html', generateTeam(team))
            }
        })
}

managerQuestions();

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('file saved check folder "dist" to visualize!')
    });
};




