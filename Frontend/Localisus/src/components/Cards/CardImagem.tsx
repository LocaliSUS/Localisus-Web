import "./CardImagem.css"
import primeiraImagem from "../../imagens/casal_idosos_sorrindo.jpg"
import segundaImagem from "../../imagens/profissional_saude.jpeg"
import terceiraImagem from "../../imagens/menina-abraca-avo.jpg"
import quartaImagem from "../../imagens/upa_lajeado.jpg"
import { Hospital, User, HeartPlusIcon, Stethoscope } from "lucide-react"
import { ElementType } from "react"

export interface CardImagemProps {
    id: number
    titulo: string
    tituloPx?: number
    subtitulo: string
    subtituloPx?: number
    descricao: string
    descricaoPx?: number
    link: string
    icone?: ElementType
}


export function ComponenteCardImagem({
    titulo,
    tituloPx,
    subtitulo,
    subtituloPx,
    descricao,
    descricaoPx,
    link,
    icone: Icone
}: CardImagemProps) {
    return (
        <>
            <div className="imagem-fundo">
                <img src={link} />
            </div>
            <div id="icone-container-tela-sobre">
                    {Icone && <Icone size={55} />}
                </div>
            <div className="informacao">
                <div className="titulo-para-voce">
                    <h2 style={{
                        fontSize: `${tituloPx}`
                    }}>
                        {titulo}
                    </h2>
                </div>
                <div className="subtitulo-tipo-usuario">
                    <h1 style={{
                        fontSize: `${subtituloPx}`
                    }}>
                        {subtitulo}
                    </h1>
                </div>
                <div className="descricao-cardimagem">
                    <p style={{
                        fontSize: `${descricaoPx}`
                    }}>
                        {descricao}
                    </p>
                </div>
            </div>
        </>
    )
}


export const CardImagem = () => {
    const cards: CardImagemProps[] = [
        { id: 1, icone: User, titulo: 'Para você', subtitulo: 'Paciente', descricao: 'Encontre seus medicamentos de forma rápida para acompanhar seus tratamentos e manter o que mais importa em dia, a sua saúde.', link: primeiraImagem },
        { id: 2, icone: Stethoscope, titulo: 'Para você', subtitulo: 'Profissional de Saúde', descricao: 'Gerencie estoques, acompanhe dispensações e tenha um controle completo sobre a sua unidade de trabalho.', link: segundaImagem },
        { id: 3, icone: HeartPlusIcon, titulo: 'Para você', subtitulo: 'Cuidador ou Familiar', descricao: 'Acompanhe de perto o tratamento de quem você ama, tenha um controle de suas consultas, medicamentos e lembretes.', link: terceiraImagem },
        { id: 4, icone: Hospital, titulo: 'Para você', subtitulo: 'Gestor', descricao: 'Tenha dados estratégicos para tomar decisões que mudam vidas e melhorar a saúde da população.', link: quartaImagem }
    ]


    return (
        <>
            <div className="cards">
                {
                    cards.map(c =>
                        <div key={c.id} className="item-imagem">
                            <ComponenteCardImagem
                                id={0}
                                icone={c.icone}
                                titulo={c.titulo}
                                subtitulo={c.subtitulo}
                                descricao={c.descricao}
                                link={c.link}
                            />
                        </div>
                    )
                }
            </div>
        </>
    )
}