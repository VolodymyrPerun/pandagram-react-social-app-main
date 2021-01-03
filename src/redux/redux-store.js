import {createStore, combineReducers} from 'redux';
import reducerProfile from './profile-reducer';
import reducerDialogs from './dialogs-reducer';
import reducerSidebar from './sidebar-reducer';
import reducerFriends from "./friends-reducer";


let reducers = combineReducers({
    profilePage: reducerProfile,
    messagesPage: reducerDialogs,
    friendsPage: reducerFriends,
    sidebar: reducerSidebar
});

let store = createStore(reducers);

export default store;
