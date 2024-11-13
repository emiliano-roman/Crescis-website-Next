'use client';  // Asegura que este código solo se ejecute en el cliente

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';  // Asegúrate de tener instalada la librería SplitType

// Registrar el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function SplitTypeTexts() {
  useEffect(() => {
    // Ejemplo de animación de texto con SplitType y GSAP
    const text = new SplitType('.animated-text', { types: 'lines,words,chars' });
    
    gsap.from(text.chars, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.animated-text',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });

  }, []);  // El efecto solo se ejecuta una vez cuando el componente se monta

  return null;  // Este componente no tiene salida visual directa
}
