import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reduxMain/reducers';
import App from 'containers/App';
import './src/sass/index.sass';
import { BrowserRouter } from 'react-router-dom'; 
import { CookiesProvider } from 'react-cookie';

const composeEnhancers = window
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;


const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CookiesProvider>
        <App/>
      </CookiesProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
