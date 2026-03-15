import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'
import { useTranslation } from '../../context/translations'

const Footer = (props) => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo logo-text" href="/">DECNOX</Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-contact" style={{ marginBottom: '16px', fontSize: '15px' }}>
                            <a href="tel:+436603288530" style={{ color: 'inherit', textDecoration: 'none', marginRight: '1rem' }}>+43 660 3288530</a>
                            <a href="mailto:office@decnox.com" style={{ color: 'inherit', textDecoration: 'none' }}>office@decnox.com</a>
                        </div>
                        <div className="link-widget">
                            <ul>
                                <li><a href="https://www.facebook.com/people/Decnox/61580747016472/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="ti-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/decnox" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="ti-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-links" style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link href="/agb" style={{ color: 'inherit', textDecoration: 'underline' }}>AGB</Link>
                            <Link href="/impressum" style={{ color: 'inherit', textDecoration: 'underline' }}>Impressum</Link>
                            <Link href="/datenschutz" style={{ color: 'inherit', textDecoration: 'underline' }}>Datenschutz</Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>{t('footer.copyright')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;