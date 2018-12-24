import React, { Component } from 'react';
// import { Redirect } from "react-router-dom";
import bitcoinService from '../services/bitcoinService'
import userService from '../services/userService.js'

class HomePage extends Component {
    state = {
        name: 'gabriel gabriellos',
        coins: 100,
        rate: 0,
        user: {
            username: '',
            coins: null
        }
    }

    async componentDidMount() {
        const rate = Math.round(1 / await bitcoinService.getBitcoinRate())
        await this.setState({ rate })
        const user = userService.getUser()
        this.setState({ user })
    }

    render() {
        var { rate, user } = this.state
        return (
            <div className="home-page flex-column p-10">
                <span className="capitalize white-text">hello {user.username}!</span>
                <span className="capitalize white-text"><i className="fab fa-bitcoin"></i> BTC/USD: ${rate}</span>
                <span className="capitalize white-text">coins in wallet: {user.coins}</span>
                <span className="capitalize white-text">worth: <i className="fas fa-dollar-sign"></i>{Math.round(user.coins * rate)}</span>
            </div>
        )
    }
}

export default HomePage;