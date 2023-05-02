import React from 'react'
import Link from 'next/link'

export default function AboutArea3() {
    return (
        <section className="about__area pt-80 pb-30 grey-bg-5">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 order-last order-lg-first">
                     <div className="about__wrapper-3">
                        <div className="section__title-wrapper section__title-wrapper-3 mb-25 wow fadeInUp" data-wow-delay=".3s">
                           <span className="section__pre-title-img"><img src="/img/icon/title/about.png" alt=""/></span>
                           <h2 className="section__title section__title-3">About Us</h2>
                           <p>At CodeKids, there's nothing more satisfying than seeing our students' excitement as their ideas come to life. It's incredible to witness their boundless creativity and surpass even our own imaginations. We believe that nothing is impossible, and we urge you to pursue your passions with the same intensity as you do for breathing. So come and join us at CodeKids, where the possibilities are endless!
                           </p>
                        </div>
                        <div className="">
                           <ul>
                              <li>Pang Hao Jie</li>
                              <li>Co-founder of CodeKids</li>
                           </ul>

                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 col-md-8 col-sm-10">
                     <div className="about__thumb-4 p-relative text-end">
                        <img className="mr-95 about-phone wow fadeInRight" data-wow-delay=".7s" src="/img/about/home-3/about-phone.png" alt=""/>
                        <img className="about-4-circle" src="/img/about/home-3/about-circle.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
