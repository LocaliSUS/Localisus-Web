import { useEffect, useState } from "react"
import { medicamentosMock } from "../mocks/medicamentosMock"
import { useAuth } from "../contexts/AuthContext"
import { hospitaisMock } from "../mocks/hospitaisMocks"
import { estoqueMock } from "../mocks/estoqueMock"
import { TopbarUsuarios } from "../components/Topbar/TopbarUsuarios"
import "./Funcionario.css"
import { IceCream, LucideHospital, LucidePanelTopClose, PillIcon, UsersIcon } from "lucide-react"
import { ComponenteCard } from "../components/Cards/Cards"
import { usuarioMock } from "../mocks/usuarioMock"
import { DashboardFuncionario } from "../components/Dashboard/DashboardFuncionario"


export const Funcionario = () => {

    const { usuario } = useAuth()
    const [estoque, setEstoque] = useState<any[]>([])
    const cardsFuncionario = [
        { titulo: "Estoque total", descricao: "12,2M", descricaoPx: 40,icone: LucidePanelTopClose, cor: "#8c00ff" },
        { titulo: "Medicamentos", descricao: "12.219",descricaoPx: 40, icone: PillIcon, cor: "#25c900" },
        { titulo: "Unidades ativas", descricao: "128", descricaoPx: 40,icone: LucideHospital, cor: "#28b9e5" },
        { titulo: "Usuários atendidos", descricao: "56.982",descricaoPx: 40, icone: UsersIcon, cor: "#f29500" }
    ]

    useEffect(() => {
        //começa a renderização na nossa tela, caso no momento em que a tela renderize, o usuário não esteja logado, ou não possua um hospital id, nem vai
        //return vazio significa que a tela vai parrr de funcioar
        if (!usuario || !usuario.hospitalId) return

        //criando uma representação dos nossos itens do estoque
        const itemHospital = estoqueMock.filter(
            (i) => i.hospitalId === usuario.hospitalId
        )

        if (itemHospital.length === 0) {
            alert("O Estoque do hospital está vazio! Solicite uma demanda de novos medicamentos urgentemente.")
            return
        }

        const estoqueComNomes = itemHospital.map(item => {
            const remedio = medicamentosMock.find(m => m.id === item.medicamentoId)

            return {
                idEstoque: item.id,
                nome: remedio?.nome,
                descricao: remedio?.descricao,
                dosagem: remedio?.dosagem,
                quantidade: remedio?.quantidade
            }
        })
        setEstoque(estoqueComNomes)
    }, [usuario])

    const hospital = hospitaisMock.find(h => h.id === usuario?.hospitalId)

    return (
        <>
            <header>
                <TopbarUsuarios />
            </header>
            <main className="conteudo-pagina-funcionario">
                <section className="pos-cabecalho-funcionario">
                    <h1 id="saudacao-user">Olá, {usuario?.nome}!</h1>
                    <h4 id="sugestao-user">Aqui está um resumo do dia</h4>
                    <div className="info-hospital">
                        <button>
                            Filtrar
                        </button>
                        {
                            cardsFuncionario.map((cf, index) =>
                                <article key={index} className="cards-info-hospital"  style={{ "--cor-tema": cf.cor } as React.CSSProperties}>
                                    <ComponenteCard titulo={cf.titulo} descricao={cf.descricao}  descricaoPx = {cf.descricaoPx} icone={cf.icone} cor={cf.cor} />
                                </article>
                            )
                        }
                    </div>
                </section>
                <section className="elementos-funcionario">
                   <DashboardFuncionario />
                </section>
            </main>
        </>
    )
}