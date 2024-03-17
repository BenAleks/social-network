import React from 'react';
import css from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={css.nav}>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>

        </div>
    );
};

export default Navbar;