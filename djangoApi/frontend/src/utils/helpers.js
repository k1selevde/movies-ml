
export const validateAuth = (password, username) => {
    if (!Boolean(password) && !Boolean(username)) {
        return 'Введите username и password'
    } else if (!Boolean(username)) {
        return 'Введите username'
    } else if (!Boolean(password)) {
        return 'Введите password'
    }
    return ''
}

