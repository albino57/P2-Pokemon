import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import style from './styles.module.css';
import { ButtonLogin } from '../../components/ButtonLogin';
import { BackButton } from '../../components/BackButton';

export const Login = () => {
    //Captura os inputs do formulário
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // Inicializa a navegação
    const navigate = useNavigate(); 

    //Essa função que valida as credenciais no localStorage
    const handleLogin = (e) => {
        e.preventDefault(); // Evita que a página recarregue

        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Pega a lista de usuários salvos 
        const usuariosExistentes = JSON.parse(localStorage.getItem('usuarios')) || [];

        // Procura se já existe algum usuário com o mesmo e-mail e senha informados
        const usuarioValido = usuariosExistentes.find(
            (user) => user.email === email && user.senha === senha
        );

        if (usuarioValido) {
            alert(`Bem-vindo de volta, ${usuarioValido.nome || 'Treinador'}!`);
            
            // Aqui é opcional: Se quiser salvar quem está logado no momento
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));

            //Envia o usuário para a página Home (ou Pokédex)
            navigate('/home');
        } else {
            alert("E-mail ou senha incorretos!");
        }
    };

    return (
        <div className={style.background}>
               <BackButton/>
            <div className={style.loginContainer}>
                <img className={style.pokedexLogo} src="src\assets\logoPoke.png" alt="pokedex" />
                
                {/* Transformamos para aceitar o envio quando apertar Enter */}
                <form onSubmit={handleLogin} className={style.inputContainer}>

                    <label className={style.label} htmlFor="email">Email:</label>
                    <input 
                        className={style.input} 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                        placeholder="seu@email.com"
                    />

                    <label className={style.label} htmlFor="senha">Senha:</label>
                    <input 
                        className={style.input} 
                        type="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
                        placeholder="Digite sua senha"
                    />

                  <ButtonLogin/>

                </form>
            </div>
        </div>
    );
};