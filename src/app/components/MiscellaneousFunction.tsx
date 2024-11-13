'use client';  // Asegura que este código solo se ejecute en el cliente

import { useEffect } from 'react';

export default function CustomInteractions() {
  useEffect(() => {
    // Deshabilitar clic en los botones con la clase "tt-btn-disabled"
    // Esto previene el clic en enlaces dentro de los botones deshabilitados
    const disabledButtons = document.querySelectorAll('.tt-btn-disabled a');
    disabledButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();  // Previene la acción por defecto (clic)
      });
    });

    // Forzar el scroll de la página hacia arriba al actualizar o recargar la página
    window.addEventListener('pagehide', () => {
      window.scrollTo(0, 0);  // Establece el desplazamiento de la página al principio
    });

    // Fix de hover para dispositivos iOS
    // Se dispara el evento "hover" en touchstart y touchend para emular el efecto de hover
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.dispatchEvent(new MouseEvent('hover'));  // Emula un "hover"
      });
      element.addEventListener('touchend', () => {
        element.dispatchEvent(new MouseEvent('hover'));  // Emula un "hover"
      });
    });

    // Cleanup: Eliminar los event listeners cuando el componente se desmonte
    return () => {
      disabledButtons.forEach(button => {
        button.removeEventListener('click', (e) => {
          e.preventDefault();
        });
      });

      allElements.forEach(element => {
        element.removeEventListener('touchstart', () => {
          element.dispatchEvent(new MouseEvent('hover'));
        });
        element.removeEventListener('touchend', () => {
          element.dispatchEvent(new MouseEvent('hover'));
        });
      });
    };
  }, []);

  return null;  // Este componente no tiene salida visual directa
}
