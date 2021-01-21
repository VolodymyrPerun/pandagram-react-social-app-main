export const required = value => {
    if (value) return undefined;

    return "Field is required";
};

export const maxLengthCreator = maxLength => value => {
    if (value && value.length <= maxLength) return undefined;

    return `Max length is ${maxLength} symbols`;
};

export const minLengthCreator = minLength => value => {
    if (value && value.length >= minLength) return undefined;

    return `Min length is ${minLength} symbols`;
};

export const email = value =>
    value && !/^(?!.*\.{2})(?!\.)[a-z0-9_.'-]*[a-z0-9_'-]@(?!_)(?:[a-z0-9_'-]+\.)+[a-z0-9_'-]{2,}$/.test(value)
        ? 'Invalid email address'
        : undefined;

export const password = value =>
    value && !/^(?=[A-Z])(?=.*?[0-9])(?=.*?[^\\w\\s]).+$/i.test(value)
        ? 'Passwords must at least 8 characters, include one capital letter, one number, and one special character'
        : undefined;
