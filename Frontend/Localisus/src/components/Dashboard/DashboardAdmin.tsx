import { useMemo } from "react";
import { KPICard } from "../../components/Dashboard/KPICard";
import { Activity, Pill, Package, Users } from "lucide-react";
import { KPIMetrica, RegistroRegiao } from "../../interfaces/dashboard";
import "./DashboardAdmin.css";

export const DashboardAdmin = () => {
    // useMemo encapsula os dados simulados garantindo estabilidade de referência na árvore do DOM
    const kpis = useMemo<KPIMetrica[]>(() => [
        { titulo: "Unidades ativas", valor: "248", percentualDelta: "+12%", isPositivo: true },
        { titulo: "Medicamentos disponíveis", valor: "18.742", percentualDelta: "+8.2%", isPositivo: true },
        { titulo: "Estoque total", valor: "2,4M", percentualDelta: "-3.4%", isPositivo: false },
        { titulo: "Usuários atendidos", valor: "56.782", percentualDelta: "+18.7%", isPositivo: true }
    ], []);

    const dadosRegioes = useMemo<RegistroRegiao[]>(() => [
        { regiao: "Centro", unidades: 48, disponibilidadeMedia: 92, estoqueTotal: 320450, medicamentosDisponiveis: 2856, usuariosAtendidos: 12450 },
        { regiao: "Zona Sul", unidades: 62, disponibilidadeMedia: 87, estoqueTotal: 615230, medicamentosDisponiveis: 3962, usuariosAtendidos: 15820 }
    ], []);

    return (
        <div className="dashboard-admin-chassis">
            {/* Seção Superior de KPIs: Alinhamento Unidimensional Horizontal */}
            <header className="dashboard-kpi-grid">
                <KPICard key="kpi-1" metrica={kpis[0]} icone={<Activity size={20} />} />
                <KPICard key="kpi-2" metrica={kpis[1]} icone={<Pill size={20} />} />
                <KPICard key="kpi-3" metrica={kpis[2]} icone={<Package size={20} />} />
                <KPICard key="kpi-4" metrica={kpis[3]} icone={<Users size={20} />} />
            </header>

            {/* Malha de Layout Principal: Configuração de Múltiplos Painéis */}
            <div className="dashboard-main-grid">
                <section className="painel-mapa-disponibilidade">
                    <h2>Mapa de disponibilidade</h2>
                    <div className="mapa-placeholder-grafico"></div>
                </section>
                
                <section className="painel-medicamentos-destaque">
                    <h2>Medicamentos em destaque</h2>
                    
                </section>
            </div>

            {/* Tabela de Fechamento de Escopo Analítico */}
            <section className="dashboard-table-section">
                <h2>Resumo por região</h2>
                <table className="dashboard-data-table">
                    <thead>
                        <tr>
                            <th>Região</th>
                            <th>Unidades</th>
                            <th>Disponibilidade Média</th>
                            <th>Estoque Total</th>
                            <th>Usuários Atendidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dadosRegioes.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.regiao}</td>
                                <td>{item.unidades}</td>
                                <td>{item.disponibilidadeMedia}%</td>
                                <td>{item.estoqueTotal.toLocaleString()} un.</td>
                                <td>{item.usuariosAtendidos.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};