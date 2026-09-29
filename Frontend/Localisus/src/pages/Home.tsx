import "./Home.css"
import { Cards } from "../components/Cards/Cards"
import { HeroImagem } from "../components/HeroImagem"
import { Navbar } from "../components/Navbar/Navbar"

export const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="conteudo-home">
                    <section className="info-pagina">
                        <HeroImagem/>
                        <h2>Tudo o que você precisa, <span>em um só lugar</span></h2>
                        <Cards></Cards>
                    </section>
                </div>
            </main>
        </>
    )
}