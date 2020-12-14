export const USER_LOGIN = "USER_LOGIN";

export const userLoginAction = (loginPayload) => {
    localStorage.setItem('token', loginPayload.isAuthenticated);
    return (dispatch) => {
        dispatch({
            type: USER_LOGIN,
            payload: loginPayload
        })
    }
}