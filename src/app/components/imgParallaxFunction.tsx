'use client';  // Agregar esta línea al principio del archivo

import { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import $ from 'jquery';

export default function AnimImageParallax() {
  useEffect(() => {
    $(".anim-image-parallax").each(function (this: HTMLElement) {
      // Add wrap <div>.
      $(this).wrap('<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>');

      // Add overflow hidden.
      $(".anim-image-parallax-wrap").css({ "overflow": "hidden" });

      const $animImageParallax = $(this);
      const $aipWrap = $animImageParallax.parents(".anim-image-parallax-wrap");
      const $aipInner = $aipWrap.find(".anim-image-parallax-inner");

      // Parallax effect
      gsap.to($animImageParallax, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: $aipWrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      });

      // Zoom in effect
      const tl_aipZoomIn = gsap.timeline({
        scrollTrigger: {
          trigger: $aipWrap,
          start: "top 90%",
          markers: false,
        },
      });

      tl_aipZoomIn.from($aipInner, {
        duration: 1.5,
        autoAlpha: 0,
        scale: 1.2,
        ease: Power2.easeOut,
        clearProps: "all",
      });
    });
  }, []); // Empty dependency array to run only once

  return null; // Or return an empty element if no visual content
}
