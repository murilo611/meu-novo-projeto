import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faChartLine, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    const [isHovered, setIsHovered] = useState(null);

    const handleMouseEnter = (index) => setIsHovered(index);
    const handleMouseLeave = () => setIsHovered(null);

    return (
        <div className={styles.homeContainer}>
            <h1 className={styles.title}>Octuplus Solutions</h1>
            <p className={styles.description}>
                Bem-vindo à Octuplus Solutions! Transformamos desafios financeiros em oportunidades de crescimento, proporcionando as melhores práticas para alcançar seus objetivos.
            </p>
            
            <div className={styles.services}>
                <div 
                    className={`${styles.serviceItem} ${isHovered === 0 ? styles.hovered : ''}`}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/educacao-financeira" className={styles.serviceLink}>
                        <FontAwesomeIcon icon={faWallet} className={styles.icon} />
                        <div className={styles.serviceTitle}>Gestão Financeira</div>
                    </Link>
                </div>
                <div 
                    className={`${styles.serviceItem} ${isHovered === 1 ? styles.hovered : ''}`}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/investimentos" className={styles.serviceLink}>
                        <FontAwesomeIcon icon={faChartLine} className={styles.icon} />
                        <div className={styles.serviceTitle}>Investimentos</div>
                    </Link>
                </div>
                <div 
                    className={`${styles.serviceItem} ${isHovered === 2 ? styles.hovered : ''}`}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Link to="/planejamento-financeiro" className={styles.serviceLink}>
                        <FontAwesomeIcon icon={faDollarSign} className={styles.icon} />
                        <div className={styles.serviceTitle}>Planejamento Financeiro</div>
                    </Link>
                </div>
            </div>

            <form className={styles.contactForm}>
                <h2>Entre em Contato</h2>
                <input type="text" placeholder="Seu Nome" className={styles.input} required />
                <input type="email" placeholder="Seu E-mail" className={styles.input} required />
                <input type="tel" placeholder="Telefone" className={styles.input} required />
                <textarea placeholder="Mensagem" className={styles.textarea} required></textarea>
                <button type="submit" className={styles.submitButton}>Enviar</button>
            </form>
        </div>
    );
}

export default Home;
