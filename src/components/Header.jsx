// src/components/Header.jsx

import React from 'react';
import { FaPlane } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <FaPlane /> Octuplus
            </div>
            <nav className={styles.nav}>
                <a href="#home" className={styles.link}>Início</a>
                <a href="#about" className={styles.link}>Sobre</a>
                <a href="#services" className={styles.link}>Serviços</a>
                <a href="#contact" className={styles.link}>Contato</a>
            </nav>
        </header>
    );
}

export default Header;
