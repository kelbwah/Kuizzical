const objectCreationErrorGenerator = (errorCode, keyValue) => {
    const upperCaseKey = keyValue !== null || keyValue !== undefined ? (Object.keys(keyValue)[0][0].toUpperCase() + Object.keys(keyValue)[0].slice(1)) : null;

    switch (errorCode) {
        case 11000:
            return new Error(`${upperCaseKey} already in use`);
        case 11001:
            return new Error(`${upperCaseKey} already in use`);
        case 13:
            return new Error(`Unauthorized error. Check MongoDB creds and try again.`);
        case 14:
            return new Error(`Authentication failed. Check MongoDB creds and try again.`);
        default:
            return new Error(`Error while performing operation. Internal Server Error.`); 
    };
};

module.exports = objectCreationErrorGenerator;
