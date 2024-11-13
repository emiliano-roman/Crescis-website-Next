'use client';  // Asegura que este código solo se ejecute en el cliente
import { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis'; // Asegúrate de tener instalada la librería Lenis

// Registrar el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    // Inicializar Lenis para desplazamiento suave
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Función de animación que recibe un 'time' de tipo DOMHighResTimeStamp
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);  // El efecto solo se ejecuta una vez cuando el componente se monta

  return null;  // Este componente no tiene salida visual directa
}
