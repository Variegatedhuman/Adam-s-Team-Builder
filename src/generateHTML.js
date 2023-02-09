const internSlot = intern => {
  return`
    <div class="card">
                <div class="card-head">
                    <div class="card-name"> ${intern.getName()} </div>
                    <div class="card-title"> ${intern.getRole()} </div>
                </div>
                <div class="card-body">
                    <div class="id">ID:${intern.getId()}</div>
                    <div class="email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
                    <div class="variable">${intern.getSchool()}</div>
                </div>
      </div>
      `
}

const engineerSlot = engineer => {
  return`
    <div class="card">
                <div class="card-head">
                    <div class="card-name"> ${engineer.getName()} </div>
                    <div class="card-title"> ${engineer.getRole()} </div>
                </div>
                <div class="card-body">
                    <div class="id">ID:${engineer.getId()}</div>
                    <div class="email">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
                    <div class="variable">${engineer.getGithub()}</div>
                </div>
      </div>
      `
}

const managerSlot = manager => {
 return`
  <div class="card">
              <div class="card-head">
                  <div class="card-name"> ${manager.getName()} </div>
                  <div class="card-title"> ${manager.getRole()} </div>
              </div>
              <div class="card-body">
                  <div class="id">ID:${manager.getId()}</div>
                  <div class="email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
                  <div class="variable">${manager.getOffice()}</div>
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
    <title>Document</title>
</head>
<body>
    <header>

    </header>
    
      ${employeeDivs}
      
</body>
</html>`

};

module.exports = generateHTML; 