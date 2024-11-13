'use client';  // Asegurarse de que el código se ejecute solo en el cliente

import { useEffect } from 'react';
import { gsap, Power2, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

// Registrar el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function AnimationsScroll() {
  useEffect(() => {
    // Animación de Zoom In
    $(".anim-zoomin").each(function (this: HTMLElement) {
      $(this).wrap('<div class="anim-zoomin-wrap"></div>');
      $(".anim-zoomin-wrap").css({ "overflow": "hidden" });

      const $this = $(this);
      const $asiWrap = $this.parents(".anim-zoomin-wrap");

      let tl_ZoomIn = gsap.timeline({
        scrollTrigger: {
          trigger: $asiWrap,
          start: "top 90%",
          markers: false,
          onEnter: () => animZoomInRefresh(),
        }
      });

      tl_ZoomIn.from($this, { duration: 1.5, autoAlpha: 0, scale: 1.2, ease: Power2.easeOut, clearProps: "all" });

      // Refresca las posiciones de inicio y fin al entrar
      function animZoomInRefresh() {
        ScrollTrigger.refresh();
      }
    });

    // Animación de Fade In Up
    $(".anim-fadeinup").each(function (this: HTMLElement) {
      let tl_FadeInUp = gsap.timeline({
        scrollTrigger: {
          trigger: this,
          start: "top bottom",
          markers: false,
        }
      });

      tl_FadeInUp.from(this, { duration: 2.5, autoAlpha: 0, y: 100, ease: Expo.easeOut, clearProps: "all" }, "+=0.3");
    });

    // Animación de Skew In Up
    $(".anim-skewinup").each(function (this: HTMLElement) {
      let tl_SkewInUp = gsap.timeline({
        scrollTrigger: {
          trigger: this,
          start: "top bottom",
          markers: false,
        }
      });

      tl_SkewInUp.from(this, { duration: 2, skewY: 5, transformOrigin: "left top", autoAlpha: 0, y: 100, ease: Expo.easeOut, clearProps: "all" }, "+=0.3");
    });

    // Animación de Stretch In Up
    $(".anim-stretchinup").each(function (this: HTMLElement) {
      let tl_StretchInUp = gsap.timeline({
        scrollTrigger: {
          trigger: this,
          start: "top bottom",
          markers: false,
        }
      });

      tl_StretchInUp.from(this, { duration: 2, autoAlpha: 0, y: 100, scaleY: 1.4, transformOrigin: "top", ease: Expo.easeOut, clearProps: "all" }, "+=0.2");
    });
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  return null; // El componente no tiene salida visual directa
}
