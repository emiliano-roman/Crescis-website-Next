// src/app/layout.tsx

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import SmoothScroll from './components/SmoothScrollFunction';
import Preloader from './components/PreloaderFunction';
import ActivateCursor from './components/CursorFunction';
import OverlayMenu from './components/NavFunction';
import CustomInteractions from './components/MiscellaneousFunction'


import localFont from 'next/font/local';

import './css/helper.css';
import './css/globals.css';


const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} tt-transition tt-boxed tt-magic-cursor`}>

        <div id="page-transition">
          <div className="ptr-overlay"></div>
          <div className="ptr-preloader">
            <div className="ptr-prel-content">
              <img src="/images/logo-light.png" className="ptr-prel-image tt-logo-light" alt="Logo" />
            </div>
          </div>
        </div>
          
          <div id="magic-cursor"><div id="ball"></div></div>

          <main id="body-inner">
            <div id="scroll-container"> 
            <Navbar />
            {children}
            </div>
          </main>
          <Footer />
   
          <SmoothScroll />
          <Preloader />
          <ActivateCursor />
          <OverlayMenu />
          <CustomInteractions />
      </body>
    </html>
  );
}