
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

export const getCurrentDayStr = (day) => {
    if (((day % 10) >= 2) && ((day % 10) <= 4) && (Math.round(day / 10) !== 1)) {
        return 'дня'
    } else if (day == 1) {
        return 'день'
    } else {
        return 'дней'
    }
}