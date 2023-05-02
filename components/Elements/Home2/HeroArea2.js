import React from 'react'
import Link from 'next/link'

export default function HeroArea2() {
    return (
        <section className="hero__area hero__height-2 p-relative d-flex align-items-center">
            <div className="hero__shape-2">
               <img className="hero-2-dot" src="/img/icon/hero/home-2/hero-2-dot.png" alt=""/>
               <img className="hero-2-dot-2" src="/img/icon/hero/home-2/hero-2-dot-2.png" alt=""/>
               <img className="hero-2-flower" src="/img/icon/hero/home-2/hero-2-flower.png" alt=""/>
               <img className="hero-2-triangle" src="/img/icon/hero/home-2/hero-2-triangle.png" alt=""/>
               <img className="hero-2-triangle-2" src="/img/icon/hero/home-2/hero-2-triangle-2.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-5 col-xl-6 col-lg-8">
                     <div className="hero__content-2 mt-55">
                        <span className="hero__pre-title">Analytics</span>
                        <h2 className="hero__title-2">We build great Application.</h2>
                        <p>Stay on track as you plan, develop, and deliver products.</p>
                        <Link href="/about"><a className="w-btn w-btn-blue w-btn-7 w-btn-6">Discover Platform </a></Link>

                        <div className="hero__client mt-60">
                           <ul>
                              <li><img src="/img/client/home-2/client-2-1.png" alt=""/></li>
                              <li><img src="/img/client/home-2/client-2-2.png" alt=""/></li>
                              <li><img src="/img/client/home-2/client-2-3.png" alt=""/></li>
                              <li><img src="/img/client/home-2/client-2-4.png" alt=""/></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 offset-xxl-1 col-xl-6">
                     <div className="hero__thumb-2 mt-80">
                        <div className="hero__thumb-inner p-relative ml-90">
                           <img className="hero-2-thumb" src="/img/hero/home-2/hero-2-thumb.png" alt=""/>
                           <img className="hero-2-girl" src="/img/hero/home-2/hero-2-girl.png" alt=""/>
                           <img className="hero-2-thumb-sm" src="/img/hero/home-2/hero-2-thumb-sm.png" alt=""/>
                           <img className="hero-2-thumb-sm-2" src="/img/hero/home-2/hero-2-thumb-sm-2.png" alt=""/>
                           <img className="hero-2-thumb-sm-3" src="/img/hero/home-2/hero-2-thumb-sm-3.png" alt=""/>
                           <img className="hero-2-circle" src="/img/hero/home-2/hero-2-circle.png" alt=""/>
                           <img className="hero-2-circle-2" src="/img/hero/home-2/hero-2-circle-2.png" alt=""/>
                           <img className="hero-2-leaf" src="/img/hero/home-2/hero-2-leaf.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    )
}
