// Utility functions
const isNotNull = password => {
    return password !== null;
};

const hasRightLength = password => {
    if (isNotNull(password)) {
        return password.length < 9;
    } else {
        return false;
    }
};

const hasUpperCaseCharacter = password => {
    return /[A-Z]/.test(password);
};

const hasLowerCaseCharacter = password => {
    return /[a-z]/.test(password);
};

const hasDigit = password => {
    return /[0-9]/.test(password);
};

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool === true);
    return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};