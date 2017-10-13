import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import theme from './assets/react-toolbox/theme';
import './assets/react-toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import App from './components/App';
import reducers from './reducers';
/* FOR TESTING */
import axios from 'axios';
window.axios = axios;
/* FOR TESTING */

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...[thunk]));

ReactDom.render(
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
          <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);