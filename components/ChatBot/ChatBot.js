import React, { useState, useRef, useEffect } from 'react';

const STEPS = {
    message: 0,   // "How can we help?" first
    name: 1,
    email: 2,
    sending: 3,
    done: 4,
    error: 5,
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((value || '').trim());

const FRIENDLY = {
    welcome: "Hi there! 👋 I'm your DECNOX assistant. What would you like to know, or how can we help you today?",
    afterMessage: "I'd love to have our team follow up. What's your name?",
    thanksName: "Nice to meet you! And what's the best email to reach you?",
    thanksEmail: "Perfect! Sending this to our team now...",
    success: "We've got your message and will be in touch soon. Thanks for reaching out! 😊",
    error: "Oops, something went wrong on our side. Please try again in a moment or use the contact form below.",
    placeholderMessage: "e.g. I need help with SEO, branding...",
    placeholderName: "Your name",
    placeholderEmail: "your@email.com",
    invalidEmail: "That doesn't look like a valid email — could you double-check?",
    startOver: "Start a new conversation",
};

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(STEPS.message);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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

    const canSubmit = step < STEPS.sending && (inputValue || '').trim().length > 0 && !sending;
    const showInput = open && step !== STEPS.sending && step !== STEPS.done && step !== STEPS.error;

    const placeholders = {
        [STEPS.message]: FRIENDLY.placeholderMessage,
        [STEPS.name]: FRIENDLY.placeholderName,
        [STEPS.email]: FRIENDLY.placeholderEmail,
    };

    return (
        <>
            {open && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <span className="chatbot-title">Live Chat</span>
                        <span className="chatbot-subtitle">DECNOX</span>
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
                                    type={step === STEPS.email ? 'email' : 'text'}
                                    className="chatbot-input"
                                    placeholder={placeholders[step]}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    aria-label="Your reply"
                                    disabled={sending}
                                />
                                <button
                                    type="submit"
                                    className="chatbot-send"
                                    disabled={!canSubmit}
                                    aria-label="Send"
                                >
                                    <i className="ti-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
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
