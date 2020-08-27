import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger'; 
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Local imports
import App from './App';
import rootReducer from './reducers';

  // Reducer store
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  )

ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register(); // changed for firefox 
// serviceWorker.unregister(); // default
