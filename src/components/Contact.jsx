import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
    // Estados para armazenar os valores dos inputs
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // Estado para feedback de envio

    // Função para lidar com mudanças nos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Lógica de envio (simulação de sucesso)
        try {
            // Aqui, você pode adicionar lógica para enviar os dados, como uma requisição POST
            setStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Limpa os campos após o envio
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div id="contact" className={styles.contactContainer}>
            <h2 className={styles.title}>Entre em Contato</h2>
            {status === 'success' && <p className={styles.successMessage}>Mensagem enviada com sucesso!</p>}
            {status === 'error' && <p className={styles.errorMessage}>Ocorreu um erro, tente novamente.</p>}
            
            <form onSubmit={handleSubmit} className={styles.form}>
                {['name', 'email', 'message'].map((field) => (
                    <div key={field}>
                        <label htmlFor={field} className={styles.label}>
                            {field === 'name' ? 'Nome' : field === 'email' ? 'Email' : 'Mensagem'}
                        </label>
                        {field !== 'message' ? (
                            <input
                                id={field}
                                name={field}
                                type={field === 'email' ? 'email' : 'text'}
                                placeholder={`Seu ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                className={styles.input}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                            />
                        ) : (
                            <textarea
                                id={field}
                                name={field}
                                placeholder="Sua Mensagem"
                                className={styles.textarea}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                            ></textarea>
                        )}
                    </div>
                ))}
                <button type="submit" className={styles.button}>Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
