'use client';  // Agregar esta línea al principio del archivo

import { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import $ from 'jquery';

export default function ScrollingText() {
  useEffect(() => {
    $(".tt-scrolling-text").each(function (this: HTMLElement) {
      var $tt_stSpeed = $(this).data("scroll-speed");
      $(this).find(".tt-scrolling-text-inner").css({ 
        "animation-duration": $tt_stSpeed + "s",
      });
    });

  }, []); // Empty dependency array to run only once

  return null; // Or return an empty element if no visual content
}
