const Engineer = require("../lib/Engineer")







test("Creating a new engineer", () => {
    const engineer = new Engineer ("Albert", 72, "Albert@gmail.com", "AlbertEngine");

    expect(engineer.name).toEqual(expect.any(String));
    explect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

})


test("Checks engineer details", () => {
    const engineer = new Engineer ("Albert", 72, "Albert@gmail.com", "AlbertEngine");
    
    expect(engineer.getName()).toEqual(expect.any(String))
    expect(engineer.getId()).toEqual(expect.any(Number))
    expect(engineer.getEmail()).toEqual(expect.any(String))
    expect(engineer.getGithub()).toEqual(expect.any(String))
    expect(engineer.getRole()).toEqual(expect.any("Engineer"))
})