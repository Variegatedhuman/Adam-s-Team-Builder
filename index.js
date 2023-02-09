const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = [];
const generateHTML = require("./src/generateHTML")
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

  function buildHTML() {
    const htmlPageContent = generateHTML(teamMembers);
    

    fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Team Successfully Built')

    );
  }



team();




