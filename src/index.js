import './index.scss';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './redux/redux-store'
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


let callSubscriber = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

callSubscriber();

store.subscribe(() => {
    callSubscriber();
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




