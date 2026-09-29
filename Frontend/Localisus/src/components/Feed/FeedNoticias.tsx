import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './FeedNoticias.css';
import vacinaimagem from "../../imagens/vacina1.webp"
import aguaimagem from "../../imagens/drinkwater.webp"
import cattleyaimagem from "../../imagens/cataleia.png"
import sonoimagem from "../../imagens/sleep.avif"
import frutasimagem from "../../imagens/fruits.webp"
import caminharimagem from "../../imagens/caminhada.jpg"

interface Noticia {
  id: number;
  titulo: string;
  resumo: string;
  img: string;
}

export function FeedNoticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    setNoticias([
      
        { id: 1, titulo: "Cattleya", resumo: "Inovação, aplicação auxilia gestantes na prevenção de doenças.", img: cattleyaimagem },
        { id: 2, titulo: "Caminhada previne dores", resumo: "15 min por dia ajudam as articulações.", img: caminharimagem },
        { id: 3, titulo: "Beba mais água", resumo: "No frio, a sensação de sede diminui.", img: aguaimagem },
        { id: 4, titulo: "Vacina da Gripe", resumo: "Campanha começa na próxima semana.", img: vacinaimagem },
        { id: 5, titulo: "Coma Frutas", resumo: "Vitaminas essenciais para imunidade.", img: frutasimagem} ,
        { id: 6, titulo: "Durma Bem", resumo: "O sono repara o corpo e a mente.", img: sonoimagem },
      ]);
  }, []);

  return (
    <div className="container-feed">
      <h2 className="titulo-feed">Últimas notícias</h2>
      
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        
        effect={'coverflow'} // Ativa o efeito 3D
        grabCursor={true} // Muda o cursor para "mãozinha"
        centeredSlides={true} // OBRIGATÓRIO: Mantém o slide ativo no centro
        slidesPerView={'auto'} // OBRIGATÓRIO: Permite que o CSS defina a largura dos slides
        loop={false} // Opcional: faz o carrossel ser infinito
        
        coverflowEffect={{
          rotate: 5, // Ângulo de rotação dos slides laterais (0 para plano)
          stretch: 0, // Espaço entre os slides (pode ser negativo para sobrepor)
          depth: 10, // Profundidade (perspectiva 3D)
          modifier: 1, // Multiplicador do efeito
          slideShadows: true, // Sombras laterais para dar profundidade
        }}
        
        navigation={true}
        pagination={{ clickable: true }}
        className="swiper-idosos-coverflow"
      >
        {noticias.map((noticia) => (
          <SwiperSlide key={noticia.id}>
            <div className="conteudo-slide">
                <img src={noticia.img} alt={`Imagem sobre ${noticia.titulo}`} className="img-noticia" />
                <div className="texto-noticia">
                    <h3>{noticia.titulo}</h3>
                    <p>{noticia.resumo}</p>
                    <button className="btn-ler-mais">Ler Notícia</button>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}