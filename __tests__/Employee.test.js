const Employee = require('../lib/Employee')

test('Employee class should return an object when we create a "new" employee', () => {
    const testVal = new Employee();
    // const testVal = "cats";

    expect(typeof(testVal)).toBe('object')
})

test('When I pass a first parameter to the employee class, I expect that parameter to be assigned to the id property', () => {
    const testVal = new Employee("123");
    // const testVal = "cats";

    expect(testVal.id).toBe('123')
})

test('When I run my getRole() method I expect the role to be "Employee"', () => {
    const testVal = new Employee();
    // const testVal = "cats";

    expect(testVal.getRole()).toBe('Employee')
})