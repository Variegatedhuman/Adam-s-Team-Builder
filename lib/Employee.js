class Employee  {
    constructor (name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


        givenName () {
            return this.name;
        }

        givenId () {
            return this.id;
        }
        
        givenEmail () {
            return this.email;
        }

        givenPosition () {
            return "Employee"
        }
    }

module.exports = Employee;