// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p style={styles.text}>© {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

// Estilos básicos en línea (puedes moverlos a un archivo CSS si prefieres)
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
