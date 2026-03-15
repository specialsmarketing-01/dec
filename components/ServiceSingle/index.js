import React, { Fragment } from 'react';
import { Dialog, Grid } from '@mui/material'
import Contact from './contact';
import Services from '../../api/service'
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const ServiceSingle = ({ maxWidth, open, onClose, title, description, des2, des3, dImg, sImg1, sImg2, }) => {
    const { language } = useLanguage();
    const tr = (translations[language] || translations.de).serviceSingle;

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-service-single-wrap">
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-main-img">
                                                <Image src={dImg} alt="" />
                                            </div>
                                            <div className="tp-service-single-title">
                                                <h3>{title}</h3>
                                            </div>
                                            {description && <p>{description}</p>}
                                            {des2 && <p>{des2}</p>}
                                            {des3 && <p>{des3}</p>}
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={sImg1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={sImg2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>What We Deliver</h3>
                                            </div>
                                            <p>Every campaign is built on clear goals, audience research, and measurable KPIs. We report on what matters: traffic, leads, and revenue.</p>
                                            <ul>
                                                <li>Strategy and audience research</li>
                                                <li>Ongoing optimization and A/B testing</li>
                                                <li>Monthly reporting and insights</li>
                                                <li>Dedicated account management</li>
                                                <li>Transparent pricing and no long-term lock-in</li>
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>Our Approach</h3>
                                            </div>
                                            <p>We start by understanding your business, competitors, and target audience. Then we build a custom plan—SEO, paid ads, social, or a full-funnel mix—and execute with clear timelines and deliverables. We focus on channels that drive real growth and scale what works.</p>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>How We Work</h3>
                                            </div>
                                            <ul>
                                                <li>Discovery and goal-setting</li>
                                                <li>Strategy and channel selection</li>
                                                <li>Launch and optimization</li>
                                                <li>Reporting and iteration</li>
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>{tr.related}</h3>
                                            </div>
                                            <div className="tp-service-area">
                                                <div className="row align-items-center">
                                                    {Services.slice(0, 3).map((service, srv) => (
                                                        <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                            <div className="tp-service-item">
                                                                <i className={`fi ${service.icon}`} ></i>
                                                                <h2>{service.sTitle}</h2>
                                                                <p>{tr.relatedDesc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-contact-area">
                                                <div className="tp-contact-title">
                                                    <h2>{tr.readyTitle}</h2>
                                                    <p>{tr.readyP}</p>
                                                    <p style={{ marginTop: '0.5rem' }}>
                                                        <a href="tel:+436603288530" style={{ color: 'inherit', marginRight: '1rem' }}>+43 660 3288530</a>
                                                        <a href="mailto:office@decnox.com" style={{ color: 'inherit' }}>office@decnox.com</a>
                                                    </p>
                                                </div>
                                                <div className="tp-contact-form-area">
                                                    <Contact />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default ServiceSingle

