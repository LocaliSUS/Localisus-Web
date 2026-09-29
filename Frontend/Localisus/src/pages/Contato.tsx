import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { Navbar } from "../components/Navbar/Navbar";
import "./Contato.css";

import italo from "../imagens/1.jpg";
import benjamin from "../imagens/2.jpg";
import lucas from "../imagens/3.jpg";
import ryan from "../imagens/4.jpg";
import luiz from "../imagens/5.jpg";

interface Membro {
  nome: string;
  cargo: string;
  setor: string;
  icone: string;
  foto: string;
  github: string;
  descricao: string;
  convite: string;
}

const equipe: Membro[] = [
  {
    nome: "Benjamin Dominique",
    cargo: "Fullstack",
    setor: "Clínico Geral",
    icone: "🩺",
    foto: benjamin,
    github: "https://github.com/bendominique",
    descricao:
      "Assim como um clínico geral cuida do paciente da cabeça aos pés, eu cuidei do projeto de ponta a ponta: do que o usuário vê até o que acontece nos bastidores.",
    convite:
      "Dá uma passada no meu GitHub, olha os projetos que eu tenho por lá. Que tal me conhecer um pouco mais?",
  },
  {
    nome: "Lucas Torino",
    cargo: "P.O",
    setor: "Diretor Clínico",
    icone: "📋",
    foto: lucas,
    github: "https://github.com/zerowavez",
    descricao:
      "Como um diretor clínico, defini as prioridades: o que precisava de atenção primeiro para o projeto realmente ajudar quem mais precisa.",
    convite:
      "Quer ver como eu penso e construo as coisas? Passa lá no meu GitHub e confere meus projetos!",
  },
  {
    nome: "Italo Vinicius",
    cargo: "QA",
    setor: "Laboratório de Exames",
    icone: "🔬",
    foto: italo,
    github: "https://github.com/italo15",
    descricao:
      "Igual a um laboratório, examinei cada detalhe do sistema para achar qualquer problema antes que ele virasse um sintoma para o usuário.",
    convite:
      "Investiguei o projeto todo, agora que tal investigar o meu GitHub? Dá uma olhada nos meus projetos!",
  },
  {
    nome: "Luiz Felipe",
    cargo: "Scrum Master",
    setor: "Enfermeiro-Chefe",
    icone: "💉",
    foto: luiz,
    github: "https://github.com/LuizSoares-sys",
    descricao:
      "Como o enfermeiro-chefe organiza o plantão, mantive a equipe alinhada, o ritmo das entregas em dia e os obstáculos fora do caminho.",
    convite:
      "Quer saber como eu cuido da organização dos projetos? Passa no meu GitHub e vem me conhecer melhor!",
  },
  {
    nome: "Ryan Cavalcante",
    cargo: "Frontend",
    setor: "Recepção",
    icone: "🏥",
    foto: ryan,
    github: "https://github.com/ryanzlxt",
    descricao:
      "A recepção é o primeiro contato de quem chega. Construí as telas para acolher, guiar e deixar tudo simples para o usuário.",
    convite:
      "Gostou da nossa recepção? Então dá uma passada no meu GitHub e veja os projetos que eu criei!",
  },
];

const INTERVALO_MS = 3000;

export const Contato = () => {
  const [destaque, setDestaque] = useState<number>(0);
  const [aberto, setAberto] = useState<number | null>(null);

  const palcoRef = useRef<HTMLDivElement | null>(null);
  const cartoesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Passa o destaque de um em um e recomeça do primeiro depois do último.
  // Fica parado enquanto um prontuário está aberto.
  useEffect(() => {
    if (aberto !== null) return;
    const id = window.setInterval(() => {
      setDestaque((atual) => (atual + 1) % equipe.length);
    }, INTERVALO_MS);
    return () => window.clearInterval(id);
  }, [aberto, destaque]);

  // Em telas pequenas (cards com rolagem horizontal), centraliza o card em destaque.
  useEffect(() => {
    const palco = palcoRef.current;
    const cartao = cartoesRef.current[destaque];
    if (!palco || !cartao) return;
    const esquerda =
      cartao.offsetLeft - (palco.clientWidth - cartao.clientWidth) / 2;
    palco.scrollTo({ left: esquerda, behavior: "smooth" });
  }, [destaque, aberto]);

  const aoClicarCartao = (index: number) => {
    setDestaque(index);
    setAberto((atual) => (atual === index ? null : index));
  };

  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      aoClicarCartao(index);
    }
  };

  return (
    <div className="pagina-contato">
      <header>
        <Navbar />
      </header>

      <h1 className="quem-somos">Quem nós somos?</h1>
      <p className="descricao-quem-somos">
        Jovens da unidade Lapa Tito da Instituição Senac, que se empenharam ao
        máximo na concretização desse projeto. Pensando nele em cada detalhe,
        pois sabemos que aqueles a quem amamos não podem ser deixados de lado
        quando mais precisam. E para isso estamos aqui, confira um pouco sobre
        como cada um atuou dentro do projeto.
      </p>
<section className="background-dica-carrossel">
      <p className="dica-carrossel">
        Conheça nossa equipe de plantão. <strong>Clique em um card</strong>{" "}
        para abrir o prontuário!
      </p>

</section>

      <section className="carrossel-equipe" aria-label="Equipe do projeto">
        <div className="palco" ref={palcoRef}>
          {equipe.map((membro, index) => {
            const emDestaque = destaque === index;
            const estaAberto = aberto === index;

            return (
              <div
                key={membro.nome}
                ref={(el) => {
                  cartoesRef.current[index] = el;
                }}
                className={`card-membro ${emDestaque ? "destaque" : ""} ${
                  estaAberto ? "ativo" : ""
                }`}
                role="button"
                tabIndex={0}
                aria-expanded={estaAberto}
                onClick={() => aoClicarCartao(index)}
                onKeyDown={(e) => aoTeclar(e, index)}
              >
                <img src={membro.foto} alt={membro.nome} draggable={false} />

                {/* Frente do card */}
                <div className="card-titulo">
                  <span className="selo-setor">
                    {membro.icone} {membro.setor}
                  </span>
                  <h3>{membro.nome}</h3>
                  <span className="cargo-frente">{membro.cargo}</span>
                  <span className="dica-clique">Abrir prontuário ➜</span>
                </div>

                {/* Prontuário (aparece ao clicar) */}
                <div className="card-overlay">
                  <span className="icone-grande">{membro.icone}</span>
                  <small className="prontuario">PRONTUÁRIO DA EQUIPE</small>
                  <h3>{membro.nome}</h3>

                  <div className="ficha">
                    <span>
                      <b>Setor:</b> {membro.setor}
                    </span>
                    <span>
                      <b>Função no projeto:</b> {membro.cargo}
                    </span>
                  </div>

                  <p>{membro.descricao}</p>
                  <p className="convite">💬 {membro.convite}</p>

                  <a
                    href={membro.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao-github"
                    tabIndex={estaAberto ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visitar meu GitHub ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pontos" role="tablist" aria-label="Escolher pessoa">
          {equipe.map((membro, index) => (
            <button
              key={membro.nome}
              type="button"
              role="tab"
              aria-selected={destaque === index}
              aria-label={membro.nome}
              className={`ponto ${destaque === index ? "ponto-ativo" : ""}`}
              onClick={() => {
                setAberto(null);
                setDestaque(index);
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};