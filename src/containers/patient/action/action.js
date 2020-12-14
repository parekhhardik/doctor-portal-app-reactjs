import { getPatient, getByIdPatient, addPatient, deletePatient } from "../../../services/patient.service";

export const GET_PATIENT = "GET_PATIENT";
export const GET_BY_ID_PATIENT = "GET_BY_ID_PATIENT";
export const ADD_PATIENT = "ADD_PATIENT";
export const DELETE_PATIENT = "DELETE_PATIENT";

export const getPatientAction = () => {
    return (dispatch) => {
        getPatient()
            .then(response => {
                if (response) {
                    dispatch({
                        type: GET_PATIENT,
                        payload: response
                    })
                }
            })
            .catch(error => {
                alert("Error : Something went wrong in fetching GET API. Please try again later.");
            })
    }
};

export const getByIdPatientAction = (id) => {
    return (dispatch) => {
        getByIdPatient(id)
            .then(response => {
                if (response) {
                    dispatch({
                        type: GET_BY_ID_PATIENT,
                        payload: response
                    })
                }
            })
            .catch(error => {
                alert("Error : Something went wrong in fetching GET API. Please try again later.");
            })
    }
};

export const addPatientAction = (patientPayload) => {
    return (dispatch) => {
        addPatient(patientPayload)
            .then(response => {
                if (response) {
                    dispatch({
                        type: ADD_PATIENT,
                        payload: response
                    })
                }
            })
            .catch(error => {
                alert("Error : Something went wrong in fetching GET API. Please try again later.");
            })
    }
};

export const deletePatientAction = (id) => {
    return (dispatch) => {
        deletePatient(id)
            .then(response => {
                if (response) {
                    dispatch({
                        type: DELETE_PATIENT,
                        payload: response
                    })
                }
            })
            .catch(error => {
                alert("Error : Something went wrong in fetching GET API. Please try again later.");
            })
    }
};