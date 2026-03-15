import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';

const ServiceSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    return (


        <div className="tp-service-area section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>What We Offer</span>
                    <h2>Digital Marketing Services</h2>
                </div>
                <div className="tp-service-wrap">
                    <div className="row align-items-center">
                        {Services.map((service, srv) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={srv}>
                                <div className="tp-service-item">
                                    <i className={`fi ${service.icon}`}></i>
                                    <h2 onClick={() => handleClickOpen(service)}>{service.sTitle}</h2>
                                    <p>{service.description}</p>
                                    <button className="read-more" onClick={() => handleClickOpen(service)}>
                                        <i className="fi flaticon-right-arrow"></i> Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Our Services</h1>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} description={state.description} des2={state.des2} des3={state.des3} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </div>
    );
}

export default ServiceSection;