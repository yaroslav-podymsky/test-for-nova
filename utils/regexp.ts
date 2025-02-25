export const phonePattern = {
    value: /(?:\+|\d)[\d\-\(\) ]{9,}\d/g,
    message: 'Invalid phone number',
}

export const namePattern = {
    value: /^[^\d]*$/,
    message: 'Invalid name',
}
export const emailPattern = {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Invalid email',
}
