import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './style.scss'
import {getByIdPatientAction} from '../patient/action/action';

const PatientDetails = props => {

    useEffect(() => {
        props.getByIdPatientAction(props.match.params.id);
    }, []);
    
    return (
        <div className="col-md-6 col-md-offset-3 dataContainer">
            <h1 className="title">Patient Details</h1>

            <table className="patientTable" border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.patientDetails.id}</td>
                        <td>{props.patientDetails.name}</td>
                        <td>{props.patientDetails.email}</td>
                        <td>{props.patientDetails.mobile}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => {
    const {
        patientDetails,
    } = state.Patient;
    return {
        patientDetails,
    }
};

const mapDispatchToProps = {
    getByIdPatientAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails);