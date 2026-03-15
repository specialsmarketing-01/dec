import React, { useState, useRef, useEffect } from 'react';

const WHATSAPP_NUMBER = '436603288530';
const TOPMATE_URL = 'https://topmate.io/deccnox';

const openChatBot = () => {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-chatbot'));
    }
};

const BackToTop = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
        <div className="floating-contact-toggle" ref={menuRef}>
            <div className={`floating-contact-menu ${open ? 'is-open' : ''}`}>
                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-contact-item"
                    title="WhatsApp"
                    aria-label="Chat on WhatsApp"
                    onClick={() => setOpen(false)}
                >
                    <span className="floating-contact-icon">
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                    <span className="floating-contact-label">WhatsApp</span>
                </a>
                <a
                    href={TOPMATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="floating-contact-item"
                    title="Book appointment"
                    aria-label="Book an appointment"
                    onClick={() => setOpen(false)}
                >
                    <span className="floating-contact-icon">
                        <i className="ti-calendar" aria-hidden="true"></i>
                    </span>
                    <span className="floating-contact-label">Book appointment</span>
                </a>
                <button
                    type="button"
                    className="floating-contact-item floating-contact-item--button"
                    title="Live chat"
                    aria-label="Open live chat"
                    onClick={() => {
                        setOpen(false);
                        openChatBot();
                    }}
                >
                    <span className="floating-contact-icon">
                        <i className="ti-comments" aria-hidden="true"></i>
                    </span>
                    <span className="floating-contact-label">Live chat</span>
                </button>
            </div>
            <button
                type="button"
                className="floating-contact-trigger"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? 'Close contact options' : 'Open contact options'}
                title={open ? 'Close' : 'Contact options'}
            >
                <i className={open ? 'ti-close' : 'ti-comments'} aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default BackToTop;
