import React, { Fragment } from 'react';
import { Dialog, Grid } from '@mui/material';
import Contact from './contact';
import RelatedProject from './related';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, psub1img1, psub1img2 }) => {
    const { language } = useLanguage();
    const tr = (translations[language] || translations.de).projectSingle;

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body project-modal">
                    <button className="modal-close" onClick={onClose}><i className="fa fa-close"></i></button>
                    <div className="tp-project-single-area">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-project-single-wrap">
                                        <div className="tp-project-single-item">
                                            <div className="row align-items-center mb-5">
                                                <div className="col-lg-7">
                                                    <div className="tp-project-single-title">
                                                        <h3>{title} {tr.projectSuffix}</h3>
                                                    </div>
                                                    <p>{tr.introP1}</p>
                                                    <p>{tr.introP2}</p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="tp-project-single-content-des-right">
                                                        <ul>
                                                            <li>{tr.location}: <span>Marketing</span></li>
                                                            <li>{tr.client}: <span>DECNOX</span></li>
                                                            <li>{tr.type}: <span>SEO, Google Ads, Social Media</span></li>
                                                            <li>{tr.duration}: <span>—</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tp-project-single-main-img">
                                                <Image src={pImg} alt="" />
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-title">
                                                        <h3>{tr.strategies}</h3>
                                                    </div>
                                                    <p>{tr.strategiesP}</p>
                                                    <ul>
                                                        <li>{tr.strategiesLi1}</li>
                                                        <li>{tr.strategiesLi2}</li>
                                                        <li>{tr.strategiesLi3}</li>
                                                        <li>{tr.strategiesLi4}</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-item-quote">
                                                        <p>"{tr.quote}"</p>
                                                        <span>{tr.quoteAuthor}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item">
                                            <div className="tp-project-single-title">
                                                <h3>{tr.approach}</h3>
                                            </div>
                                            <p>{tr.approachP}</p>
                                        </div>
                                        <div className="tp-project-single-gallery">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={psub1img1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        <Image src={psub1img2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-project-single-item list-widget">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="tp-project-single-title">
                                                        <h3>{tr.receivedGoals}</h3>
                                                    </div>
                                                    <ul>
                                                        <li>{tr.resultsLi1}</li>
                                                        <li>{tr.resultsLi2}</li>
                                                        <li>{tr.resultsLi3}</li>
                                                        <li>{tr.resultsLi4}</li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 list-widget-s">
                                                    <div className="tp-project-single-title">
                                                        <h3>{tr.resultsTitle}</h3>
                                                    </div>
                                                    <ul>
                                                        <li>{tr.resultsLi1}</li>
                                                        <li>{tr.resultsLi2}</li>
                                                        <li>{tr.resultsLi3}</li>
                                                        <li>{tr.resultsLi4}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <RelatedProject />
                                        <div className="tp-project-single-item">
                                            <div className="tp-project-contact-area">
                                                <div className="tp-contact-title">
                                                    <h2>{tr.contactTitle}</h2>
                                                    <p>{tr.contactP}</p>
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
};
export default ProjectSingle;

