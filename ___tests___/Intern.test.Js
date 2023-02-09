const Intern = require("../lib/Intern")







test("Creating a new intern", () => {
    const intern = new Intern ("Mary", 12, "Mary@gmail.com", "Loyola");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})


test("Checks intern details", () => {
    const intern = new Intern ("Mary", 12, "Mary@gmail.com", "Loyola");
    
    expect(intern.getName()).toEqual(expect.any(String))
    expect(intern.getId()).toEqual(expect.any(Number))
    expect(intern.getEmail()).toEqual(expect.any(String))
    expect(intern.getschool()).toEqual(expect.any(String))
    expect(intern.getRole()).toEqual(expect.any("Intern"))
})