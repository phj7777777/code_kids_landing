import React from 'react'
import Link from 'next/link'

export default function ServicesArea3() {
    return (
        <section className="services__area pt-120 pb-110 p-relative">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1">
                     <div className="section__title-wrapper section__title-wrapper-3 text-center section-padding-3 mb-80 wow fadeInUp" data-wow-delay=".3s">
                        <span className="section__pre-title-img"><img src="/img/icon/title/services.png" alt=""/></span>
                        <h2 className="section__title section__title-3">Our Feature Programs</h2>
                        <p>Take Your Child's Coding Skills to the Next Level with Our Feature Programs. We have tailored our programs to cater to various age groups, ensuring there's a suitable one for you.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                     <div className="services__item-3 white-bg transition-3 mb-30 text-center">
                        <div className="services__icon-3">
                           <img src="/img/icon/services/home-3/services-1.png" alt=""/>
                        </div>
                        <div className="services__content-3">
                           <h3 className="services__title-3"><Link href="/services-details"><a>Scratch Junior</a></Link></h3>
                           <p>Program designed for young children to create interactive stories, games, and animations. Build strong fundamental of coding and problem solving skill in early age</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                     <div className="services__item-3 white-bg transition-3 mb-30 text-center">
                        <div className="services__icon-3">
                           <img src="/img/icon/services/home-3/services-2.png" alt=""/>
                        </div>
                        <div className="services__content-3">
                           <h3 className="services__title-3"><Link href="/services-details"><a>Scratch</a></Link></h3>
                           <p>Designed to teach coding concepts to kids in a fun and interactive way. It allows children to create their own interactive stories, games, and animations, improving their creativity, problem-solving skills, and logical thinking in fun way.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                     <div className="services__item-3 white-bg transition-3 mb-30 text-center">
                        <div className="services__icon-3">
                           <img src="/img/icon/services/home-3/services-3.png" alt=""/>
                        </div>
                        <div className="services__content-3">
                           <h3 className="services__title-3"><Link href="/services-details"><a>Web/Mobile Development</a></Link></h3>
                           <p>Students get started on syntax programming and explore HTML, CSS and JavaScript and create their very own website </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".9s">
                     <div className="services__more text-center mt-30">
                        <Link href="/services"><a className="w-btn w-btn-purple w-btn-purple-2 w-btn-3 w-btn-6">View all programs</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
