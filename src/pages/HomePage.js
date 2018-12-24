import React, { Component } from 'react';
// import { Redirect } from "react-router-dom";
// import bitcoinService from '../services/bitcoinService'
// import userService from '../services/userService.js'
import { observer, inject } from 'mobx-react';
// import { observable, computed } from 'mobx';

@inject('store')
@observer
class HomePage extends Component {
    store = this.props.store;

    async componentDidMount() {
        // this.store.bitcoinStore.getRate();
        this.store.bitcoinStore.watchRate()
        this.store.userStore.getUser()
    }

    render() {
        const { user } = this.store.userStore
        const { rate, goingUp } = this.store.bitcoinStore
        return (
            <div className="home-page flex-column p-10">
                <span className="capitalize white-text">hello {user.username}!</span>
                <span className="capitalize white-text">
                    <i className="fab fa-bitcoin"></i>
                    BTC/USD: ${(1/rate).toFixed(4)}
                        {(goingUp)? 
                            <i className="fas fa-arrow-circle-up green-text"></i>:
                            <i class="fas fa-arrow-circle-down red-text"></i>}
                </span>
                <span className="capitalize white-text">coins in wallet: {user.coins}</span>
                <span className="capitalize white-text">worth: <i className="fas fa-dollar-sign"></i>{Math.round(user.coins * 1/rate)}</span>
            </div>
        )
    }
}

export default HomePage;