export const getIsAuth = (state) => {
    return state.auth.isAuth;
}

export const getLogin = (state) => {
    return state.auth.login;
}

export const getAuthorizedUserId = (state) => {
    return state.auth.userId;
}