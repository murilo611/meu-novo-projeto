// src/components/Cidadania.jsx

import React, { useState } from 'react';
import styles from './EducaçãoFinanceira.module.css';

function Cidadania() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gestão Financeira</h1>
      <p className={styles.description}>
      Uma gestão financeira eficiente permite que uma empresa tenha clareza sobre 
    sua saúde financeira, planeje investimentos e se prepare para imprevistos. 
    Isso é especialmente importante em tempos de instabilidade econômica, em 
    que uma boa administração das finanças pode fazer a diferença entre a 
    continuidade e o fechamento do negócio. Com a gestão correta, é possível 
    identificar oportunidades de crescimento, otimizar recursos, controlar custos 
    e melhorar a rentabilidade.
      </p>
      <div className={styles.services}>
        <h2 className={styles.subtitle}>Plataformas para Começar a Investir</h2>
        <ul className={styles.serviceList}>
          <li>
            <a href="https://www.trading212.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Trading 212
            </a>
            <p className={styles.platformDescription}>
            Iniciar um planejamento financeiro com uma plataforma como a Trading212 
    pode oferecer vários benefícios para quem deseja aprender sobre investimentos 
    e organizar melhor suas finanças. A Trading212 é uma plataforma que permite 
    investir em ações, ETFs e até operar no mercado de câmbio com uma interface 
    intuitiva e acessível para iniciantes e investidores.
    Iniciar um planejamento financeiro com uma plataforma como a Trading212 
    pode oferecer vários benefícios para quem deseja aprender sobre investimentos 
    e organizar melhor suas finanças. A Trading212 é uma plataforma que permite 
    investir em ações, ETFs e até operar no mercado de câmbio com uma interface 
    intuitiva e acessível para iniciantes e investidor
            
            
             </p>
          </li>
          <li>
            <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Binance
            </a>
            <p className={styles.platformDescription}>
            Começar um planejamento financeiro com a Binance traz diversas vantagens, 
    especialmente para aqueles que querem explorar o mercado de criptomoedas. 
    A Binance é uma das maiores plataformas de troca de criptomoedas do mundo, 
    oferecendo uma ampla gama de ativos digitais e serviços que vão desde a 
    compra e venda de criptomoedas até opções de staking, empréstimos e outros 
    investimentos.
               </p>
          </li>
        </ul>
      </div>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2>Entre em Contato</h2>
        <input
          type="text"
          placeholder="Seu Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <textarea
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textarea}
          required
        ></textarea>
        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </div>
  );
}

export default Cidadania;
