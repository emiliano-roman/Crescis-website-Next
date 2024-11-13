// src/components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header id="tt-header" className="tt-header-fixed">
        <div className="tt-header-inner"> 

          <div className="tt-header-col">

            <div className="tt-logo"> 
              <a href="index.html">
                <img src="/images/logo-light.png" className="tt-logo-light magnetic-item" alt="Logo" /> 
                <img src="/images/logo-dark.png" className="tt-logo-dark magnetic-item" alt="Logo" /> 
              </a>
            </div>

          </div>

          <div className="tt-header-col">

            
            <div id="tt-ol-menu-toggle-btn-wrap">
              <div className="tt-ol-menu-toggle-btn-text">
                <span className="text-menu" data-hover="Open">Menu</span>
                <span className="text-close">Close</span>
              </div>
              <div className="tt-ol-menu-toggle-btn-holder">
                <a href="#" className="tt-ol-menu-toggle-btn magnetic-item"><span></span></a>
              </div>
            </div>

            <nav className="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
              <div className="tt-ol-menu-holder">
                <div className="tt-ol-menu-inner tt-wrap">
                  <div className="tt-ol-menu-content">

                    <ul className="tt-ol-menu-list">

                      <li className="tt-ol-submenu-wrap active">
                        <div className="tt-ol-submenu-trigger">
                          <Link href="/home">Home</Link>
                          <div className="tt-ol-submenu-caret-wrap">
                            <div className="tt-ol-submenu-caret magnetic-item"></div>
                          </div> 
                        </div> 
                        <div className="tt-ol-submenu">
                          <ul className="tt-ol-submenu-list">

                            <li className="active"><a href="landing-page-1.html">Landing Page v.1</a></li>
                            <li><a href="landing-page-2.html">Landing Page v.2</a></li>

                          </ul> 
                        </div>
                      </li>

                      <li className="tt-ol-submenu-wrap">
                        <div className="tt-ol-submenu-trigger">
                          <Link href="/home">Portfolio</Link>
                          <div className="tt-ol-submenu-caret-wrap">
                            <div className="tt-ol-submenu-caret magnetic-item"></div>
                          </div> 
                        </div>
                        <div className="tt-ol-submenu">
                          <ul className="tt-ol-submenu-list">

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Portfolio List</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div>
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="portfolio-list-classic.html">List Classic</a></li>
                                  <li><a href="portfolio-list-overlay.html">List Overlay</a></li>
                                  <li><a href="portfolio-list-compact.html">List Compact</a></li>
                                  
                                </ul> 
                              </div> 
                            </li>

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Portfolio Grid</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div> 
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="portfolio-grid-creative-1.html">Grid Creative v.1</a></li>
                                  <li><a href="portfolio-grid-creative-2.html">Grid Creative v.2</a></li>
                                  <li><a href="portfolio-grid-modern.html">Grid Modern</a></li>
                                  <li><a href="portfolio-grid-classic.html">Grid Classic</a></li>
                                  <li><a href="portfolio-grid-portrait-mode.html">Portrait Mode</a></li>
                                  <li><a href="portfolio-one-column.html">One Column</a></li>
                                  
                                </ul> 
                              </div>
                            </li>
                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Slider &amp; Carousel</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div> 
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="portfolio-fullscreen-slider.html">Fullscreen Slider</a></li>
                                  <li><a href="portfolio-carousel-overlay.html">Carousel Overlay</a></li>
                                  <li><a href="portfolio-carousel-center.html">Carousel Center</a></li>
                                  
                                </ul> 
                              </div>
                            </li>

                            <li><a href="portfolio-interactive.html">Interactive</a></li>
                            <li><a href="portfolio-interactive-compact.html">Interactive Compact</a></li>
                            <li><a href="elements-classic-menu.html">Classic Menu</a></li>

                          </ul> 
                        </div> 
                      </li>

                      <li className="tt-ol-submenu-wrap">
                        <div className="tt-ol-submenu-trigger">
                          <Link href="/home">About</Link>
                          <div className="tt-ol-submenu-caret-wrap">
                            <div className="tt-ol-submenu-caret magnetic-item"></div>
                          </div> 
                        </div>
                        <div className="tt-ol-submenu">
                          <ul className="tt-ol-submenu-list">

                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="about-me.html">About Me</a></li>

                          </ul> 
                        </div>
                      </li>

                      <li className="tt-ol-submenu-wrap">
                        <div className="tt-ol-submenu-trigger">
                          <Link href="/home">Blog</Link>
                          <div className="tt-ol-submenu-caret-wrap">
                            <div className="tt-ol-submenu-caret magnetic-item"></div>
                          </div> 
                        </div> 
                        <div className="tt-ol-submenu">
                          <ul className="tt-ol-submenu-list">

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Blog List</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div>
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="blog-interactive.html">Interactive List</a></li>
                                  <li><a href="blog-list.html">Compact List</a></li>
                                  <li><a href="blog-classic.html">Classic List</a></li>
                                  <li><a href="blog-classic-sidebar.html">Classic Sidebar</a></li>
                                </ul> 
                              </div> 
                            </li>

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Blog Post</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div> 
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="blog-post.html">Single Post</a></li>
                                  <li><a href="blog-post-classic-sidebar.html">Classic Sidebar</a></li>
                                  
                                </ul> 
                              </div>
                            </li>

                          </ul> 
                        </div> 
                      </li>

                      <li className="tt-ol-submenu-wrap">
                        <div className="tt-ol-submenu-trigger">
                          <Link href="/home">Shop</Link>
                          <div className="tt-ol-submenu-caret-wrap">
                            <div className="tt-ol-submenu-caret magnetic-item"></div>
                          </div> 
                        </div> 
                        <div className="tt-ol-submenu">
                          <ul className="tt-ol-submenu-list">

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Product Lists</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div> 
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="shop-list.html">Sliding Sidebar</a></li>
                                  <li><a href="shop-list-classic.html">Classic Sidebar</a></li>
                                  
                                </ul> 
                              </div>
                            </li>

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Product Pages</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div> 
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="shop-single.html">Product Page</a></li>
                                  <li><a href="shop-single-simple.html">Simple Product Page</a></li>
                                  
                                </ul> 
                              </div>
                            </li>

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">Product Ordering</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div> 
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="shop-cart.html">Shopping Cart</a></li>
                                  <li><a href="shop-checkout.html">Checkout</a></li>
                                  <li><a href="shop-order-details.html">Order Details</a></li>
                                  
                                </ul> 
                              </div>
                            </li>

                            <li className="tt-ol-submenu-wrap">
                              <div className="tt-ol-submenu-trigger">
                                <a href="#" className="tt-ol-submenu-link">More Pages</a>
                                <div className="tt-ol-submenu-caret-wrap">
                                  <div className="tt-ol-submenu-caret magnetic-item"></div>
                                </div> 
                              </div> 
                              <div className="tt-ol-submenu">
                                <ul className="tt-ol-submenu-list">

                                  <li><a href="shop-wishlist.html">Wishlist</a></li>
                                  <li><a href="shop-login.html">Login Page</a></li>
                                  <li><a href="shop-register.html">Register Account</a></li>
                                  <li><a href="shop-reset-password.html">Reset Password</a></li>
                                  
                                </ul> 
                              </div>
                            </li>

                          </ul> 
                        </div>
                      </li>
                      

                      <li><a href="contact.html">Contact</a></li>

                    </ul>


                  </div> 
                </div>
              </div>

              <div className="bg-noise"></div>

            </nav> 

          </div>
        </div>
    </header>
  );
};

// Estilos básicos en línea (puedes moverlos a un archivo CSS si prefieres)
const styles = {
};

export default Navbar;
