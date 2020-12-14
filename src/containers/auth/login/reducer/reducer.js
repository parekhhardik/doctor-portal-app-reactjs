import { USER_LOGIN } from '../action/action';

const INITIAL_STATE = {
    userLoginDetails: {},
    isSignInUser: false
};

const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                userLoginDetails: action.payload,
                isSignInUser: action.payload.isAuthenticated
            }
        }
        default:
            return state;
    }
};

export default LoginReducer;