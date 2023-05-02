import React from 'react'
import Link from 'next/link'

export default function AboutArea() {
    return (
        <>
        <section className="about__area pb-120 p-relative">
            <div className="about__shape">
               <img className="about-triangle" src="/img/icon/about/home-1/triangle.png" alt=""/>
               <img className="about-circle" src="/img/icon/about/home-1/circle.png" alt=""/>
               <img className="about-circle-2" src="/img/icon/about/home-1/circle-2.png" alt=""/>
               <img className="about-circle-3" src="/img/icon/about/home-1/circle-3.png" alt=""/>
            </div>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9">
                     <div className="about__wrapper mb-10">
                        <div className="section__title-wrapper mb-25">
                           <h2 className="section__title">Why Choose CodeKids for Your Child's Coding Education?</h2>
                           <h5>Expert Instructors, Real-World Projects, and a Fun Learning Environment</h5>
                        </div>
                        <ul>
                           <li>All instructors possess extensive industry experience and strong coding skill sets</li>
                           <li>Small Class Size - 6 to 8 students max per class</li>
                           <li>All curriculum is tailored to each age group's abilities and interests </li>
                        </ul>
                        <Link href="/contact"><a className="w-btn w-btn-3 w-btn-1">Get Started</a></Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 col-md-10 order-first order-lg-last">
                     <div className="about__thumb-wrapper p-relative ml-40 fix text-end">
                        <img src="/img/about/home-1/about-bg.png" alt=""/>
                        <div className="about__thumb p-absolute">
                           <img className="bounceInUp wow about-big" data-wow-delay=".3s" src="/img/about/home-1/about-1.png" alt=""/>
                           <img className="about-sm" src="/img/about/home-1/about-1-1.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="about__area pb-160 pt-80 p-relative">
         <div className="about__shape">
            <img className="about-plus" src="/img/icon/about/home-1/plus.png" alt=""/>
            <img className="about-triangle-2" src="/img/icon/about/home-1/triangle-2.png" alt=""/>
            <img className="about-circle-4" src="/img/icon/about/home-1/circle-4.png" alt=""/>
            <img className="about-circle-5" src="/img/icon/about/home-1/circle-5.png" alt=""/>
         </div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about__thumb-wrapper p-relative ml--30 fix mr-70">
                     <img src="/img/about/home-1/about-bg-2.png" alt=""/>
                     <div className="about__thumb about__thumb-2 p-absolute wow fadeInUp" data-wow-delay=".3s">
                        <img className="about-big bounceInUp wow" data-wow-delay=".5s" src="/img/about/home-1/about-2.png" alt=""/>
                        <img className="about-sm about-sm-2"  src="/img/about/home-1/about-2-1.png" alt=""/>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-9">
                  <div className="about__wrapper about__wrapper-2 ml-60 mb-30">
                     <div className="section__title-wrapper mb-25">
                        <h2 className="section__title">Coding Competitions and Events</h2>
                        <h5>Join the Fun and Showcase Your Child's Skills in Local and National Competitions</h5>
                     </div>
                     <ul>
                        <li>Provide a great opportunity to showcase their skills, compete against others, and learn from their peers</li>
                        <li>Open up doors to new opportunities and connections in the tech industry</li>
                        <li>Great addition to a kid's resume or college application, showcasing their dedication and skill in the field of coding</li>
                     </ul>
                     <Link href="/contact"><a className="w-btn w-btn-3 w-btn-1">Get Started</a></Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </>
    )
}
