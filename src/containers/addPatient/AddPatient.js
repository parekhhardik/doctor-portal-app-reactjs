import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';
import { addPatientAction } from '../patient/action/action';

class AddPatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            mobile: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            ...this.state,
            submitted: true
        });
        const { name, email, mobile } = this.state;
        if (name && email && mobile) {
            this.props.addPatientAction(this.state);
            this.props.history.push('/patient');
        }
    }

    render() {
        const { name, email, mobile, submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3 container">
                    <h2 className="title">Add Patient</h2>
                    <form className="from-align-center" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                            <label className="lable">Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                            {submitted && !name &&
                                <div className="help-block">
                                    <p className="error-msg">Name is required</p>
                                </div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                            <label className="lable">Email</label>
                            <input type="text" className="form-control" name="email" value={email} onChange={this.handleChange} />
                            {submitted && !email &&
                                <div className="help-block">
                                    <p className="error-msg">Email is required</p>
                                </div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !mobile ? ' has-error' : '')}>
                            <label className="lable">Mobile</label>
                            <input type="text" className="form-control" name="mobile" value={mobile} onChange={this.handleChange} />
                            {submitted && !mobile &&
                                <div className="help-block">
                                    <p className="error-msg">Mobile is required</p>
                                </div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Add Patient</button>
                        </div>
                    </form>
                </div>
        );
    }
};

const mapDispatchToProps = {
    addPatientAction,
}

export default connect(null, mapDispatchToProps)(AddPatient);