import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsPage: friendsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
