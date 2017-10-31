import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import theme from './assets/react-toolbox/theme';
import './assets/react-toolbox/theme.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore();

ReactDom.render(
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
          <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);