import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class Registration extends Component {
    constructor(props) {
        super(props);

        // reset login status
        // this.props.logout();

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
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
        const { name, email, password } = this.state;
        console.log(this.state);
        // if (username && password) {
        //     this.props.login(username, password);
        // }
    }

    render() {
        const { name, email, password, confirmPassword, submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3 container">
                    <h2 className="title">Registration</h2>
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
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label className="lable">Password</label>
                            <input type="text" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">
                                    <p className="error-msg">Password is required</p>
                                </div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !confirmPassword ? ' has-error' : '')}>
                            <label className="confirmLable">Confirm Password</label>
                            <input type="text" className="form-control" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} />
                            {submitted && !confirmPassword &&
                                <div className="help-block">
                                    <p className="error-msg">Confirm Password is required</p>
                                </div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Create</button>
                        </div>
                        <div className="signup">
                            <p>Already User ?<Link to="/" className="btn btn-link">Login</Link></p>
                        </div>
                    </form>
                </div>
        );
    }
};

export default Registration;