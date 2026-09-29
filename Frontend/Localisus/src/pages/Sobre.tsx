import { CardImagem } from "../components/Cards/CardImagem";
import { Navbar } from "../components/Navbar/Navbar";
import "./Sobre.css"
export const Sobre = () => {

    return (
        <>

            <header>
                <Navbar /> 
            </header>
            <main>
                <section className="oq-localisus">
                    <h4>O QUE É O LOCALISUS? </h4>
                    <h2>Tecnologia que aproxima você do que realmente importa: <span>sua saúde</span>.</h2>
                    <p> O Localisus é uma plataforma inteligente que conecta você aos medicamentos, postos de saúdes, farmácias e informações para que você cuide melhor de si e de quem ama.</p>
                </section>
                <section className="resposta-localisus">
                    <h4> O QUE O LOCALISUS ME PERMITE FAZER? </h4>
                     <CardImagem></CardImagem>
                </section>
            </main>

        </>
    )
}