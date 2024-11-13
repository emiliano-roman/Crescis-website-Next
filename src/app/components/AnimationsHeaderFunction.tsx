'use client';  // Asegúrate de que este código solo se ejecute en el cliente

import { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

// Registrar el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

export default function PageHeaderAnimations() {
  useEffect(() => {
    if ($("#page-header").hasClass("ph-content-parallax")) {
      const tlPhParallax = gsap.timeline({
        scrollTrigger: {
          trigger: "#page-header",
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          markers: false
        }
      });

      // Efecto de parallax para el título y subtítulo
      if ($(".ph-categories").length) {
        $(".ph-categories").wrapInner('<div class="ph-cat-parallax"></div>');
        tlPhParallax.to(".ph-cat-parallax", { y: -80 }, 0);
      }

      if ($(".ph-caption-title").length) {
        $(".ph-caption-title").wrapInner('<div class="ph-title-parallax"></div>');
        tlPhParallax.to(".ph-title-parallax", { y: -40 }, 0);
      }

      if ($(".ph-caption-subtitle").length) {
        $(".ph-caption-subtitle").wrapInner('<div class="ph-subt-parallax"></div>');
        tlPhParallax.to(".ph-subt-parallax", { y: -10 }, 0);
      }

      if ($(".ph-caption-title-ghost").length) {
        $(".ph-caption-title-ghost").wrapInner('<div class="ph-ghost-parallax"></div>');
        tlPhParallax.to(".ph-ghost-parallax", { y: 40 }, 0);
      }

      // Efecto de parallax en la imagen de fondo
      if ($(".ph-image").length) {
        if ($("#page-header").hasClass("ph-bg-image")) {
          tlPhParallax.to(".ph-image-inner", { yPercent: 30, scale: 1.05 }, 0);
        } else {
          tlPhParallax.to(".ph-image-inner", { yPercent: -20 }, 0);
        }
      }

      // Efecto de parallax en el listado de información del proyecto (solo si está presente en el header)
      if ($("#page-header .project-info-list").length) {
        $("#page-header .project-info-list > ul > li").wrapInner('<div class="ph-pil-parallax"></div>');

        if ($("#page-header:not('.ph-center')").hasClass("ph-inline")) {
          ScrollTrigger.matchMedia({
            "(min-width: 1025px)": () => {
              gsap.to(".ph-pil-parallax", {
                y: -140,
                stagger: 0.15,
                ease: "none",
                scrollTrigger: {
                  trigger: "#page-header",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  markers: false
                }
              });
            },

            "(max-width: 1024px)": () => {
              gsap.to("#page-header .project-info-list", {
                y: 20,
                ease: "none",
                scrollTrigger: {
                  trigger: "#page-header",
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  markers: false
                }
              });
            }
          });
        } else {
          gsap.to(".ph-pil-parallax", {
            y: 30,
            ease: "none",
            scrollTrigger: {
              trigger: "#page-header",
              start: "top top",
              end: "bottom top",
              scrub: true,
              markers: false
            }
          });
        }
      }

      // Efecto de desplazamiento del círculo de "scroll down"
      if ($(".scroll-down-circle").length) {
        gsap.to(".scroll-down-circle", {
          x: -100,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#page-header",
            start: "top top",
            end: "30% top",
            scrub: true,
            markers: false
          }
        });
      }

      // Efecto de desplazamiento para el "made-with-love"
      if ($(".mwl-inner").length) {
        gsap.to(".mwl-inner", {
          yPercent: 250,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: "#page-header",
            start: "top top",
            end: "40% top",
            scrub: true,
            markers: false
          }
        });
      }

      // Efecto de desplazamiento para el botón de compartir
      if ($(".ph-share").length) {
        $(".ph-share-trigger").wrap('<div class="ph-share-trigger-wrap"></div>');
        ScrollTrigger.matchMedia({
          "(min-width: 769px)": () => {
            gsap.to(".ph-share-trigger-wrap", {
              y: 50,
              autoAlpha: 0,
              ease: "none",
              scrollTrigger: {
                trigger: "#page-header",
                start: "top top",
                end: "30% top",
                scrub: true,
                markers: false
              }
            });
          }
        });
      }

      // Si la imagen de fondo del header es clara
      if ($("#page-header").is(".ph-bg-image.ph-bg-image-is-light")) {
        if ($("#tt-header").hasClass("tt-header-fixed")) {
          ScrollTrigger.create({
            trigger: "#page-header",
            start: "top bottom",
            end: "bottom 30px",
            scrub: true,
            markers: false,
            onLeave: () => phLeaveClass(),
            onEnter: () => phEnterClass(),
            onLeaveBack: () => phLeaveClass(),
            onEnterBack: () => phEnterClass(),
          });

          function phLeaveClass() {
            $("body").removeClass("ph-bg-image-light-on");
          }

          function phEnterClass() {
            $("body").addClass("ph-bg-image-light-on");
          }
        }
      }
    }
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  return null; // Este componente no tiene salida visual directa
}
