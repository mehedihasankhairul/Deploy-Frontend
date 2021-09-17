/* eslint-disable no-undef */
export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr)
        return JSON.parse(userStr);
    else return null;
};

export const setUser = () => {
    return localStorage.getItem('token') || null;
};

export const setUserSession = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
};

export const clearUserSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

