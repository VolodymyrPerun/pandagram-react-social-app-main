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
