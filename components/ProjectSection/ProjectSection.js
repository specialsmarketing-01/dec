import Image from 'next/image';
import React, { useState } from 'react';
import Projects from '../../api/project'
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../context/translations';

const ProjectSection = (props) => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState({});
    const [number, setCount] = useState(3);
    const [buttonActive, setButtonState] = useState(false);
    const { language } = useLanguage();
    const t = useTranslation(language);

    function handleClose() {
        setOpen(false);
    }

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    return (
        <section className="tp-project-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>{t('projects.span')}</span>
                    <h2>{t('projects.h2')}</h2>
                </div>
                <div className="tp-project-wrap">
                    <div className="row">
                        {Projects.slice(0, number).map((project, pro) => (
                            <div className="col col-xl-4 col-lg-6 col-sm-12 col-12" key={pro}>
                                <div className="tp-project-item">
                                    <div className="tp-project-img" onClick={() => handleClickOpen(project)}>
                                        <Image src={project.pImg} alt="" />
                                    </div>
                                    <div className="tp-project-content">
                                        <span>{project.subTitle}</span>
                                        <h2 onClick={() => handleClickOpen(project)}>{project.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`project-btn ${buttonActive ? "d-none" : ""}`}>
                        <span onClick={() => setButtonState(!buttonActive)}>
                            <button className="theme-btn" onClick={() => setCount(number + number)}>{t('projects.viewAll')}</button>
                        </span>
                    </div>
                </div>
            </div>
            <ProjectSingle open={open} onClose={handleClose} title={state.title} pImg={state.ps1img} psub1img1={state.psub1img1} psub1img2={state.psub1img2} />

            <div className="visible-rotate-text">
                <h1>{t('projects.visibleText')}</h1>
            </div>
        </section>
    );
}

export default ProjectSection;