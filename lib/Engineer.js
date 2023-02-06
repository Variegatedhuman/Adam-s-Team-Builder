const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email) {
        super (name, id, email);
    }

    givenPosition() {
        return "Engineer";
    }
}

module.exports = Engineer