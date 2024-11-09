// src/components/About.jsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
       <h1 className={styles.title}>Sobre Nós</h1>
        <p className={styles.description}>
          Na nossa empresa de <strong>consultoria financeira</strong>, acreditamos que o poder da educação financeira
          pode transformar vidas. Nosso objetivo é fornecer as ferramentas e o conhecimento necessários para 
          capacitar você a tomar decisões financeiras informadas, conquistar independência e segurança financeira. 
          Somos uma equipe dedicada, que entende que cada cliente tem uma jornada única.
        </p>
        <p className={styles.description}>
          Oferecemos <strong>consultoria personalizada</strong> para criar um planejamento financeiro adaptado às suas 
          metas e ambições, sejam elas o alcance da liberdade financeira, a realização de grandes sonhos, ou a segurança para o futuro. 
          Aqui, você conta com um serviço diferenciado, focado em resultados e no cuidado com os detalhes.
        </p>
        <p className={styles.description}>
          Junte-se a nós e descubra como podemos ajudar a transformar suas finanças e abrir caminho para o sucesso!
        </p>
    </div>
  );
};

export default About;
