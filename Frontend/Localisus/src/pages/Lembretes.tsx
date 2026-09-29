import { useState } from "react";
import "./Lembretes.css"
import { ComponenteCard } from "../components/Cards/Cards";
import { NavLink } from "react-router-dom";

export const Lembretes = () => {
    const [medicamentosAtivos, setMedicamentosAtivos] = useState([
        { id: 1, titulo: "Dipirona 500mg", descricao: "Tomar 1 comprimido a cada 8 horas", cor: "#ff0000ff", isAtivo: true }
    ]);

    const handleToggle = async (id: number, statusAtual: boolean) => {
        setMedicamentosAtivos(prev =>
            prev.map(med => med.id === id ? { ...med, isAtivo: !statusAtual } : med)
        );

        try {

            // Exemplo: await api.put(`/medicamentos/${id}/status`, { ativo: !statusAtual });
            console.log(`Status do remédio ${id} alterado para: ${!statusAtual}`);
        } catch (error) {
            console.error("Erro ao alterar no backend", error);
            setMedicamentosAtivos(prev =>
                prev.map(med => med.id === id ? { ...med, isAtivo: statusAtual } : med)
            );
        }
    };

    return (
        <>
            <div className="conteudo-lembretes">
                <ul>
                    <li>Ativo</li>
                    <li>Pausados</li>
                    <li>Concluídos</li>
                </ul>
            </div>
            <div className="container-lembretes">
                <div className="lista-medicamentos-lembretes">
                    {medicamentosAtivos.map((cmA) => (
                        <article key={cmA.id} className="medicamentos-ativos">
                            <ComponenteCard titulo={cmA.titulo} descricao={cmA.descricao} cor={cmA.cor}>

                                <div className="container-toggle-customizado">
                                    <span className="status-label">{cmA.isAtivo ? "" : ""}</span>
                                    <label className="switch-personalizado">
                                        <input
                                            type="checkbox"
                                            checked={cmA.isAtivo}
                                            onChange={() => handleToggle(cmA.id, cmA.isAtivo)}
                                        />
                                        <span className="slider-redondo"></span>
                                    </label>
                                </div>

                            </ComponenteCard>
                        </article>
                    ))}
                </div>
            </div>

        </>
    )
}