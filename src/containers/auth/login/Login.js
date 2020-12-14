import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.scss';
import { userLoginAction } from './action/action';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            isAuthenticated: false
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
        
        const { username, password } = this.state;
        if (username && password) {
            this.state.isAuthenticated = true;
            this.props.userLoginAction(this.state);
            this.props.history.push('/dashboard');
        }
    }

    render() {
        const { username, password, submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3 container">
                    <h2 className="title">Login</h2>
                    <form className="from-align-center" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label className="lable">Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                                <div className="help-block">
                                    <p className="error-msg">Username is required</p>
                                </div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label className="lable">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">
                                    <p className="error-msg">Password is required</p>
                                </div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="signup">
                            <p>Don't have an account ?<Link to="/register" className="btn btn-link">Sign up</Link></p>
                        </div>
                    </form>
                </div>
        );
    }
};

const mapDispatchToProps = {
    userLoginAction,
}

export default connect(null, mapDispatchToProps)(Login);