'use client';  // Asegura que este código solo se ejecute en el cliente

import { useEffect } from 'react';

declare global {
  interface Window { isMobile: boolean; }  // Asegura que 'isMobile' esté tipado correctamente
}

export default function ScrollToTop() {
  useEffect(() => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    if (scrollToTopButton) {
      scrollToTopButton.addEventListener('click', (event) => {
        // Comprobar si no es un dispositivo móvil
        if (!window.isMobile) {  // No para dispositivos móviles
          if (document.body.classList.contains('tt-smooth-scroll')) {
            // Desplazamiento suave usando Scrollbar (si existe)
            const scrollContainer = document.getElementById('scroll-container');
            if (scrollContainer) {
              const scrollbar = Scrollbar.init(scrollContainer);
              gsap.to(scrollbar, { 
                duration: 1.5, 
                scrollTo: { y: 0, autoKill: true }, 
                ease: 'expo.inOut' 
              });
            }
          } else {
            // Desplazamiento estándar
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          // En dispositivos móviles, desplazamiento suave sin Scrollbar
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Prevenir el comportamiento por defecto del enlace
        event.preventDefault();
      });
    }

    // Cleanup: Eliminar el event listener cuando el componente se desmonte
    return () => {
      if (scrollToTopButton) {
        scrollToTopButton.removeEventListener('click', (event) => {
          event.preventDefault();
        });
      }
    };
  }, []);

  return null;  // Este componente no tiene salida visual directa
}
