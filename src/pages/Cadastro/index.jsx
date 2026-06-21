import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import { useNavigate } from 'react-router-dom';

export default function Cadastro({ onAlternarTela }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();

    const handleCadastro = (e) => {
        e.preventDefault();

        // Faz validações básicas
        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        // 1. Busca se o usuário já existentes no localStorage
        const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];

        // 2. FAz uma verificação se o e-mail já está cadastrado
        const emailJaExiste = usuariosExistentes.some(user => user.email === email);
        if (emailJaExiste) {
            alert('Este e-mail já está cadastrado!');
            return;
        }

        // 3. Cria o novo usuário e salvar no array
        const novoUsuario = { nome, email, senha };
        usuariosExistentes.push(novoUsuario);

        // 4. Salva cadastro e volta no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

        alert('Cadastro realizado com sucesso!');
        
        // Faz voltar para a tela de login após cadastrar
        if (onAlternarTela) onAlternarTela('login');
    };

    return (
        <div className={styles.container}>
            
            <div className={styles.card}>
                <div className={styles.voltarButtonContainer}>
                    <button className={styles.voltarButton} onClick={() => navigate('/home')}>
                       🠸 Voltar
                    </button>
                </div>
                
                <h2>Criar Conta Pokédex</h2>
                
                <form onSubmit={handleCadastro}>
                    <div className={styles.inputGroup}>
                        <label>Nome:</label>
                        <input 
                            type="text" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            placeholder="Seu nome"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>E-mail:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="seu@email.com"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Senha:</label>
                        <input 
                            type="password" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Confirmar Senha:</label>
                        <input 
                            type="password" 
                            value={confirmarSenha} 
                            onChange={(e) => setConfirmarSenha(e.target.value)} 
                            placeholder="Confirme sua senha"
                        />
                    </div>

                    <button type="submit" className={styles.btnCadastrar}>Cadastrar</button>
                </form>

                <p className={styles.textoAlternar}>
                    Já tem uma conta?{' '}
                    <span onClick={() => onAlternarTela('login')} className={styles.link}>
                        Faça Login
                    </span>
                </p>
            </div>
        </div>
    );
}