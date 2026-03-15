import Image from 'next/image';
import React from 'react'
import aImg from '/public/images/about/img-1.jpg'

const About = (props) => {
    return (

        <section className="tf-about-section section-padding">
            <div className="container">
                <div className="tf-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-img">
                                <Image src={aImg} alt="" />
                                <div className="tf-about-img-text">
                                    <div className="tf-about-icon">
                                        <h3>8+</h3>
                                        <span>Years in Digital</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="tf-about-text">
                                <small>About DECNOX</small>
                                <h2>We Grow Brands Online with Data-Driven Marketing</h2>
                                <h5>8+ years helping businesses reach the right audience, rank higher, and convert more leads through SEO, paid ads, and social media.</h5>
                                <p>DECNOX is your digital marketing partner. We combine strategy, creativity, and analytics to build campaigns that deliver real results—more traffic, better rankings, and measurable ROI. From local businesses to e‑commerce brands, we tailor every plan to your goals and budget.</p>

                                <div className="tf-funfact">
                                    <div className="tf-funfact-item">
                                        <h3><span>500</span>+</h3>
                                        <p>Campaigns Delivered</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>200</span>+</h3>
                                        <p>Clients Trust Us</p>
                                    </div>
                                    <div className="tf-funfact-item">
                                        <h3><span>3</span>x</h3>
                                        <p>Avg. ROI Growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>About Us</h1>
            </div>
        </section>
    )
}

export default About;