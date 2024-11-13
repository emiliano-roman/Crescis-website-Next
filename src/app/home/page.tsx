import Link from 'next/link';
import Image from "next/legacy/image";  // Importa el componente Image de Next.js
import React from 'react';

import PageHeaderAnimations from '../components/AnimationsHeaderFunction';
import AnimationsScroll from '../components/AnimationsFunction';
import ScrollingText from '../components/ScrollingTextFunction';

const Home = () => {
  return (

        <div id="content-wrap">

          <div id="page-header" className="ph-full ph-cap-sm ph-image-cropped ph-image-cover-3 ph-content-parallax">
						<div className="page-header-inner tt-wrap">
							<div className="ph-image">
								<div className="ph-image-inner">
									<img src="/images/page-header/ph-6.jpg" alt="Image" />
								</div>
							</div>
							
							<div className="ph-caption max-width-1000">
								<h1 className="ph-caption-title ph-appear font-normal"><em>Hello stranger!</em><br/> We are a creative design agency based in Melbourne. We bring your <em><u>ideas</u></em> to life.</h1>
								<div className="ph-caption-title-ghost ph-appear">Hello!</div>
							</div> 
						</div> 

						
            <a href="#page-content" className="scroll-down-circle" data-offset="30">
              <div className="sdc-inner ph-appear">
                <div className="sdc-icon"><i className="fas fa-chevron-down"></i></div>
                <svg viewBox="0 0 500 500">
                  <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle"></path>
                  </defs>
                  <text dy="30">
                    <textPath xlinkHref="#textcircle">Scroll down - Scroll down -</textPath>
                  </text>
                </svg>
              </div> 
            </a>

						
						
						<div className="made-with-love ph-appear">
							<div className="mwl-inner">
								<div className="mwl-text">Made with</div>
								<div className="mwl-icon"><i className="far fa-heart"></i></div>
							</div>
						</div>

          </div>{/* page-header */}
      

          <div id="page-content">


          <div className="tt-section no-padding-bottom">
                <div className="tt-section-inner">

                  
                  <div className="tt-heading tt-heading-lg tt-heading-center margin-bottom-10-p anim-fadeinup">
                    <h3 className="tt-heading-subtitle text-gray">Latest Projects</h3>
                    <h2 className="tt-heading-title">Works</h2>
                    <div className="tt-btn tt-btn-link margin-top-20">
                      <a href="portfolio-grid-creative-1.html" data-hover="See All Works">See All Works</a>
                    </div>
                  </div>
                  


                  
                  <div id="portfolio-grid" className="pgi-cap-inside pgi-hover">

                    
                    <div className="tt-grid ttgr-layout-creative-2 ttgr-not-cropped ttgr-gap-4">

                      
                      <div className="tt-grid-items-wrap isotope-items-wrap">

                        
                        <div className="tt-grid-item isotope-item people">
                          <div className="ttgr-item-inner">

                            
                            <div className="portfolio-grid-item">
                              <a href="single-project-1.html" className="pgi-image-wrap" data-cursor="View<br>Project">
                                
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <Image 
                                        src="/images/portfolio/small/portfolio-1.jpg" 
                                        alt="Project 1" 
                                        width={800} 
                                        height={600} 
                                        layout="responsive" 
                                        priority={true} 
                                      />
                                    </figure> 
                                  </div> 
                                </div> 
                              </a> 

                              <div className="pgi-caption">
                                <div className="pgi-caption-inner">
                                  <h2 className="pgi-title">Victorian Girls</h2>
                                  <div className="pgi-categories-wrap">
                                    <div className="pgi-category">People</div>
                                    Varia
                                  </div> 
                                </div> 
                              </div> 
                            </div>
                            

                          </div> 
                        </div>
                        

                        
                        <div className="tt-grid-item isotope-item creative">
                          <div className="ttgr-item-inner">

                            
                            <div className="portfolio-grid-item anim-parallax">
                              <a href="single-project-2.html" className="pgi-image-wrap" data-cursor="View<br>Project">
                                
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <Image 
                                        src="/images/portfolio/small/portfolio-3.jpg" 
                                        alt="Project 1" 
                                        width={800} 
                                        height={600} 
                                        layout="responsive" 
                                        priority={true} 
                                      />
                                    </figure> 
                                  </div> 
                                </div> 
                              </a> 

                              <div className="pgi-caption">
                                <div className="pgi-caption-inner">
                                  <h2 className="pgi-title">Smithy</h2>
                                  <div className="pgi-categories-wrap">
                                    <div className="pgi-category">Creative</div>
                                    Varia
                                  </div> 
                                </div> 
                              </div> 
                            </div>
                            

                          </div> 
                        </div>
                        

                        
                        <div className="tt-grid-item isotope-item people">
                          <div className="ttgr-item-inner">

                            
                            <div className="portfolio-grid-item">
                              <a href="single-project-3.html" className="pgi-image-wrap" data-cursor="View<br>Project">
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-video-wrap ttgr-height">
                                      <video className="pgi-video" loop muted preload="metadata" poster="./vids/fashion-week.jpg">
                                        <source src="./vids/fashion-week.mp4" type="video/mp4" />
                                        <source src="./vids/fashion-week.webm" type="video/webm" />
                                      </video>
                                    </figure> 
                                  </div> 
                                </div> 
                              </a> 

                              <div className="pgi-caption">
                                <div className="pgi-caption-inner">
                                  <h2 className="pgi-title">Washion Week</h2>
                                  <div className="pgi-categories-wrap">
                                    <div className="pgi-category">People</div>
                                    Varia
                                  </div> 
                                </div> 
                              </div> 
                            </div>
                            

                          </div> 
                        </div>
                        

                        
                        <div className="tt-grid-item isotope-item nature">
                          <div className="ttgr-item-inner">

                            
                            <div className="portfolio-grid-item">
                              <a href="single-project-4.html" className="pgi-image-wrap" data-cursor="View<br>Project">
                                
                                <div className="pgi-image-holder cover-opacity-2">
                                  <div className="pgi-image-inner anim-zoomin">
                                    <figure className="pgi-image ttgr-height">
                                      <Image 
                                        src="/images/portfolio/small/portfolio-2.jpg" 
                                        alt="Project 1" 
                                        width={800} 
                                        height={600} 
                                        layout="responsive" 
                                        priority={true} 
                                      />
                                    </figure> 
                                  </div> 
                                </div> 
                              </a> 

                              <div className="pgi-caption">
                                <div className="pgi-caption-inner">
                                  <h2 className="pgi-title">Mystery Forest</h2>
                                  <div className="pgi-categories-wrap">
                                    <div className="pgi-category">Nature</div>
                                    Varia
                                  </div> 
                                </div> 
                              </div> 
                            </div>
                            

                          </div> 
                        </div>
                        











                      </div>
                      

                    </div>
                    

                  </div>
                  

                </div> 
          </div>






          <div className="tt-section padding-top-xlg-150 padding-bottom-xlg-150">
							<div className="tt-section-inner">

								
								<div className="tt-scrolling-text scr-text-stroke font-italic" data-scroll-speed="15">
									<div className="tt-scrolling-text-inner text-dark-3" data-text="Let's create something awesome together! -">
										Let's create something awesome together! -
									</div> 
								</div>
								

								
								<div className="tt-scrolling-text scr-text-stroke scr-text-reverse font-italic" data-scroll-speed="15">
									<div className="tt-scrolling-text-inner text-dark-3" data-text="Let's create something awesome together! -">
										Let's create something awesome together! -
									</div> 
								</div>
								

							</div> 
						</div>





          </div>{/* page-content */}

          <AnimationsScroll />
          <PageHeaderAnimations />
          <ScrollingText />
        </div>

        

  );
};

export default Home;
