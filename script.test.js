const passwordVerifier = require('./script.js');

test('Password has less than 9 chars.', () => {
    const tooLongString = 'wwwwwwwww'; // 8 chars
    const shortEnoughString = 'wwwwwwww'; //
    
    expect(passwordVerifier.hasRightLength(tooLongString)).toBe(false);
    expect(passwordVerifier.hasRightLength(shortEnoughString)).toBe(true);
})

test('Password is not Null.', () => {
    const nullTest = null;
    const notNull = 'Null'

    expect(passwordVerifier.isNotNull(nullTest)).toBe(false);
    expect(passwordVerifier.isNotNull(notNull)).toBe(true);
})

test('Password has at least one uppercase char.', () => {
    const noUpperCaseChars = 'test';
    const withUpperCaseChars = 'Test';

    expect(passwordVerifier.hasUpperCaseCharacter(noUpperCaseChars)).toBe(false);
    expect(passwordVerifier.hasUpperCaseCharacter(withUpperCaseChars)).toBe(true);
})

test('Password has at least one lowercase char.', () => {
    const noLowerCaseChars = 'TEST';
    const withLowerCaseChars = 'tEST';

    expect(passwordVerifier.hasLowerCaseCharacter(noLowerCaseChars)).toBe(false);
    expect(passwordVerifier.hasLowerCaseCharacter(withLowerCaseChars)).toBe(true);
})

test('Password has at least one digit.', () => {
    const noDigits = 'test';
    const withDigits = 'test1';

    expect(passwordVerifier.hasDigit(noDigits)).toBe(false);
    expect(passwordVerifier.hasDigit(withDigits)).toBe(true);
})


test('Password is accepted.', () => {

// REJECTED

    // null
    expect(passwordVerifier.verifyPassword(null)).toBe(false);

    // no lowercase
    expect(passwordVerifier.verifyPassword('TEST1')).toBe(false);

    // 2/5
    expect(passwordVerifier.verifyPassword('testtttttt')).toBe(false);
    expect(passwordVerifier.verifyPassword('TESTTTTTTT')).toBe(false);
    expect(passwordVerifier.verifyPassword('0123456789')).toBe(false);
    expect(passwordVerifier.verifyPassword('@@@@@')).toBe(false);

    // 1/5
    expect(passwordVerifier.verifyPassword('@@@@@@@@@@')).toBe(false);

// ACCEPTED 
    // 3/5
    expect(passwordVerifier.verifyPassword('test111111')).toBe(true);
    expect(passwordVerifier.verifyPassword('test')).toBe(true);
    expect(passwordVerifier.verifyPassword('Testtttttt')).toBe(true);

    // 4/5
    expect(passwordVerifier.verifyPassword('Test111111')).toBe(true);
    expect(passwordVerifier.verifyPassword('test1')).toBe(true);
    expect(passwordVerifier.verifyPassword('Test')).toBe(true);
    
    // 5/5
    expect(passwordVerifier.verifyPassword('Test1')).toBe(true);

})