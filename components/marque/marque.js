import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { translations } from '../../context/translations'

const Marquee = (props) => {
    const { language } = useLanguage();
    const tr = translations[language] || translations.de;
    return (
        <div className="digital-marque-sec">
            <div className="container">
                <div className="digital-marque">
                    <div className="marquee">
                        <div className="track">
                            <div className="content">
                                <h1><span>{tr.marquee.line1}</span> <i>.</i> <span>{tr.marquee.line1}</span> <i>.</i> <span>{tr.marquee.line2}</span> <i>.</i> <span>{tr.marquee.line2}</span> <i>.</i> <span>{tr.marquee.line3}</span> <i>.</i> 
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee;