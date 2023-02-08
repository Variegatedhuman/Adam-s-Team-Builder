const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    givenPosition() {
        return "Engineer";
    }
    givenGithub () {
        return "github"
    }
}

module.exports = Engineer