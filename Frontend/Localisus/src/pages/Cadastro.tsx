import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import personagemtelacadastrom from '../imagens/cadastro-personagem.svg'
import { TipoUsuario } from '../mocks/usuarioMock'
import "./Cadastro.css"
import InputCpf from '../components/CPF/MascararCpf'

export const Cadastro = () => {
    const [ nome, setNome] = useState('')
    const [ cpf, setCpf] = useState('')
    const [ email, setEmail] = useState('')
    const [ senha, setSenha] = useState('')
    const [ tipo, setTipo] = useState<TipoUsuario>(TipoUsuario.CIDADAO)
    const [ hospital, setHospital] = useState<number | null>(null)
    const [erro, setErro] = useState('')
    const { register } = useAuth()
    const navegar = useNavigate()

    const handleCadastro = async (evento: React.FormEvent) => {
        evento.preventDefault()
        setErro('')

        try {
            await register(nome, cpf, email, senha, tipo, hospital)
            navegar('/login')
        } catch (error: any) {
            setErro(error.message)
        }
    }

    const handleEscolhaUsuario = async (evento: React.ChangeEvent<HTMLSelectElement>) => {
        evento.preventDefault()
        const valorSelecionado = Number(evento.target.value)
        setTipo(valorSelecionado)
        
        if (valorSelecionado === TipoUsuario.CIDADAO) {
            setHospital(null)
        }
    }

    return(
        <>
        <div className="tela-cadastro">
            <div className="elementos-cadastro-esquerda">
          <h2> Crie sua conta</h2>
        <h3> Junte-se a milhares de pessoas que já utilizam o Localisus para cuidar da sua saúde com mais facilidade.</h3>
        <img src={personagemtelacadastrom}/>
        </div>
        <div className="card-cadastro">
        <form id="cadastro-formulario" onSubmit={handleCadastro}>
            <h3> Nome Completo </h3>
            <input
                type="text"
                value={nome}
                placeholder='Nome'
                onChange={(e) => setNome(e.target.value)}
                />
            <h3> Email </h3>
                <input
                type="email"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                />
            <h3> CPF </h3>
                <InputCpf></InputCpf>
            <h3> Senha </h3>
                <input
                type="password"
                value={senha}
                placeholder='Senha'
                onChange={(e) => setSenha(e.target.value)}
                />
                <h3> Confirmar Senha </h3>  <input
                type="password"
                value={senha}
                placeholder='Confirmar Senha'
                onChange={(e) => setSenha(e.target.value)}
                />
                {/* <div>
                    <select
                        id='escolha-usuario'
                        value={tipo}
                        onChange={handleEscolhaUsuario}
                        >
                        <option value="cidadao">Cidadão</option>
                        <option value="funcionario">Funcionário</option>
                    </select>
                    
                    {tipo === TipoUsuario.FUNCIONARIO && (
                    <input 
                        type="number"
                        value={hospital || ''}
                        placeholder='Id do Hospital'
                        onChange={(e) => setHospital(Number(e.target.value))}/>
                )}
                </div> */}
                <div className="botoes-cancelar-continuar">

                <button id='botao-cancelar'> Cancelar </button>
                <button id='botao-continuar'> Continuar </button>
                
                </div>
                <p> Ao continuar você concorda com os <span> Termos e Condições de Uso</span> e <span> Política de Privacidade</span>
                </p>
        </form>
        </div>
 
        </div>
       </>
    )
}