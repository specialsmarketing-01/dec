import React from 'react'
import { Link } from 'react-scroll'

const Pricing = (props) => {
    const pricing = [
        {
            des: 'Professional, responsive websites that look great and convert visitors into customers.',
            li1: 'Custom design & layout',
            li2: 'Mobile-friendly & fast',
            li3: 'Contact forms & CTAs',
            li4: 'Basic SEO setup',
            li5: 'Ongoing updates & support',
            title: 'Website Designing',
        },
        {
            des: 'Get found on Google with a strategy built for your business and local market.',
            li1: 'Keyword research & strategy',
            li2: 'On-page & technical SEO',
            li3: 'Google Business Profile',
            li4: 'Content & link building',
            li5: 'Monthly ranking reports',
            title: 'SEO',
        },
        {
            des: 'Reach customers when they search—with targeted ads and measurable results.',
            li1: 'Campaign setup & optimization',
            li2: 'Search & Display ads',
            li3: 'Remarketing & audiences',
            li4: 'Conversion tracking',
            li5: 'Performance reporting',
            title: 'Google Ads',
        },
    ]

    return (
        <section className="tp-pricing-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Packages</span>
                    <h2>Our Service Packages</h2>
                </div>
                <div className="tp-pricing-wrap">
                    <div className="row">
                        {pricing.map((pricing, ptem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={ptem}>
                                <div className="tp-pricing-item">
                                    <div className="tp-pricing-top">
                                        <div className="pricing-thumb">
                                            <span>{pricing.title}</span>
                                        </div>
                                        <div className="tp-pricing-text">
                                            <p>{pricing.des}</p>
                                        </div>
                                    </div>
                                    <div className="tp-pricing-bottom">
                                        <div className="tp-pricing-bottom-text">
                                            <ul>
                                                <li>{pricing.li1}</li>
                                                <li>{pricing.li2}</li>
                                                <li>{pricing.li3}</li>
                                                <li>{pricing.li5}</li>
                                                <li>{pricing.li4}</li>
                                            </ul>
                                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">Get a Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Packages</h1>
            </div>
        </section>
    )
}

export default Pricing;
