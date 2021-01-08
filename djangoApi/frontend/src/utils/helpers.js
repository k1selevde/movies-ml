
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


export const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}