const Engineer = require('../lib/Engineer')

test('When I pass a first parameter to the employee class, I expect that parameter to be assigned to the id property', () => {
    const testVal = new Engineer("123");
    // const testVal = "cats";

    expect(testVal.id).toBe('123')
})