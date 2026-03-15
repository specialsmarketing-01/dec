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
                        <div className="link-widget">
                            <ul>
                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link href="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link href="/"><i className="ti-vimeo-alt"></i></Link></li>
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