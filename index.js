const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = [];
const generateHTML = require("./lib/Buildteam")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")




function team() {
    initialPrompt();
    function initialPrompt() {

        inquirer.prompt([
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add a new employee to your team?',
                choices: ["yes", "no"]
            },
        ])
            .then((answers) => {
                if (answers.addEmployee === "yes") {
                    employeeInfo ();
                    function employeeInfo () {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of the employee you are adding?',
                            },
                            {
                                type: 'input',
                                name: 'ID',
                                message: 'What is the employee ID for this employee?',
                            },
                            {
                                type: 'input',
                                name: 'Email',
                                message: 'What is the email address for this employee?',
                            },
                            {
                                type: 'list',
                                name: 'position',
                                message: 'What role will this employee be fulfilling?',
                                choices: ["Intern", "Engineer", "Manager"]
                            },

                        ])
                        .then((answers) => {
                            switch (answers.position) {
                                case "Intern":
                                    inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "school",
                                                message: "Which school did you attend?"
                                            },
                                            {
                                                type: "list",
                                                name: "restart",
                                                message: "Do you have more team members to add?",
                                                choices: ["yes", "no"],
                                            },
                                        ])

                                        .then((response) => {

                                            console.log(response)
                                            const intern = new Intern(answers.name, answers.ID, answers.Email, response.school)
                                            teamMembers.push(intern)
                                            console.log(teamMembers)
                                            if (response.restart === "yes"){
                                            employeeInfo();
                                            } else {
                                                buildHTML();
                                            }
                                        })

                                    break
                                case "Engineer":
                                    inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "github",
                                                message: "What is the github for this Engineer?"
                                            },
                                            {
                                                type: "list",
                                                name: "restart",
                                                message: "Do you have more team members to add?",
                                                choices: ["yes", "no"],
                                            },
                                        ])

                                        .then((response) => {

                                            console.log(response)
                                            const engineer = new Engineer(answers.name, answers.ID, answers.Email, response.github)
                                            teamMembers.push(engineer)
                                            console.log(teamMembers)
                                            if (response.restart === "yes"){
                                                employeeInfo();
                                                } else {
                                                    buildHTML();
                                                }
                                        })

                                    break
                                case "Manager":
                                    inquirer
                                        .prompt([
                                            {
                                                type: "input",
                                                name: "office",
                                                message: "What is the officer number for the Manager?"
                                            },
                                            {
                                                type: "list",
                                                name: "restart",
                                                message: "Do you have more team members to add?",
                                                choices: ["yes", "no"],
                                            },
                                        ])

                                        .then((response) => {

                                            const manager = new Manager(answers.name, answers.ID, answers.Email, response.office)
                                            teamMembers.push(manager)
                                            console.log(teamMembers)
                                            if (response.restart === "yes"){
                                                employeeInfo();
                                                } else {
                                                    buildHTML();
                                                }
                                        })

                        
                                default:
                                    
                        
                            }
                        })
                    }
                } else {
                    buildHTML();
                }
            })
    }

}

  function buildHTML(teamMembers) {
    const htmlPageContent = generateHTML(teamMembers);

    fs.writeFile('./src/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Team Successfully Built')

    );
  }



team();


function addToRoster (teamMembers) {
    var info ({name, id, email, office, github, school} = teamMembers)
    
    switch (object){
        case office: {
            info = `Office Number: ${office}`
            generateCard(info);
        }
        break
        case github: {
            info = `github: ${github}`
            generateCard(info);
        }
        break
        case school: {
            info = `School: ${school}`
            generateCard(info);
        }
        break
        default:

    }



}

function generateCard(info) {

    `
    <div class="card">
                <div class="card-head">
                    <div class="card-name"> ${} </div>
                    <div class="card-title"> ${} </div>
                </div>
                <div class="card-body">
                    <div class="id">ID: ${}</div>
                    <div class="email">Email: <a href="mailto:</a></div>
                    <div class="">${va}</div>
                </div>
            </div>
    `
    
}




// ## Your Task

// Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

// Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

// Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

// Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

// > **Note**: There is no starter code for this assignment.

// ## User Story

// ```md
// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles
// ```

// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
// ```


