import { combineReducers } from 'redux';

import LoginReducer from '../containers/auth/login/reducer/reducer';
import PatientReducer from '../containers/patient/reducer/reducer';

export default combineReducers({
    Login: LoginReducer,
    Patient: PatientReducer
})
