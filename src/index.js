import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state'
import App from './App';
import {BrowserRouter} from "react-router-dom";



 let callSubscriber = (state) => {
    
    ReactDOM.render(
    <BrowserRouter>
    <App
     state={state}
     addPost={store.addPost.bind(store)}
     addMessage={store.addMessage.bind(store)} 
      updateNewPostText={store.updateNewPostText.bind(store)} 
       updateNewMessageText={store.updateNewMessageText.bind(store)}
        />
    </BrowserRouter>, document.getElementById('root'));
}

callSubscriber(store.getState());

store.subscribe(callSubscriber);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




