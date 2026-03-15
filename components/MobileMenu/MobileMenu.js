import React, { useState } from 'react';
import ListItem from "@mui/material/List";
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../../context/LanguageContext'
import { useTranslation } from '../../context/translations'

const menuLinks = [
    { key: 'home', scrollTo: 'home', href: '/' },
    { key: 'about', scrollTo: 'about', href: '/#about' },
    { key: 'services', scrollTo: 'service', href: '/#service' },
    { key: 'caseStudies', scrollTo: 'project', href: '/#project' },
    { key: 'blog', scrollTo: 'blog', href: '/#blog' },
    { key: 'contact', scrollTo: 'contact', href: '/#contact' },
];

const MobileMenu = () => {
    const [menuActive, setMenuState] = useState(false);
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const { language } = useLanguage();
    const t = useTranslation(language);

    const ClickHandler = () => {
        setMenuState(false);
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menuLinks.map((item, mn) => (
                        <ListItem key={mn}>
                            {isHomePage ? (
                                <ScrollLink to={item.scrollTo} spy={true} smooth={true} duration={500} onClick={ClickHandler}>{t('nav.' + item.key)}</ScrollLink>
                            ) : (
                                <Link href={item.href} onClick={ClickHandler}>{t('nav.' + item.key)}</Link>
                            )}
                        </ListItem>
                    ))}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;