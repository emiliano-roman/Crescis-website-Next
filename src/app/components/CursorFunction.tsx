'use client';  // Agregar esta línea al principio del archivo

import { useEffect } from 'react';
import { gsap, Power2 } from 'gsap';
import $ from 'jquery';

export default function ActivateCursor() {
  useEffect(() => {
    // Agregar la función de cursor mágico
    if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
      if ($(window).width() > 1024) {
        $(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');

        if ($("a.magnetic-item").length) {
          $("a.magnetic-item").addClass("not-hide-cursor");
        }

        let $mouse = { x: 0, y: 0 }; // Cursor position
        let $pos = { x: 0, y: 0 }; // Cursor position
        let $ratio = 0.15; // delay follow cursor
        let $active = false;
        let $ball = $("#ball");

        const $ballWidth = 34; // Ball default width
        const $ballHeight = 34; // Ball default height
        const $ballScale = 1; // Ball default scale
        const $ballOpacity = 0.5; // Ball default opacity
        const $ballBorderWidth = 2; // Ball default border width

        gsap.set($ball, {  // scale from middle and style ball
          xPercent: -50, 
          yPercent: -50, 
          width: $ballWidth,
          height: $ballHeight,
          borderWidth: $ballBorderWidth, 
          opacity: $ballOpacity 
        });

        document.addEventListener("mousemove", mouseMove);

        // Type annotation for the `mouseMove` function
        function mouseMove(e: MouseEvent): void {
          $mouse.x = e.clientX;
          $mouse.y = e.clientY;
        }

        gsap.ticker.add(updatePosition);

        // Type annotation for `updatePosition`
        function updatePosition(): void {
          if (!$active) {
            $pos.x += ($mouse.x - $pos.x) * $ratio;
            $pos.y += ($mouse.y - $pos.y) * $ratio;

            gsap.set($ball, { x: $pos.x, y: $pos.y });
          }
        }

        $(".magnetic-wrap").mousemove(function(this: HTMLElement, e: MouseEvent) {
          parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
          callParallax(e, this);
        });

        // Type annotation for the `callParallax` function
        function callParallax(e: MouseEvent, parent: HTMLElement): void {
          parallaxIt(e, parent, parent.querySelector(".magnetic-item") as HTMLElement, 25); // magnetic area = higher number is more attractive
        }

        // Type annotation for the `parallaxIt` function
        function parallaxIt(e: MouseEvent, parent: HTMLElement, target: HTMLElement, movement: number): void {
          const boundingRect = parent.getBoundingClientRect();
          const relX = e.clientX - boundingRect.left;
          const relY = e.clientY - boundingRect.top;

          gsap.to(target, {
            duration: 0.3, 
            x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
            y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
            ease: Power2.easeOut
          });
        }

        // Type annotation for the `parallaxCursor` function
        function parallaxCursor(e: MouseEvent, parent: HTMLElement, movement: number): void {
          const rect = parent.getBoundingClientRect();
          const relX = e.clientX - rect.left;
          const relY = e.clientY - rect.top;
          $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
          $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
          gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
        }

        // Magic cursor behavior
        // ======================

        // Magnetic item hover.
        $(".magnetic-wrap").on("mouseenter", function(this: HTMLElement) {
          gsap.to($ball, { duration: 0.3, scale: 2, borderWidth: 1, opacity: $ballOpacity });
          $active = true;
        }).on("mouseleave", function(this: HTMLElement) {
          gsap.to($ball, { duration: 0.3, scale: $ballScale, borderWidth: $ballBorderWidth, opacity: $ballOpacity });
          gsap.to(this.querySelector(".magnetic-item"), { duration: 0.3, x: 0, y: 0, clearProps: "all" });
          $active = false;
        });

        // Add/Remove classes on hover for special cases like links, buttons, etc.
        $(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a")
          .not(".magnetic-item")
          .on("mouseenter", function() {
            gsap.to($ball, {
              duration: 0.3, 
              borderWidth: 0, 
              opacity: 0.2, 
              backgroundColor: "#CCC", 
              width: "100px", 
              height: "100px", 
            });
            // Ensure magic cursor has the correct class when hovering over links
            $("#magic-cursor").addClass("cursor-alter-active");
          }).on("mouseleave", function() {
            gsap.to($ball, {
              duration: 0.3, 
              borderWidth: $ballBorderWidth, 
              opacity: $ballOpacity, 
              backgroundColor: "transparent", 
              width: $ballWidth, 
              height: $ballHeight, 
              clearProps: "backgroundColor" 
            });
            $("#magic-cursor").removeClass("cursor-alter-active");
          });

        // Add portfolio interaction behavior
        $(".portfolio-interactive-item").each(function(this: HTMLElement) {
          var $piItem = $(this);
          if ($(this).find(".pi-item-image").length) {
            $piItem.find(".pi-item-title-link").on("mouseenter mouseover", function(this: HTMLElement) {
              $("#magic-cursor").addClass("portfolio-interactive-hover-on");
              $piItem.find(".pi-item-image").appendTo($ball);
              gsap.to($ball, { duration: 0.3, width: "20vw", height: "20vw", opacity: 1 });
            }).on("mouseleave", function(this: HTMLElement) {
              $("#magic-cursor").removeClass("portfolio-interactive-hover-on");
              $ball.find(".pi-item-image").appendTo($piItem); 
              gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
            });
            $(this).find(".pi-item-title-link").addClass("not-hide-cursor");
          }
        });

        // Show/hide magic cursor on document enter/leave.
        $(document).on("mouseleave", function() {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
        }).on("mouseenter", function() {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
        });

        // Show as the mouse moves.
        $(document).mousemove(function() {
          gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
        });
      }
    }
  }, []); // Make sure to close the `useEffect` properly

  return null; // Or return an empty element if no visual content
}
