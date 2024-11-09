// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link to="/">Home</Link></li>
                <li className={styles.navItem}><Link to="/contact">Contact</Link></li>
               
                <li className={styles.navItem}><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
