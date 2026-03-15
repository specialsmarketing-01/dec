import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const ServiceSection = (props) => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState({});
    const { language } = useLanguage();
    const tr = translations[language] || translations.de;

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    const getServiceTitle = (sTitle) => {
        const keyMap = { 'Website Hosting': 'hosting', 'Website Design and Development': 'webdesign', 'Social Media Marketing': 'social', 'Graphic Design': 'graphic', 'SEO': 'seo', 'Google Ads': 'googleads' };
        const key = keyMap[sTitle];
        return (key && tr.serviceTitles && tr.serviceTitles[key]) ? tr.serviceTitles[key] : sTitle;
    }

    return (
        <div className="tp-service-area section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>{tr.services.span}</span>
                    <h2>{tr.services.h2}</h2>
                </div>
                <div className="tp-service-wrap">
                    <div className="row align-items-center">
                        {Services.map((service, srv) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={srv}>
                                <div className="tp-service-item">
                                    <i className={`fi ${service.icon}`}></i>
                                    <h2 onClick={() => handleClickOpen(service)}>{getServiceTitle(service.sTitle)}</h2>
                                    <p>{service.description}</p>
                                    <button className="read-more" onClick={() => handleClickOpen(service)}>
                                        <i className="fi flaticon-right-arrow"></i> {tr.services.readMore}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>{tr.services.visibleText}</h1>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle ? getServiceTitle(state.sTitle) : ''} description={state.description} des2={state.des2} des3={state.des3} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </div>
    );
}

export default ServiceSection;