import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types'; // ES6
import './assets/css/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootStore from './store/rootStore';
import {Provider} from 'mobx-react';
import { configureDevtool } from 'mobx-react-devtools';


const rootStore = new RootStore()

configureDevtool({
    // Turn on logging changes button programmatically:
    logEnabled: true,
    // Turn off displaying components updates button programmatically:
  //   updatesEnabled: false,
    // Log only changes of type `reaction`
    // (only affects top-level messages in console, not inside groups)
  //   logFilter: change => change.type === 'reaction'
  });

ReactDOM.render(
                <Provider store={rootStore}>
                  <App />
                </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
