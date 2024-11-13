'use client';  // Asegura que este código solo se ejecute en el cliente

import { useEffect } from 'react';

declare global {
  interface Window { isMobile: boolean; }  // Asegura que 'isMobile' esté tipado correctamente
}

export default function AnchorLinks() {
  useEffect(() => {
    // Selecciona todos los enlaces que comienzan con '#' y que no terminan con '#0' ni son enlaces vacíos
    const links = document.querySelectorAll('a[href^="#"]:not([href$="#"]):not([href$="#0"])');
    
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        const target = document.querySelector(link.getAttribute('href') || '') as HTMLElement;
        if (!target) return;

        let offset = 0;
        const header = document.getElementById('tt-header');
        
        // Si el header tiene la clase 'tt-header-fixed'
        if (header && header.classList.contains('tt-header-fixed')) {
          offset = header.offsetHeight;
        }
        
        // Si el enlace tiene un atributo 'data-offset', usar ese valor
        const dataOffset = (link as HTMLAnchorElement).dataset.offset;
        if (dataOffset !== undefined) {
          offset = parseInt(dataOffset, 10);
        }

        // Comprobar si no es un dispositivo móvil
        if (!window.isMobile) {  // No para dispositivos móviles
          if (document.body.classList.contains('tt-smooth-scroll')) {
            // Desplazamiento suave usando Scrollbar (si existe)
            const scrollContainer = document.getElementById('scroll-container');
            if (scrollContainer) {
              const scrollContent = scrollContainer.querySelector('.scroll-content') as HTMLElement;
              const topY = target.getBoundingClientRect().top - (scrollContent ? scrollContent.offsetTop : 0) - offset;
              const scrollbar = Scrollbar.init(scrollContainer);
              gsap.to(scrollbar, { duration: 1.5, scrollTo: { y: topY, autoKill: true }, ease: 'expo.inOut' });
            }
          } else {
            // Desplazamiento estándar
            const topY = target.getBoundingClientRect().top - document.body.offsetTop - offset;
            window.scrollTo({ top: topY, behavior: 'smooth' });
          }
        } else {
          // En dispositivos móviles se usa animación sencilla
          const topY = target.getBoundingClientRect().top - document.body.offsetTop - offset;
          window.scrollTo({ top: topY, behavior: 'smooth' });
        }

        // Prevenir el comportamiento por defecto del enlace
        event.preventDefault();
      });
    });

    // Cleanup: Eliminar los event listeners cuando el componente se desmonte
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', (event) => {
          event.preventDefault();
        });
      });
    };
  }, []);

  return null;  // Este componente no tiene salida visual directa
}
