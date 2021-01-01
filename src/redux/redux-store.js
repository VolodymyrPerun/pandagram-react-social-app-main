import {createStore, combineReducers} from 'redux';
import reducerProfile from './profile-reducer';
import reducerDialogs from './dialogs-reducer';
import reducerSidebar from './sidebar-reducer';


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagesPage: reducerDialogs,
    sidebar: reducerSidebar
});

let store = createStore(reducers);

export default store;
