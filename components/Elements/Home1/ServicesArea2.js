import React, {useState} from 'react'
import Link from 'next/link'

export default function ServicesArea2() {const [open, setOpen] = useState("a1");
return (
    <section className="services__area grey-bg-3 pt-120 pb-90 p-relative">
        <div className="services__shape-2">
           <img className="services-2-circle" src="/img/icon/services/home-2/services-circle.png" alt=""/>
           <img className="services-2-circle-2" src="/img/icon/services/home-2/services-circle-2.png" alt=""/>
        </div>
        <div className="container">
           <div className="row align-items-end">
              <div className="col-xxl-7 col-lg-7 col-md-7">
                 <div className="section__title-wrapper mb-70 wow fadeInUp" data-wow-delay=".3s">
                    <span className="section__pre-title purple">Service</span>
                    <h2 className="section__title section__title-2">Our Feature Programs</h2>
                 </div>
              </div>
              <div className="col-xxl-5 col-lg-5 col-md-5">
                 <div className="services__more mb-70 text-sm-end">
                    <Link href="/services"><a className="w-btn w-btn-blue w-btn-6 w-btn-3">view all programs</a></Link>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                 <div className={`services__inner services__inner-2 hover__active mb-30 ${open==="a1" ? "active" : " "}`} onMouseOver={() => setOpen("a1")}>
                    <div className="services__item-2 transition-3 white-bg ">
                       <div className="services__icon-2">
                          <img src="/img/icon/services/home-2/services-1.png" alt=""/>
                       </div>
                       <div className="services__content-2">
                          <h3 className="services__title-2"><Link href="/services-details"><a>Scratch Junior</a></Link></h3>
                          <p>Program designed for young children to create interactive stories, games, and animations. Build strong fundamental of coding and problem solving skill in early age</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className={`services__inner services__inner-2 hover__active mb-30 ${open==="a2" ? "active" : " "}`} onMouseOver={() => setOpen("a2")}>
                    <div className="services__item-2 transition-3 white-bg ">
                       <div className="services__icon-2">
                          <img src="/img/icon/services/home-2/services-2.png" alt=""/>
                       </div>
                       <div className="services__content-2">
                          <h3 className="services__title-2"><Link href="/services-details"><a>Scratch</a></Link></h3>
                          <p>Designed to teach coding concepts to kids in a fun and interactive way. It allows children to create their own interactive stories, games, and animations, improving their creativity, problem-solving skills, and logical thinking in fun way.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className={`services__inner services__inner-2 hover__active mb-30 ${open==="a3" ? "active" : " "}`} onMouseOver={() => setOpen("a3")}>
                    <div className="services__item-2  transition-3 white-bg">
                       <div className="services__icon-2">
                          <img src="/img/icon/services/home-2/services-3.png" alt=""/>
                       </div>
                       <div className="services__content-2">
                          <h3 className="services__title-2"><Link href="/services-details"><a>Web/Mobile Development</a></Link></h3>
                          <p>Students get started on syntax programming and explore HTML, CSS and JavaScript and create their very own website</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
)
}
