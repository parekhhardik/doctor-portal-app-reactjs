import { GET_PATIENT, GET_BY_ID_PATIENT, ADD_PATIENT, DELETE_PATIENT } from '../action/action';

const INITIAL_STATE = {
    patients: [],
    patientDetails: {}
}

const PatientReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PATIENT: {
            return {
                ...state,
                patients: action.payload.data,
            }
        }
        case GET_BY_ID_PATIENT: {
            return {
                ...state,
                patientDetails: action.payload.data,
            }
        }
        case ADD_PATIENT: {
            return {
                ...state,
                patients: action.payload,
            }
        }
        case DELETE_PATIENT: {
            return {
                ...state,
                patients: action.payload,
            }
        }
        default:
            return state;
    }
}

export default PatientReducer;
