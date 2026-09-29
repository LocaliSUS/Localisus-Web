import { NavLink } from "react-router-dom";
import "./NavbarLembretes.css"
import { ComponenteCard } from "../Cards/Cards";

export const NavbarLembretes = () => {
    const cardMedicamentosAtivo = [
        { titulo: "Dipirona 500mg", descricao: "Tomar 1 comprimido a cada 8 horas", cor: "#ff0000ff" }
    ]

    return (
        <>
            <div className="container-lembretes">
                <div className="lista-medicamentos-lembretes">
                    {
                        cardMedicamentosAtivo.map((cmA, index) =>
                            <article key={index} className="medicamentos-ativos">
                                <ComponenteCard titulo={cmA.titulo} descricao={cmA.descricao} cor={cmA.cor} />
                            </article>
                        )

                    }
                </div>
            </div>
        </>
    )
}