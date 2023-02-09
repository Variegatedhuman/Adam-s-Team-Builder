const Employee = require("../lib/Employee")







test("Creating a new employee", () => {
    const employee = new Employee ("Brian", 42, "Brian@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    explect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

})


test("Checks employee details", () => {
    const employee = new Employee ("Brian", 42, "Brian@gmail.com");
    
    expect(employee.getName()).toEqual(expect.any(String))
    expect(employee.getId()).toEqual(expect.any(Number))
    expect(employee.getEmail()).toEqual(expect.any(String))
    expect(employee.getRole()).toEqual(expect.any("Employee"))
})