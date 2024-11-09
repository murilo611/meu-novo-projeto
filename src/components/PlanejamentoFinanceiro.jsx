import React from 'react';
import styles from './PlanejamentoFinanceiro.module.css';

function PlanejamentoFinanceiro() {
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Planejamento Financeiro</h1>
        <p className={styles.subtitle}>Seu guia para um futuro financeiro seguro.</p>
        <div className={styles.sections}>
          <div className={styles.section}>
            <h2>Objetivos Financeiros</h2>
            <p>Defina suas metas financeiras para alcançar seus sonhos.</p>
          </div>
          <div className={styles.section}>
            <h2>Orçamento</h2>
            <p>Organize suas despesas e crie um plano de orçamento eficiente.</p>
          </div>
          <div className={styles.section}>
            <h2>Investimento</h2>
            <p>Explore opções de investimentos para crescer seu patrimônio.</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 Planejamento Financeiro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default PlanejamentoFinanceiro;
