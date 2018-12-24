
import React, { Component } from 'react'
import userService from '../../services/userService'
import { Redirect } from "react-router-dom";
import './SignupPage.css'

class SignupPage extends Component {
    state= {
        username: '',
        isLoggedIn: false
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        userService.signup(this.state.username)
        this.setState({isLoggedIn: true})
        this.props.handleSubmit()
    }

    handleNameChange = async e => {
        const {
          target: { value }
        } = e;
        this.setState({ username: value });
    }

    render() {
        if (this.state.isLoggedIn === true) {
            return <Redirect to='/' />
        }
        return (
            <div className="signupPage">
                Hey please sign up
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={this.state.username}
                        onChange={this.handleNameChange}
                    />
                    <button type="submit">enter</button>
                </form>
            </div>
            )
    }
}

export default SignupPage
