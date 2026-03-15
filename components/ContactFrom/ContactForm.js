import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        message: '',
        website: '', // honeypot – leave empty; bots fill it
    });
    const [sending, setSending] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [submitMessage, setSubmitMessage] = useState('');

    const [validator] = useState(
        new SimpleReactValidator({ className: 'errorMessage' })
    );

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        setSubmitStatus(null);
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
    
        if (!validator.allValid()) {
            validator.showMessages();
            return;
        }
    
        validator.hideMessages();
        setSending(true);
        setSubmitStatus(null);
        setSubmitMessage('');
    
        try {
            const params = new URLSearchParams();
            params.append("name", forms.name.trim());
            params.append("email", forms.email.trim());
            params.append("message", forms.message.trim());
    
            const res = await fetch("https://91.204.209.39/sendmail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: params.toString()
            });
    
            const data = await res.json().catch(() => ({}));
    
            if (res.ok && data.success) {
                setSubmitStatus('success');
                setSubmitMessage('Your message has been sent successfully.');
                setForms({ name: '', email: '', message: '', website: '' });
            } else {
                setSubmitStatus('error');
                setSubmitMessage(data.message || 'Something went wrong. Please try again.');
            }
    
        } catch (err) {
            setSubmitStatus('error');
            setSubmitMessage(err.message || 'Something went wrong. Please try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <form
            method="post"
            className="contact-validation-active"
            onSubmit={submitHandler}
        >
            <div className="row align-items-center">
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label>Name *</label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Name"
                            disabled={sending}
                        />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Email"
                            disabled={sending}
                        />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fullwidth form-group">
                        <label>Message *</label>
                        <textarea
                            value={forms.message}
                            name="message"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Message"
                            rows={5}
                            disabled={sending}
                        />
                        {validator.message('message', forms.message, 'required')}
                    </div>
                </div>

                {/* Honeypot – hidden from users; leave empty for spam protection */}
                <div className="col-12" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                        id="website"
                        type="text"
                        name="website"
                        value={forms.website}
                        onChange={changeHandler}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                {submitStatus === 'success' && (
                    <div className="col-12">
                        <div className="alert alert-success" role="alert">
                            {submitMessage}
                        </div>
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="col-12">
                        <div className="alert alert-danger" role="alert">
                            {submitMessage}
                        </div>
                    </div>
                )}

                <div className="col-md-5 order-md-1 order-2 col-12">
                    <div className="submit-area">
                        <button
                            type="submit"
                            className="theme-btn"
                            disabled={sending}
                        >
                            {sending ? 'Sending...' : 'Submit'}
                        </button>
                        {sending && (
                            <div id="loader" style={{ display: 'inline-block', marginLeft: '8px' }}>
                                <i className="ti-reload"></i>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-7 order-md-2 order-1 col-12">
                    <div className="contact-info">
                        <ul>
                            <li><i className="fi flaticon-phone-call"></i> <a href="tel:+436603288530" style={{ color: 'inherit' }}>+43 660 3288530</a></li>
                            <li><i className="fi flaticon-mail"></i> <a href="mailto:office@decnox.com" style={{ color: 'inherit' }}>office@decnox.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
