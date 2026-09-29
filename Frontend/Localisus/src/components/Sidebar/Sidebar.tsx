import { useState } from "react"
import "./Sidebar.css"
import { BarChart, Bell, Download, FileText, Hospital, House, Package, Pill, Settings, Shield, Users } from "lucide-react"

const elementosBarraLateral = [
    { id: 1, nome: "Início", icone: <House size={20} /> },
    { id: 2, nome: "Medicamentos", icone: <Pill size={20} /> },
    { id: 3, nome: "Estoque", icone: <Package size={20} /> },
    { id: 4, nome: "Unidades de Saúde", icone: <Hospital size={20} /> },
    { id: 5, nome: "Solicitações", icone: <FileText size={20} /> },
    { id: 6, nome: "Distribuições", icone: <Package size={20} /> }, // Troque pelo ícone ideal
    { id: 7, nome: "Alertas", icone: <Bell size={20} /> },
    { id: 8, nome: "Relatórios", icone: <FileText size={20} /> },
    { id: 9, nome: "Indicadores", icone: <BarChart size={20} /> },
    { id: 10, nome: "Exportações", icone: <Download size={20} /> },
    { id: 11, nome: "Usuários", icone: <Users size={20} /> },
    { id: 12, nome: "Permissões", icone: <Shield size={20} /> },
    { id: 13, nome: "Configurações", icone: <Settings size={20} /> }
]

export const Sidebar = () => {

    const [estaAberta, setEstaAberta] = useState(false)

    return (
        <>
            {estaAberta && (
                <div className="fundo-escuro"
                    onClick={() => setEstaAberta(false)}>
                </div>
            )}
            <aside className={`barra-lateral ${estaAberta ? 'aberta' : 'fechada'}`}>
                <button onClick={() => setEstaAberta(!estaAberta)} className="botao-toggle">
                    {estaAberta ? 'X' : '☰'}
                </button>
                <nav className="elementos-barra">
                    {elementosBarraLateral.map((item) => (
                        <div className="item-menu" key={item.id}>
                            <span className="icone">{item.icone}</span>
                            {estaAberta && <span className="nome">{item.nome}</span>}
                        </div>
                    ))}
                </nav>

            </aside>
        </>
    )
}