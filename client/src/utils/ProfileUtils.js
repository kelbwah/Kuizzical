export const validateEmailAndPassword = (email, password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])(?!.*\s).{8,}$/;
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passOkay = passwordRegex.test(password) === true ? true : false;
    const emailOkay = emailRegex.test(email) === true ? true : false;

    if (passOkay === false && emailOkay === false) {
        throw new Error(
            'Email and password incorrect. Password must be at least 8 characters, have no spaces, include lower and uppercase letters, and at least one special character.'
        );
    } else if (passOkay === true && emailOkay === true) {
        return true;
    } else if (passOkay === false && emailOkay === true) {
        throw new Error(
            'Password must be at least 8 characters, have no spaces, include lower and uppercase letters, and at least one special character.'
        );
    } else if (passOkay === true && emailOkay === false) {
        throw new Error('Invalid email, try again.');
    }
};

export const validateOtherInputs = (inputs) => {
    Object.keys(inputs).forEach((key) => {
        const value = inputs[key];
        if (key === 'age') {
            if (Number(value) < 1 || value === null) {
                throw new Error(
                    'Invalid age. Must be greater than or equal to 1.'
                );
            }
        } else if (key === 'academicStatus') {
            if (value === null) {
                throw new Error('Fill in your current academic status');
            }
        } else if (
            key === 'firstName' ||
            key === 'lastName' ||
            key === 'username'
        ) {
            if (value.length <= 0) {
                throw new Error(`Some inputs haven't been filled in yet.`);
            }
        }
    });
};

export const validateLoginInput = (inputs) => {
    Object.keys(inputs).forEach((key) => {
        const value = inputs[key];
        if (value.length <= 0) {
            throw new Error({
                response: {
                    data: {
                        error: 'Some or all inputs are empty. Please check and try again.'
                    }
                }
            });
        }
    });
};

export const transformAndValidateBody = (e, authBody, isLoginOrRegister) => {
    e.preventDefault();

    if (isLoginOrRegister === 'Register') {
        try {
            validateEmailAndPassword(authBody.email, authBody.password);
            validateOtherInputs({
                age: authBody.age,
                firstName: authBody.firstName,
                lastName: authBody.lastName,
                username: authBody.username,
                academicStatus: authBody.academicStatus
            });

            const newBody = {
                ...authBody,
                age: Number(authBody.age)
            };

            return newBody;
        } catch (err) {
            const error = {
                response: {
                    data: {
                        error: `${err.message}`
                    }
                }
            };

            throw error;
        }
    } else if (isLoginOrRegister === 'Login') {
        try {
            validateLoginInput({
                username: authBody.username,
                password: authBody.password
            });

            return { username: authBody.username, password: authBody.password };
        } catch (err) {
            const error = {
                response: {
                    data: {
                        error: `${err.message}`
                    }
                }
            };

            throw error;
        }
    }
};

export const formDataTransform = (body) => {
    const formData = new FormData();
    Object.keys(body).map((key) => {
        formData.append(key, body[key]);
    });

    return formData;
};
