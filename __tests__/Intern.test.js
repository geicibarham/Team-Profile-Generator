const Intern = require('../lib/intern')

test("Tests if constructor function creates a school", () => {
    const school = "Unc";
    const employee = new Intern("Carlos", 23, "carlos@gmail.com", school);
    expect(employee.school).toBe(school);
  });
