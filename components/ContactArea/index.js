import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import { useLanguage } from '../../context/LanguageContext'
import { useTranslation } from '../../context/translations'

const ContactArea = (props) => {
    const { language } = useLanguage();
    const t = useTranslation(language);
    return (
        <section className="tp-contact-form-area section-padding">
            <div className="container">
                <div className="tp-contact-form-wrap">
                    <div className="tp-section-title">
                        <h2>{t('contact.h2')}</h2>
                        <p>{t('contact.p')}</p>
                    </div>
                    <ContactForm/>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>{t('contact.visibleText')}</h1>
            </div>
        </section>
    )
}

export default ContactArea;