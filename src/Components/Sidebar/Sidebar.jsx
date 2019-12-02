import React from 'react';
import style from './Sidebar.module.scss';
import Friends from './Friends/Friends'
import NavBar from "./Navbar/NavBar";

const Sidebar = (props) => {
    return (
        <div className={style.sidebar}>
            <NavBar/>
            <Friends />
        </div>
    )
};

export default Sidebar;
