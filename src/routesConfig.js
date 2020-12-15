import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './containers/auth/login/Login';
import Registration from './containers/auth/registration/Registration';
import Dashboard from './containers/dashboard/Dashboard';
import Patient from './containers/patient/Patient';
import PatientDetails from './containers/patientDetails/PatientDetails';
import AddPatient from './containers/addPatient/AddPatient';
// import GuardedRoute from './GuardedRoute';

const RoutesConfig = ({location}) => {
  // const [auth, setIsAuth] = useState(false);

  // if (props.isSignInUser && localStorage.getItem('token')) {
  //   setIsAuth(props.isSignInUser);
  // }

  return (
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Registration} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/patient" component={Patient} exact />
        <Route path="/patient-details/:id" component={PatientDetails} exact />
        <Route path="/add-patient" component={AddPatient} exact />
      </Switch>
    );
};

const mapStateToProps = state => {
  const { isSignInUser } = state.Login;
  return {
    isSignInUser
  }
};

export default connect(mapStateToProps, null)(RoutesConfig);
