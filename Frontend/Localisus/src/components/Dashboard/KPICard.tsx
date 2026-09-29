import React from "react";
import { KPIMetrica } from "../../interfaces/dashboard";

interface KPICardProps {
    metrica: KPIMetrica;
    icone: React.ReactNode;
}

export const KPICard = ({ metrica, icone }: KPICardProps) => {
    return (
        <div className="card-kpi-analitico">
            <div className="card-kpi-header">
                <div className="card-kpi-wrapper-icone">{icone}</div>
                <span className={`kpi-delta ${metrica.isPositivo ? 'positivo' : 'negativo'}`}>
                    {metrica.isPositivo ? '▲' : '▼'} {metrica.percentualDelta}
                </span>
            </div>
            <div className="card-kpi-body">
                <h3>{metrica.valor}</h3>
                <p>{metrica.titulo}</p>
            </div>
        </div>
    );
};