import { useMemo } from "react";
import { estoqueMock } from "../../mocks/estoqueMock";
import { medicamentosMock } from "../../mocks/medicamentosMock";

interface PainelInventarioProps{
    hospitalId: number
}

export const PainelInventario = ({ hospitalId }: PainelInventarioProps) => {
    const inventarioProcessado = useMemo(() => {
        const estoqueDoHospital = estoqueMock.filter(e => e.id === hospitalId)

        return estoqueDoHospital.map(registro => {
            const medicamentoRelacional = medicamentosMock.find(m => m.id === registro.medicamentoId)

            return {
                codigoLote: registro.codigoLote,
                nomeMedicamento: medicamentoRelacional?.nome ?? "Dado corrompido",
                quantidade: registro.quantidade,
                dosagem: medicamentoRelacional?.dosagem,
                status: registro.quantidade < 20 ? 'CRÍTICO' : 'NORMAL'
            }
        })
    }, [hospitalId])

    return(
        <>
        <div className="painel-inventario-container">
            <h3>Inventário de #{hospitalId}</h3>
            <table className="tabela-dados-estrita">
                <thead>
                    <tr>
                        <th>Lote</th>
                        <th>Medicamento</th>
                        <th>Dosagem (mg/ml)</th>
                        <th>Qtd. Disponível</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {inventarioProcessado.map((item, index) => (
                        <tr key={index} className={item.status === 'CRÍTICO' ? 'linha-critica' : 'linha-normal'}>
                           <td>{item.codigoLote}</td> 
                           <td>{item.nomeMedicamento}</td>
                           <td>{item.dosagem}</td>
                           <td>{item.quantidade}</td>
                           <td className={`badge-status ${item.status.toLowerCase()}`}>
                           {item.status}
                           </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}