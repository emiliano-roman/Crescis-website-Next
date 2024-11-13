'use client';  // Agregar esta línea al principio del archivo
import { useEffect } from 'react';
import { gsap, Power2, Expo } from 'gsap';
import $ from 'jquery';

export default function Preloader() {
  useEffect(() => {
    // Detect Firefox
    const firefoxAgent = navigator.userAgent.indexOf("Firefox") > -1;
    if (firefoxAgent) {
      $("body").addClass("is-firefox");
    }

    // Detect Mobile Device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      $("body").addClass("is-mobile");
    }

    // Page Transitions
    if ($("body").hasClass("tt-transition")) {
      $(window).on("load", function () {
        setTimeout(HideLoad, 0);
      });

		// Transitions In (when "ptr-overlay" slides in).
		// =================
		function RevealLoad() {
			var tl_transitIn = gsap.timeline({ defaults: { duration: 1, ease: Expo.easeInOut }});
				 tl_transitIn.set("#page-transition", { autoAlpha: 1 });
				 tl_transitIn.to(".ptr-overlay", { scaleY: 1, transformOrigin: "center bottom" }, 0);
				 tl_transitIn.to("#content-wrap", { y: -80, autoAlpha: 0 }, 0);
				 tl_transitIn.to("#tt-header", { y: -20, autoAlpha: 0 }, 0);
				 tl_transitIn.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
		}

		// Transitions Out (when "ptr-overlay" slides out)
		// ================
		function HideLoad() {
			var tl_transitOut = gsap.timeline();
				 tl_transitOut.to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
				 tl_transitOut.to(".ptr-overlay", { duration: 1, scaleY: 0, transformOrigin: "center top", ease: Expo.easeInOut }, 0.3);

				 // tt-Header appear
				 tl_transitOut.from("#tt-header", { duration: 1, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps:"all" }, 0.6);

				 // Page header image appear
				 if ($(".ph-image").length) {
				 	if ($("#page-header").hasClass("ph-bg-image")) {
				 		tl_transitOut.from(".ph-image img, .ph-video", { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 0.8);
				 	} else {
				 		tl_transitOut.from(".ph-image", { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.2);
				 	}
				 }
				 
				 // Page header elements appear (elements with class "ph-appear")
				 if ($(".ph-appear").length) {
				 	tl_transitOut.from(".ph-appear", { duration: 1.5, y: 60, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.5);
				 }

				 // Page header elements appear (project info list)
				 if ($("#page-header .project-info-list").length) {
				 	if ($("#page-header").hasClass("ph-inline")) {
				 		tl_transitOut.from("#page-header .project-info-list > ul > li", { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.15, ease: Expo.easeOut, clearProps:"all" }, 2.2);
				 	} else {
				 		tl_transitOut.from("#page-header .project-info-list > ul", { duration: 1.5, y: 80, autoAlpha: 0, ease: Expo.easeOut, clearProps:"all" }, 2.2);
				 	}
				 }

				 // Portfolio slider elements appear (full heigth slider)
				 if ($(".tt-psc-elem").length) {
				 	$(".tt-psc-elem").wrap('<div class="tt-ps-appear"></div>');
				 	tl_transitOut.from(".tt-ps-appear", { duration: 1.5, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.4);
				 }

				 // Portfolio carousel elements appear
				 if ($(".tt-pci-title").length) {
				 	tl_transitOut.from(".tt-pci-title", { duration: 1.5, x: 80, autoAlpha: 0, skewX: "-10deg", ease: Expo.easeOut, clearProps:"all" }, 1.4);
				 }
				 if ($(".tt-pci-category").length) {
				 	tl_transitOut.from(".tt-pci-category", { duration: 1.5, x: 80, autoAlpha: 0, ease: Expo.easeOut, clearProps:"all" }, 1.5);
				 }
				 
				 // Page other elements appear
				 tl_transitOut.from("#page-content", { duration: 1.5, autoAlpha: 0, y: 80, ease: Expo.easeOut, clearProps:"all" }, 0.8);
				 tl_transitOut.set("#page-transition", { duration: 1, autoAlpha: 0, ease: Expo.easeInOut });
		}


      window.onpageshow = function (event) {
        if (event.persisted) {
          window.location.reload();
        }
      };

      $("a")
        .not('[target="_blank"]')
        .not('[href^="#"]')
        .not('[href^="mailto"]')
        .not('[href^="tel"]')
        .not(".lg-trigger")
        .not(".tt-btn-disabled a")
        .not(".no-transition")
        .on('click', function (e: JQuery.TriggeredEvent) { // Explicitly type the event parameter
          e.preventDefault();
          setTimeout(() => {
            window.location.href = e.currentTarget.href;
          }, 1000);
          RevealLoad();
        });
    }
  }, []); // Empty dependency array to run only once

  return null; // Or return an empty element if no visual content
}
