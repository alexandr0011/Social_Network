export const requiredField = value => {
    if (value) return undefined;

    return "Field is required/ Поле обязательно к заполнению";
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength)
        return `Max length is ${maxLength} symbols/ Максимум ${maxLength} символов`;

    return undefined;
}