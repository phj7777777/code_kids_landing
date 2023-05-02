import React from 'react'
import Slider from 'react-slick';

export default function TestimonialArea() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
    ]
  };
   return (
      <section className="testimonial__area pt-150 pb-70 p-relative overflow-y-visible">
         <div className="circle-animation testimonial">
            <span></span>
         </div>
         <div className="testimonial__shape">
            <img className="testimonial-circle-1" src="/img/icon/testimonial/home-1/circle-1.png" alt="" />
            <img className="testimonial-circle-2" src="/img/icon/testimonial/home-1/circle-2.png" alt="" />
         </div>
         <div className="container">
            <div className="row">
               <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                  <div className="section__title-wrapper text-center section-padding mb-65 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="section__title">What People Say About Us.</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-xxl-12">
               <Slider {...settings} className="testimonial__slider owl-carousel wow fadeInUp" data-wow-delay=".5s">
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-5.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’My son has been attending CodeKids for over a year now and I couldn't be happier with his progress. The instructors are patient, knowledgeable and truly care about their students' success. My son has not only learned how to code, but has also gained valuable problem-solving and critical thinking skills that will benefit him in the future’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Mr Lim</h3>
                            <span>Happy dad of Jason</span><br/>
                            <span>(Completed scratchJr program)</span>
                        </div>
                    </div>
                    <div className="testimonial__item white-bg transition-3 mb-110">
                        <div className="testimonial__thumb mb-25">
                            <img src="/img/testimonial/home-1/testi-6.png" alt="" />
                        </div>
                        <div className="testimonial__text mb-25">
                            <p>‘’As a parent, I was skeptical at first about the importance of coding for my child. However, after enrolling my daughter in CodeKids, I was pleasantly surprised at how engaged and excited she became about technology and programming. The curriculum is well-designed and the instructors are passionate and enthusiastic about teaching. I highly recommend CodeKids to any parent looking to give their child a head start in the digital world’’ </p>
                        </div>
                        <div className="testimonial__author">
                            <h3>Mrs Liang</h3>
                            <span>Wei Ling's mum who always prompt in picking her up after class</span><br/>
                            <span>(Attending scratch program)</span>
                        </div>
                    </div>
                   <div className="testimonial__item white-bg transition-3 mb-110">
                       <div className="testimonial__thumb mb-25">
                           <img src="/img/testimonial/home-1/testi-6.png" alt="" />
                       </div>
                       <div className="testimonial__text mb-25">
                           <p>‘’We were amazed to see the mini game that our child created with Scratch! We never thought that our child would be able to make something so creative and engaging. The coding classes at CodeKids have truly inspired our child's imagination and problem-solving skills. We highly recommend CodeKids to any parent who wants to give their child a head start in STEM education.’’ </p>
                       </div>
                       <div className="testimonial__author">
                           <h3>Mr John and wife</h3>
                           <span>parents of a CodeKids student</span><br/>
                           <span>(Attending scratch program)</span>
                       </div>
                   </div>


               </Slider>
               </div>
            </div>
         </div>
      </section>
   )
}
