import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = [
    {
        name: 'Sarah Chen',
        title: 'Marketing Director, TechFlow',
        descriptoion: '"DECNOX took our organic traffic from 5K to 45K in eight months. Their SEO strategy was clear, and the monthly reports made it easy to show results to leadership."',
    },
    {
        name: 'James Okonkwo',
        title: 'Founder, GreenBite Foods',
        descriptoion: '"We needed more online orders. The team set up Google Ads and social campaigns, and our conversion rate tripled. They really understand e-commerce."',
    },
    {
        name: 'Emma Rodriguez',
        title: 'CEO, Bloom Studio',
        descriptoion: '"From branding to social to SEO—everything under one roof. Our brand visibility has never been stronger. Highly recommend for any business ready to scale."',
    },
    {
        name: 'David Park',
        title: 'Operations Manager, BuildRight',
        descriptoion: '"Local SEO and Google Business Profile work brought us consistent leads. DECNOX is responsive, data-driven, and they deliver what they promise."',
    },
]

const Testimonial = () => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="tp-testimonial-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Testimonials</span>
                    <h2>What Our Clients Say</h2>
                </div>

                <div className="tp-testimonial-wrap">
                    <Slider {...settings}>
                        {Testimonials.map((tstml, tsm) => (
                            <div className="tp-testimonial-item" key={tsm}>
                                <div className="tp-testimonial-text">
                                    <p>{tstml.descriptoion}</p>
                                    <span>{tstml.name}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Reviews</h1>
            </div>
        </section>
    )
}

export default Testimonial;
