import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppWithAuth from './containers/AppWithAuth';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/reducer';

const store = createStore(reducer);

const RoutedApp = withRouter(props => <AppWithAuth {...props}/>);
ReactDOM.render(<Provider store={store}><BrowserRouter><RoutedApp /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
