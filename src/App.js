import React, { Component } from 'react';
import HomePage from './pages/HomePage' 
import ContactPage from './pages/ContactPage' 
import SignupPage from './pages/SignupPage' 
import ContactEditPage from './pages/ContactEditPage' 
import ContactDetails from './pages/ContactDetails' 
import StatisticPage from './pages/StatisticPage'
import userSevice from './services/userService.js'
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import { inject } from 'mobx-react';

import './assets/css/App.scss';

// @inject('store')

class App extends Component {
  state = {
    isSignedUp: true
  }
  
  
  async componentDidMount() {
    const isSignedUp = userSevice.isSignedUp()
    this.setState({isSignedUp})
  }
  handleSubmit() {
    this.setState({isSignedUp: true})
  }
  render() {
    return (
      <Router>
        <div className="App">
        {this.state.isSignedUp &&
          <header className="App-header flex space-between align-center">
            <NavLink exact to="/">
              <h3 className="capitalize pointer">mister bitcoin</h3>
            </NavLink>
            <NavLink to="/statistics">
            <i className="fas fa-chart-line"></i>
            </NavLink>
            <NavLink to="/contacts">
            <i className="fas fa-list-ul"></i>
            </NavLink>
          </header>
        }
            {!this.state.isSignedUp &&
              <Redirect to='/signup'/>
            }
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contacts" component={ContactPage} />
            <Route path="/statistics" component={StatisticPage} />
            <Route path="/signup" render={(props) => {
              return <SignupPage {...props} handleSubmit={this.handleSubmit.bind(this)}/>}} />
            <Route
            render={props => {
              return <ContactEditPage {...props} />;
            }}
            path="/contact/edit/:id"/>
            <Route
            render={props => {
              return <ContactDetails {...props} />;
            }}
            path="/contact/:id"/>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
