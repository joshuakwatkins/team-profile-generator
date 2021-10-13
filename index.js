
//modules
const inquirer = require('inquirer');

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const buildPage = require('./src/buildPage')


let theTeam = [];

const buildTeamManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
            validate: name => name ? true : console.log("\nPlease enter a name for the manager:")
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's ID?",
            validate: id => id ? true : console.log("\nPlease enter an ID for the manager:")
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
            validate: email => {
                const emailTest = new RegExp("[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}")
                validEmail = emailTest.test(email)
                if (validEmail) {
                    return true;
                 } else {
                     console.error("\nPlease enter a valid email for the manager:")
                 }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
            validate: officeNumber => officeNumber ? true : console.log("\nPlease enter an office number for the manager:")
        },
        {
            type: "list",
            name: "addMore",
            message: "Would you like to add another team member?",
            choices: ["Engineer","Intern","I don't need any more team members"],
        }
    ])
        .then(val => {
            const { name, id, email, officeNumber, addMore } = val;
            const manager = new Manager(name, id, email, officeNumber)
            theTeam.push(manager);;
            buildTeam(addMore);
            return theTeam;
        })
}

const buildTeamEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate: name => name ? true : console.log("\nPlease enter a name for the engineer:")
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
            validate: id => id ? true : console.log("\nPlease enter an ID for the engineer:")
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            validate: email => {
                const emailTest = new RegExp("[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}")
                validEmail = emailTest.test(email)
                if (validEmail) {
                    return true;
                 } else {
                     console.error("\nPlease enter a valid email for the engineer:")
                 }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub?",
            validate: github => github ? true : console.log("\nPlease enter the GitHub of the engineer:")
        },
        {
            type: "list",
            name: "addMore",
            message: "Would you like to add another team member?",
            choices: ["Engineer","Intern","I don't need any more team members"],
        }
    ])
        .then(val => {
            const { name, id, email, github, addMore } = val;
            const engineer = new Engineer(name, id, email, github)
            theTeam.push(engineer);
            buildTeam(addMore);
            return theTeam;
        })
}



const buildTeamIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate: name => name ? true : console.log("\nPlease enter a name for the intern:")
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
            validate: id => id ? true : console.log("\nPlease enter an ID for the intern:")
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
            validate: email => {
                const emailTest = new RegExp("[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}")
                validEmail = emailTest.test(email)
                if (validEmail) {
                    return true;
                 } else {
                     console.error("\nPlease enter a valid email for the intern:")
                 }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending?",
            validate: school => school ? true : console.log("\nPlease enter the school of the intern:")
        },
        {
            type: "list",
            name: "addMore",
            message: "Would you like to add another team member?",
            choices: ["Engineer","Intern","I don't need any more team members"],
        }
    ])
        .then(val => {
            const { name, id, email, school, addMore } = val;
            const intern = new Intern(name, id, email, school)
            theTeam.push(intern);
            buildTeam(addMore);
            return theTeam;
        })
}

const buildTeam = (addMore) => {
    let choice = addMore;
    if (choice === "Engineer") {
        buildTeamEngineer();
    } else if (choice === "Intern") {
        buildTeamIntern();   
    } else {
        buildPage(theTeam)
    }
}

const init = () => {
    buildTeamManager()
}

init();






// buildTeamManager();
// buildTeamEngineer();