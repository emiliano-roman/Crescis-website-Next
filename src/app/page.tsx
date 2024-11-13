// src/app/page.tsx
"use client"; // Indica que el archivo es un componente del lado del cliente

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';
import Image from "next/legacy/image";
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    // Registrar el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Inicializar Lenis para desplazamiento suave
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Animación de texto con SplitType y GSAP
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

    // Limpieza de los efectos al desmontar el componente
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className="animated-text">Welcome to Our Home Page</h1>
        
        {/* Imagen con lazy loading */}
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          sizes="(max-width: 600px) 50vw, 33vw"
        />

        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logo"
              width={20}
              height={20}
              sizes="(max-width: 600px) 50vw, 33vw"
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            sizes="(max-width: 600px) 50vw, 33vw"
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            sizes="(max-width: 600px) 50vw, 33vw"
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            sizes="(max-width: 600px) 50vw, 33vw"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
