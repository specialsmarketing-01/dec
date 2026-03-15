import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import NavLink from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../context/LanguageContext'
import { useTranslation } from '../../context/translations'

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const { language, setLanguage } = useLanguage();
    const t = useTranslation(language);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const navItems = [
        { to: 'home', href: '/', labelKey: 'home', offset: -100 },
        { to: 'about', href: '/#about', labelKey: 'about', offset: -95 },
        { to: 'service', href: '/#service', labelKey: 'services', offset: -95 },
        { to: 'project', href: '/#project', labelKey: 'caseStudies', offset: -95 },
        { to: 'blog', href: '/#blog', labelKey: 'blog', offset: -95 },
        { to: 'contact', href: '/#contact', labelKey: 'contact', offset: -95 },
    ];

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`tp-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <NavLink onClick={ClickHandler} className="navbar-brand" href="/">DECNOX</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        {navItems.map((item) => (
                                            <li key={item.to}>
                                                {isHomePage ? (
                                                    <ScrollLink activeClass="active" to={item.to} spy={true} smooth={true} duration={500} offset={item.offset}>{t('nav.' + item.labelKey)}</ScrollLink>
                                                ) : (
                                                    <Link href={item.href}>{t('nav.' + item.labelKey)}</Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right" id="home">
                                    <div className="language-switcher" style={{ marginRight: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                        <button type="button" onClick={() => setLanguage('de')} className={language === 'de' ? 'active' : ''} style={{ background: language === 'de' ? 'var(--theme-primary-color, #333)' : 'transparent', color: language === 'de' ? '#fff' : 'inherit', border: '1px solid #ddd', padding: '4px 10px', cursor: 'pointer', borderRadius: '4px', fontSize: '13px', fontWeight: language === 'de' ? 600 : 400 }}>DE</button>
                                        <button type="button" onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''} style={{ background: language === 'en' ? 'var(--theme-primary-color, #333)' : 'transparent', color: language === 'en' ? '#fff' : 'inherit', border: '1px solid #ddd', padding: '4px 10px', cursor: 'pointer', borderRadius: '4px', fontSize: '13px', fontWeight: language === 'en' ? 600 : 400 }}>EN</button>
                                    </div>
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button  className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}><i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;