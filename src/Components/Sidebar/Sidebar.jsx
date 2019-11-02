import React from 'react';
import style from './Sidebar.module.css';
import Friends from './Friends/Friends'
import Navbar from "./Navbar/Navbar";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <Navbar/>
            <Friends />
        </div>
    )
};

export default Sidebar;
