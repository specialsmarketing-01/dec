import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'


const ContactArea = (props) => {
    return (
        <section className="tp-contact-form-area section-padding">
            <div className="container">
                <div className="tp-contact-form-wrap">
                    <div className="tp-section-title">
                        <h2>Get Your Free Strategy Call</h2>
                        <p>Tell us your goals and we'll suggest a plan. No spam—we reply within 24 hours.</p>
                    </div>
                    <ContactForm/>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Contact</h1>
            </div>
        </section>
    )
}

export default ContactArea;