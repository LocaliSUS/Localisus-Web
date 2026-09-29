    import { ElementType, ReactNode } from "react"
    import "./Card.css"
    import { HeartPulse, MapPin, Navigation, Search } from "lucide-react"

    export interface CardData {
        id: number,
        titulo: string,
        descricao: string,
        descricaoPx?: number,
        icone?: ElementType,
        cor: string,
        }

    interface CardProps {
        titulo: string
        descricao: string
        descricaoPx?: number
        icone?: ElementType
        cor: string
        children?: ReactNode
    }

    const elementosCard: CardData[] = [
        { id: 1, titulo: "Acesso rápido", descricao: "Encontre os seus medicamentos através do nome, comercial ou técnico.", icone: Search, cor: "#12d393" },
        { id: 2, titulo: "Localizar postos", descricao: "Visualize os postos de saúde próximos a você que possuem o medicamento que precisa.", icone: MapPin, cor: "#ef4444" },
        { id: 3, titulo: "Veja rotas", descricao: "Saiba qual é a rota mais rápida entre você e o seu medicamento com apenas um clique.", icone: Navigation, cor: "#3b82f6" },
        { id: 4, titulo: "Cuide da saúde", descricao: "Tenha mais controle, acompanhe e gerencie consultas e medicamentos. ", icone: HeartPulse, cor: "#ff1aff" }
    ]

    export function ComponenteCard({
        titulo,
        descricao,
        descricaoPx,
        icone: Icone,
        children
    }: CardProps) {
        return (
            <div>
                <div className="icone-container">
                    <div className="icone-fundo">
                        {Icone && <Icone size={32}/>}
                    </div>
                    <h1>{titulo}</h1>
                </div>
                <p style={{
                        fontSize: `${descricaoPx}px`,
                        overflow: 'hidden'
                    }}>
                   
                    {descricao}
                    </p>
            
                {children}
            </div>
        )
    }



    export const Cards = () => {
        return (
            <>
                <div className="cards">
                    {
                        elementosCard.map(e =>
                            <div key={e.id} className="elementos-cards" style={{ "--cor-tema": e.cor } as React.CSSProperties}>
                                <ComponenteCard
                                    titulo={e.titulo}
                                    descricao={e.descricao}
                                    descricaoPx={e.descricaoPx}
                                    icone={e.icone}
                                    cor={e.cor}
                                />
                            </div>
                        )
                    }
                </div>
            </>
        )
    }