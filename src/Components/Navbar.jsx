import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className="sidebar-item">
                <li className="sidebar-item-list"><a href='/Profile'>Profile</a></li>
                <li className="sidebar-item-list"><a href='/Messages'>Messages</a></li>
                <li className="sidebar-item-list"><a href='/News'>News</a></li>
                <li className="sidebar-item-list"><a href='/Music'>Music</a></li>
                <li className="sidebar-item-list"><a href='/Settings'>Settings</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;