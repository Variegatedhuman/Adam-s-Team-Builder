const inquirer = require ("inquirer")
const employee = require ("./Employee")
const engineer = require ("./Engineer")
const intern = require ("./Intern")
const manager = require ("./Manager")








const generateHTML = (teamMembers) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class = "team-member">
    <div class = "card">

    </div>
</div>
</body>
</html>`
}



module.exports = generateHTML;