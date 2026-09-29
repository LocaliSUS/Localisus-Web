import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { TipoUsuario } from '../mocks/usuarioMock'
import iconecadeado from '../imagens/lock-svgrepo-com.svg'
import iconehospital from '../imagens/hospital-svgrepo-com.svg'
import iconerelogio from '../imagens/time-svgrepo-com.svg'
import { authService } from '../services/authService'
import celularimagem from '../imagens/login-celular.png'
import mapaimagem from '../imagens/mapa1.png'
import "./Login.css"

export const Login = () => {
    const [cpfDigitado, setCpfDigitado] = useState('')
    const [senhaDigitada, setSenhaDigitada] = useState('')
    const [erro, setErro] = useState('')
    const { login } = useAuth()
    const navegar = useNavigate()

    const handleLogin = async (evento: React.FormEvent) => {
        evento.preventDefault()
        setErro('')

        try {
            const usuarioLogado = await login(cpfDigitado, senhaDigitada)

            if (usuarioLogado.tipoUsuario === TipoUsuario.ADMIN) {
                navegar("/admin")
            } else if (usuarioLogado.tipoUsuario === TipoUsuario.FUNCIONARIO) {
                navegar("/funcionario")
            } else {
                navegar("/home-usuario")
            }


        } catch (error: any) {
            setErro(error.message)
        }
    }
    return (
        <>
            <div className="conteudo-login">
                <div className="elementos-login-esquerda">
                    <div className="elementos-esquerda">
                        <h2>Tecnologia que aproxima você do que realmente importa: <span>sua saúde</span></h2>
                        <h3>Encontre medicamentos no SUS com facilidade e agilidade. Informação confiável, sempre que você precisar a Localisus está aqui para ajudar.</h3>
                        <div className="icones-elementos-esquerda">
                            <img src={iconehospital} />
                            <span className='descricao-icone-esquerda'>
                                Encontre postos de saúde e hospitais próximos a você.
                            </span>
                            <img src={iconecadeado} />
                            <span className='descricao-icone-esquerda'>
                                O Localisus trabalha com dados oficiais do SUS e 100% confiáveis.
                            </span>
                            <img src={iconerelogio} />
                            <span className='descricao-icone-esquerda'>
                                Informações atualizadas em tempo real.
                            </span>
                            <p>© Localisus 2026. Todos os direitos reservados</p>
                        </div>
                    </div>
                    <img id='mapa' src={mapaimagem} />
                    <img id='celular' src={celularimagem} />
                </div>
                <div className="login-container">
                    <h3>Faça login para continuar</h3>
                    <form id="login-formulario" onSubmit={handleLogin}>
                        <div className="inputs">
                            <p> CPF ou Email</p>
                            <input
                                type="text"
                                value={cpfDigitado}
                                onChange={(e) => setCpfDigitado(e.target.value)}
                            />
                            <p>Senha</p>
                            <input
                                type="password"
                                value={senhaDigitada}
                                onChange={(e) => setSenhaDigitada(e.target.value)}
                            />

                            <p> Esqueceu sua senha? </p>

                        </div>
                        <button id="entrar-login" type="submit">Entrar</button>
                        <div className="elementos-apos-botao-entrar">
                            <h4 id='continuar-com'> ou continuar com</h4>
                            <button id='login-qr-code' type="button">Login com QR Code</button>
                        </div>
                        {erro && <p>{erro}</p>}
                    </form>
                    <h4 id='possuir-conta'>ainda não possui uma conta?
                        <span>
                            <NavLink to="/cadastro">
                                Cadastre-se </NavLink>
                        </span>
                    </h4>
                </div>
            </div>
        </>
    )
}