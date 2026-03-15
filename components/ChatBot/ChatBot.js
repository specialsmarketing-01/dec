import React, { useState, useRef, useEffect } from 'react';

const STEPS = {
    message: 0,
    name: 1,
    email: 2,
    phone: 3,   // optional
    sending: 4,
    done: 5,
    error: 6,
};

const STEP_LABELS = ['Your message', 'Your name', 'Your email', 'Phone (optional)'];

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((value || '').trim());

const FRIENDLY = {
    welcome: "Hi! 👋 I'm your DECNOX assistant. How can we help you today? (You can type a short message, then we'll ask for your name and email so we can get back to you.)",
    afterMessage: "Thanks! What's your name?",
    thanksName: "Nice to meet you! What's your email address?",
    thanksEmail: "Optional: add your phone number so we can call you, or tap Send to skip.",
    thanksPhone: "Sending everything to our team now...",
    success: "We've got your details and will be in touch soon. Thanks! 😊",
    error: "Something went wrong. Please try again or use the contact form.",
    placeholderMessage: "e.g. I need help with SEO or branding",
    placeholderName: "Your full name",
    placeholderEmail: "your@email.com",
    placeholderPhone: "e.g. +43 660 123456",
    invalidEmail: "Please enter a valid email address.",
    startOver: "Start new conversation",
    skip: "Skip",
    send: "Send",
};

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(STEPS.message);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [errorText, setErrorText] = useState('');
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (open && messages.length === 0) {
            setMessages([{ from: 'bot', text: FRIENDLY.welcome }]);
            setStep(STEPS.message);
            setName('');
            setEmail('');
            setMessage('');
            setPhone('');
            setErrorText('');
        }
    }, [open]);

    useEffect(() => {
        const handler = () => setOpen(true);
        window.addEventListener('open-chatbot', handler);
        return () => window.removeEventListener('open-chatbot', handler);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, step]);

    useEffect(() => {
        if (open && step < STEPS.sending) {
            inputRef.current?.focus();
        }
    }, [open, step]);

    const addBotMessage = (text) => {
        setMessages((prev) => [...prev, { from: 'bot', text }]);
    };

    const addUserMessage = (text) => {
        setMessages((prev) => [...prev, { from: 'user', text }]);
    };

    const handleSubmit = async (e) => {
        e?.preventDefault();
        const value = (inputValue || '').trim();
        if (!value) return;

        if (step === STEPS.message) {
            addUserMessage(value);
            setMessage(value);
            setInputValue('');
            setErrorText('');
            addBotMessage(FRIENDLY.afterMessage);
            setStep(STEPS.name);
            return;
        }

        if (step === STEPS.name) {
            addUserMessage(value);
            setName(value);
            setInputValue('');
            setErrorText('');
            addBotMessage(FRIENDLY.thanksName);
            setStep(STEPS.email);
            return;
        }

        if (step === STEPS.email) {
            if (!isValidEmail(value)) {
                setErrorText(FRIENDLY.invalidEmail);
                return;
            }
            addUserMessage(value);
            setEmail(value);
            setInputValue('');
            setErrorText('');
            addBotMessage(FRIENDLY.thanksEmail);
            setStep(STEPS.phone);
            return;
        }

        if (step === STEPS.phone) {
            if (value) {
                addUserMessage(value);
                setPhone(value);
                setInputValue('');
            }
            setErrorText('');
            addBotMessage(FRIENDLY.thanksPhone);
            setStep(STEPS.sending);
            setSending(true);

            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        message: message.trim(),
                        phone: (value || phone || '').trim(),
                        website: '',
                    }),
                });
                const data = await res.json().catch(() => ({}));

                if (res.ok && data.success) {
                    addBotMessage(FRIENDLY.success);
                    setStep(STEPS.done);
                } else {
                    addBotMessage(data.message || FRIENDLY.error);
                    setStep(STEPS.error);
                }
            } catch (err) {
                addBotMessage(err.message || FRIENDLY.error);
                setStep(STEPS.error);
            } finally {
                setSending(false);
            }
            return;
        }
    };

    const handleSkipPhone = () => {
        addBotMessage(FRIENDLY.thanksPhone);
        setStep(STEPS.sending);
        setSending(true);
        setInputValue('');
        setErrorText('');
        (async () => {
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        message: message.trim(),
                        phone: '',
                        website: '',
                    }),
                });
                const data = await res.json().catch(() => ({}));
                if (res.ok && data.success) {
                    addBotMessage(FRIENDLY.success);
                    setStep(STEPS.done);
                } else {
                    addBotMessage(data.message || FRIENDLY.error);
                    setStep(STEPS.error);
                }
            } catch (err) {
                addBotMessage(err.message || FRIENDLY.error);
                setStep(STEPS.error);
            } finally {
                setSending(false);
            }
        })();
    };

    const canSubmit = step < STEPS.sending && (inputValue || '').trim().length > 0 && !sending;
    const isPhoneStep = step === STEPS.phone;
    const showInput = open && step !== STEPS.sending && step !== STEPS.done && step !== STEPS.error;

    const placeholders = {
        [STEPS.message]: FRIENDLY.placeholderMessage,
        [STEPS.name]: FRIENDLY.placeholderName,
        [STEPS.email]: FRIENDLY.placeholderEmail,
        [STEPS.phone]: FRIENDLY.placeholderPhone,
    };

    return (
        <>
            {open && (
                <div className="chatbot-window" role="dialog" aria-label="Live chat">
                    <div className="chatbot-header">
                        <span className="chatbot-title">Live Chat</span>
                        <span className="chatbot-subtitle">DECNOX</span>
                        {step < STEPS.sending && step <= STEPS.phone && (
                            <span className="chatbot-step">Step {step + 1} of 4</span>
                        )}
                        <button
                            type="button"
                            className="chatbot-close"
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            title="Close"
                        >
                            <i className="ti-close" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, i) => (
                            <div key={i} className={`chatbot-bubble chatbot-bubble--${msg.from}`}>
                                {msg.from === 'bot' && <span className="chatbot-avatar">D</span>}
                                <span className="chatbot-bubble-text">{msg.text}</span>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    {showInput && (
                        <form className="chatbot-form" onSubmit={handleSubmit}>
                            {errorText && <div className="chatbot-error">{errorText}</div>}
                            <div className="chatbot-input-wrap">
                                <input
                                    ref={inputRef}
                                    type={step === STEPS.email ? 'email' : step === STEPS.phone ? 'tel' : 'text'}
                                    className="chatbot-input"
                                    placeholder={placeholders[step]}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    aria-label={placeholders[step]}
                                    disabled={sending}
                                    autoComplete={step === STEPS.email ? 'email' : step === STEPS.name ? 'name' : step === STEPS.phone ? 'tel' : 'off'}
                                />
                                <button
                                    type="submit"
                                    className="chatbot-send"
                                    disabled={!canSubmit}
                                    aria-label="Send"
                                    title="Send"
                                >
                                    <i className="ti-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                            {isPhoneStep && (
                                <button
                                    type="button"
                                    className="chatbot-skip"
                                    onClick={handleSkipPhone}
                                >
                                    {FRIENDLY.skip}
                                </button>
                            )}
                        </form>
                    )}
                    {(step === STEPS.done || step === STEPS.error) && (
                        <div className="chatbot-footer">
                            <button
                                type="button"
                                className="chatbot-start-over"
                                onClick={() => {
                                    setMessages([{ from: 'bot', text: FRIENDLY.welcome }]);
                                    setStep(STEPS.message);
                                    setName('');
                                    setEmail('');
                                    setMessage('');
                                    setPhone('');
                                    setInputValue('');
                                }}
                            >
                                {FRIENDLY.startOver}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ChatBot;
