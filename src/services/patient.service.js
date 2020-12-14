import axios from 'axios';

export const getPatient = () => {
    return axios.get('http://localhost:3000/patient-list');
}

export const getByIdPatient = (id) => {
    return axios.get(`http://localhost:3000/patient-list/${id}`);
}

export const addPatient = (params) => {
    return axios.post('http://localhost:3000/patient-list', params);
}

export const deletePatient = (id) => {
    return axios.delete(`http://localhost:3000/patient-list/${id}`);
}