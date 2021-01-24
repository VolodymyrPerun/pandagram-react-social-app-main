export const required = value => value ? undefined : "Field is required";


export const maxLengthCreator = maxLength => value =>
    value && value.length <= maxLength ? undefined : `Max length is ${maxLength} symbols`;


export const minLengthCreator = minLength => value =>
    value && value.length >= minLength ? undefined : `Min length is ${minLength} symbols`;


export const email = value =>
    value && !/^(?!.*\.{2})(?!\.)[a-z0-9_.'-]*[a-z0-9_'-]@(?!_)(?:[a-z0-9_'-]+\.)+[a-z0-9_'-]{2,}$/.test(value)
        ? 'Invalid email address'
        : undefined;

export const password = value =>
    value && (value)
        ? 'Passwords must at least 8 characters, include one capital letter, one number, and one special character'
        : undefined;
