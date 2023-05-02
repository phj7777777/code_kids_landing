import React from 'react'
import Link from 'next/link'

export default function BlogDetailsBlog({blog}) {
    return (
        <section className="blog__area pt-40 pb-20">
           <div className="container">
              <div className="row">
                 <div className="col-xxl-12 col-xl-12 col-lg-12">
                    <div className="blog__wrapper">
                       <div className="postbox__item">
                          <div className="postbox__content wow fadeInUp" data-wow-delay=".5s">
                             <div className="postbox__meta mb-20">
                                <span><Link href="#"><a> <i className="icon_tag_alt"></i> {blog?.category}</a></Link></span>
                                <span><Link href="#"><a> <i className="fal fa-user"></i> {blog?.createdBy? blog?.createdBy: 'Anonymous'}</a></Link></span>
                             </div>
                             <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
                              <div className="postbox__img w-img mt-50 mb-50">
                                 <img src="/img/blog/blog-big-2.jpg" alt=""/>
                              </div>

                          </div>

                          <div className="postbox__tag mb-65 mt-65 wow fadeInUp" data-wow-delay=".7s">
                             <h3>Tags : </h3>
                             <Link href="#"><a>Web Template</a></Link>
                             <Link href="#"><a>Saas</a></Link>
                          </div>
                          <div className="postbox__share d-flex justify-content-between align-items-center mb-75 wow fadeInUp" data-wow-delay=".9s">
                             <h3>Share :</h3>
                             <ul>
                                <li><Link href="#"><a><i className="fab fa-facebook-f"></i></a></Link></li>
                                <li><Link href="#"><a><i className="fab fa-twitter"></i></a></Link></li>
                                <li><Link href="#"><a><i className="fab fa-vimeo-v"></i></a></Link></li>
                             </ul>
                          </div>

                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </section>
    )
}
