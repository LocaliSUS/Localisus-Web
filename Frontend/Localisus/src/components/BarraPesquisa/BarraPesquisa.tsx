import { useState } from 'react'
import "./BarraPesquisa.css"
import { PartticulasFundo } from '../../pages/ParticulasFundo'

interface BarraPesquisaProps {
    onSearch: (termo: string) => void
}

export const BarraPesquisa = ({ onSearch }: BarraPesquisaProps) => {
    const [termo, setTermo] = useState('')

    const handleEnvio = (e: React.FormEvent) => {
        e.preventDefault()
        onSearch(termo)

    }

    return (
        <>
            <div className="barra-pesquisa">
                <form className="formulario-pesquisa" onSubmit={handleEnvio}>
                    <input
                        className='medicamentos-pesquisa'
                        type='text'
                        value={termo}
                        onChange={(e) => setTermo(e.target.value)}
                        placeholder='Ex: Dipirona, Insulina'
                    />
                    <button id="botao-pesquisar" type='submit'>Buscar</button>
                </form>
            </div>
        </>

    )
}