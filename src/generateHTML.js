const internSlot = intern => {
  return`
    <div class="card d-flex col-3 align-items-center card-style">
                <div class="card-head">
                    <div class="card-title"> ${intern.getRole()} </div>
                    <div class="card-name"> ${intern.getName()} </div>
                </div>
                <div class="card-body">
                    <div class="id">Employee ID: ${intern.getId()}</div>
                    <div class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
                    <div class="variable">School: ${intern.getSchool()}</div>
                </div>
      </div>
      `
}

const engineerSlot = engineer => {
  return`
    <div class="card d-flex col-3 align-items-center card-style">
                <div class="card-head">
                    <div class="card-title"> ${engineer.getRole()} </div>
                    <div class="card-name"> ${engineer.getName()} </div>                 
                </div>
                <div class="card-body">
                    <div class="id">Employee ID: ${engineer.getId()}</div>
                    <div class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
                    <div class="variable">Engineer's github: <a href="${engineer.getGithub()}">Github</a></div>
                </div>
      </div>
      `
}

const managerSlot = manager => {
 return`
  <div class="card d-flex col-3 align-items-center card-style">
              <div class="card-head">
                  <div class="card-title"> ${manager.getRole()} </div>
                  <div class="card-name"> ${manager.getName()} </div>                  
              </div>
              <div class="card-body">
                  <div class="id">Employee ID: ${manager.getId()}</div>
                  <div class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
                  <div class="variable">Manager Office #: ${manager.getOffice()}</div>
              </div>
    </div>
    `
}


const generateHTML = (data) => {

  rosterArray = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();


    switch (role) {
      case "Intern":
        const internDiv = internSlot(employee)
        rosterArray.push(internDiv)
        break;
      case "Engineer":
        const engineerDiv = engineerSlot(employee)
        rosterArray.push(engineerDiv)
        break;
      case "Manager":
        const managerDiv = managerSlot(employee)
        rosterArray.push(managerDiv)
        break;

      default:
        break;
    }

  }

  const employeeDivs = rosterArray.join("")

  const generateRoster = generateRosterHtml(employeeDivs)
  return generateRoster
}





const generateRosterHtml = function (employeeDivs) {
  return ` 
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles.css">
    <title>Team Roster</title>
</head>
<body>
    <header>
          <h1 class="text-center"> Team Roster </h1>
    </header>
    <div class= "container"> 
        <div class= "row"> 
      ${employeeDivs}
        </div>
      </div>
</body>
</html>`

};

module.exports = generateHTML; 