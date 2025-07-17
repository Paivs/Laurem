"use client"

import { useEffect, useState } from 'react';

export default function Quote() {
  const quotes = [
    {
      frase: "O Brasil não é um país atrasado. O Brasil é um país injusto. A tecnologia pode ser a grande equalizadora.",
      autor: "Rodrigo Baggio",
      origem: "Fundador do CDI – Comitê para Democratização da Informática",
    },
    {
      frase: "A tecnologia só faz sentido quando melhora a vida das pessoas. E no Brasil, isso significa resolver desigualdades.",
      autor: "Martha Gabriel",
      origem: "Escritora e especialista em transformação digital",
    },
    {
      frase: "O futuro não é algo que simplesmente acontece; é algo que construímos. E o Brasil precisa construir o seu com tecnologia e inovação.",
      autor: "André Miceli",
      origem: "Especialista em marketing digital e transformação tecnológica",
    },
    {
      frase: "O Brasil tem a criatividade e o talento para ser uma potência tecnológica. Falta apenas unir os pontos entre universidades, empresas e governo.",
      autor: "Ary Plonski",
      origem: "Diretor do Instituto de Estudos Avançados da USP",
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      // Inicia a animação de fade out
      setFadeState('fade-out');
      
      // Após o fade out, muda a citação e inicia o fade in
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => 
          prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
        );
        setFadeState('fade-in');
      }, 2500); // Tempo igual à duração da animação de fade

    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div>
      <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
        <blockquote className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center">
            <div className="text-primary mb-6 font-serif text-4xl">&ldquo;</div>
            <p className={`text-center text-xl sm:text-2xl md:text-3xl md:leading-normal transition-opacity duration-2500 ${fadeState}`}>
              {currentQuote.frase}
            </p>
            <div className={`mt-6 flex flex-col items-center md:mt-10 transition-opacity duration-2500 ${fadeState}`}>
              <p className="font-semibold">{currentQuote.autor}</p>
              <p className="text-muted-foreground">
                {currentQuote.origem}
              </p>
            </div>
          </div>
        </blockquote>
      </div>

      <style jsx global>{`
        .fade-in {
          opacity: 1;
        }
        .fade-out {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}