import {combineReducers} from 'redux';
import appReducer from "./reducers/appReducer";
import authReducer from "./reducers/authReducer";
import dialogsReducer from './reducers/dialogsReducer';
import friendsReducer from "./reducers/friendsReducer";
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import {reducer as formReducer} from 'redux-form';

export const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    friendsPage: friendsReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
