import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import FriendsPage from "./Components/FriendsPage/FriendsPage";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = props => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/profile' render={() =>
                    <ProfileContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/friendsPage' render={() =>
                    <FriendsPage/>}/>
            </div>
        </div>);
};

export default App;
