const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = [""];
const generateHTML = require("./lib/Buildteam")
const Intern = require("./lib/Intern")




inquirer
  .prompt([
    {
          type: 'input',
          name: 'name',
          message: 'Describe your project',
      },
      {
          type: 'input',
          name: 'ID',
          message: 'How is your project installed by users and how do they launch your application?',
      },
      {
          type: 'input',
          name: 'Email',
          message: 'Are there are specific limitations for usage?',
      },
    {
      type: 'list',
      name: 'position',
      message: 'What position are you adding to your team?',
      choices: ["Intern", "Engineer", "Manager", "I am ready to build"]
    },

])

//     {
//       type: 'input',
//       name: 'description',
//       message: 'Describe your project',
//     },
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'How is your project installed by users and how do they launch your application?',
//     },
//     {
//       type: 'input',
//       name: 'usage',
//       message: 'Are there are specific limitations for usage?',
//     },
//     {
//       type: 'input',
//       name: 'contributions',
//       message: 'Who would you like to recognize for contributing to this project?',
//     },
//     {
//       type: 'input',
//       name: 'tests',
//       message: 'What sort of tests are you running for your code?',
//     },
//     {
//         type: 'input',
//         name: 'userName',
//         message: 'What is your github username?',
//       },
//       {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//       },
//     {
//       type: 'list',
//       name: 'license',
//       message: 'Choose a license',
//       choices: ["Apache 2.0", "MIT", "Boost Software License 1.0", "BSD 3-Clause License"],
//     },
    
//   ])
  .then((answers) => {
    // switch (answers.position) {
    //     case "Intern":
    //        () => {
    //         inquirer
    //         .prompt([
    //             {
    //                 type: "input",
    //                 name: "school",
    //                 message: "Which school did you attend?"
    //             }
    //         ])
    //         .then((response) => {
    //             console.log(response)
    //             const intern = new Intern(answers.name, answers.ID, answers.Email, response.school)
    //             teamMembers.push(intern)
    //             console.log(teamMembers)
    //         })
    //         };
    //         break
    //     case "Engineer":
    //         addEngineer();
    //         break
    //     case "Manager":
    //         addManager();
    //     default:
    //         buildHTML();
    // }
    if (answers.position = "Intern"){
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Which school did you attend?"
                }
            ])
            .then((response) => {
                console.log(response)
                const intern = new Intern(answers.name, answers.ID, answers.Email, response.school)
                teamMembers.push(intern)
                console.log(teamMembers)
            })
    }
    
  });

  function buildHTML(teamMembers) {
    const htmlPageContent = generateHTML(teamMembers);

    fs.writeFile('./src/index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Team Successfully Built')

    );
  }

function addIntern(){
    inquirer
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


