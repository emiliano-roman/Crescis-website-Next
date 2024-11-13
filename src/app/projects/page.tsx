// src/app/projects/page.tsx
import Link from 'next/link';
import Image from "next/legacy/image";  // Importa el componente Image de Next.js
import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Our Projects</h1>
      <p>Check out some of the amazing projects we've worked on:</p>
      <ul>
        <li>
          <Link href="/projects/project1">Project 1</Link>
          {/* Imagen optimizada con carga diferida y responsiva */}
          <Image 
            src="/images/docusign24.webp"  // Ruta de la imagen en la carpeta public
            alt="Project 1" 
            width={800} 
            height={600} 
            layout="responsive" 
            priority={true} 
          />
        </li>
        <li>
          <Link href="/projects/project2">Project 2</Link>
          {/* Imagen optimizada con carga diferida y responsiva */}
          <Image 
            src="/images/docusign24.webp"  // Ruta de la imagen en la carpeta public
            alt="Project 2" 
            width={800} 
            height={600} 
            layout="responsive" 
            priority={true} 
          />
        </li>
        <li>
        <h1 className="animated-text">Welcome to Our Home Page</h1>
          <Link href="/projects/project3">Project 3</Link>
          {/* Imagen optimizada con carga diferida y responsiva */}
          <Image 
            src="/images/docusign24.webp"  // Ruta de la imagen en la carpeta public
            alt="Project 3" 
            width={800} 
            height={600} 
            layout="responsive" 
            priority={true} 
          />
        </li>
      </ul>
    </div>
  );
};

export default Projects;
