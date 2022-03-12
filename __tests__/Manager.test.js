const Manager = require('../lib/Manager')

test("Tests if constructor function creates a school", () => {
    const officeNumber = 123;
    const employee = new Manager("Andres", 23, "andres@gmail.com", 123);
    expect(employee.officeNumber).toBe(officeNumber);
  });
