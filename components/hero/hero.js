import React from "react";
import NavLink from 'next/link'
import himg from '/public/images/arslan.png'
import { Link } from 'react-scroll'
import Image from "next/image";
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../context/translations';

const Hero = () => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    return (
        <section className="tp-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-7 col-lg-7">
                        <div className="tp-hero-section-text">
                            <div className="tp-hero-title">
                                <h2>{t('hero.title')}</h2>
                            </div>
                            <div className="tp-hero-sub">
                                <p>{t('hero.sub')}</p>
                            </div>
                            <div className="btns">
                                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95} className="theme-btn">{t('hero.cta')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <Image src={himg} alt=""/>
                </div>
            </div>
            <div className="social-link">
                <ul>
                    <li><NavLink href="/">Facebook</NavLink></li>
                    <li><NavLink href="/">Twitter</NavLink></li>
                    <li><NavLink href="/">Instagram</NavLink></li>
                </ul>
            </div>
            <div className="visible-text">
                <h1>{t('hero.visibleText')}</h1>
            </div>
        </section>
    )
}

export default Hero;