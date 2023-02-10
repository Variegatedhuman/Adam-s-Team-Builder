const Manager = require("../lib/Manager")







test("Creating a new manager", () => {
    const manager = new Manager ("Rufus", 2, "Rufus@gmail.com", 1);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number))

})


test("Checks manager details", () => {
    const manager = new Manager ("Rufus", 2, "Rufus@gmail.com", 1);
    
    expect(manager.getName()).toEqual(expect.any(String))
    expect(manager.getId()).toEqual(expect.any(Number))
    expect(manager.getEmail()).toEqual(expect.any(String))
    expect(manager.getOffice()).toEqual(expect.any(Number))
    expect(manager.getRole()).toEqual("Manager")
})