import React from 'react'
import { Link } from 'react-scroll'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../context/translations'

const Pricing = (props) => {
    const { language } = useLanguage();
    const tr = translations[language] || translations.de;
    const pricing = tr.pricing.packages;

    return (
        <section className="tp-pricing-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>{tr.pricing.span}</span>
                    <h2>{tr.pricing.h2}</h2>
                </div>
                <div className="tp-pricing-wrap">
                    <div className="row">
                        {pricing.map((pkg, ptem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={ptem}>
                                <div className="tp-pricing-item">
                                    <div className="tp-pricing-top">
                                        <div className="pricing-thumb">
                                            <span>{pkg.title}</span>
                                        </div>
                                        <div className="tp-pricing-text">
                                            <p>{pkg.des}</p>
                                        </div>
                                    </div>
                                    <div className="tp-pricing-bottom">
                                        <div className="tp-pricing-bottom-text">
                                            <ul>
                                                <li>{pkg.li1}</li>
                                                <li>{pkg.li2}</li>
                                                <li>{pkg.li3}</li>
                                                <li>{pkg.li5}</li>
                                                <li>{pkg.li4}</li>
                                            </ul>
                                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">{tr.pricing.getQuote}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>{tr.pricing.visibleText}</h1>
            </div>
        </section>
    )
}

export default Pricing;
