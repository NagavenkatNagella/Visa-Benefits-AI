import React, { useState, useEffect, useRef } from 'react';
import { generateChatResponse } from '../utils/gemini';

const ChatAssistant = ({ translations, apiKey, lang }) => {
    // Fallback
    const t = translations || {
        chatTitle: "Visa Assistant",
        chatWelcome: "Hello! I'm your Visa concierge. Ask me anything about your Platinum benefits.",
        chatUserEx: "Are my points expiring soon?",
        chatBotEx: "Your 5,000 points are valid until Dec 2026. You're good to go! ✈️",
        chatPlaceholder: "Type a question...",
        chatResponseDefault: "I can help you with that! Could you check the benefits dashboard for specific details?"
    };

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    // Initialize messages properly when translations are available
    useEffect(() => {
        setMessages([
            { text: t.chatWelcome, isUser: false },
            { text: t.chatUserEx, isUser: true },
            { text: t.chatBotEx, isUser: false }
        ]);
    }, [t.chatWelcome]); // Re-run if language changes

    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg = { text: inputValue, isUser: true };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        if (apiKey && apiKey !== 'undefined' && apiKey !== 'null') {
            try {
                const aiResponse = await generateChatResponse(apiKey, lang || 'en', userMsg.text);
                if (aiResponse) {
                    setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
                    setIsTyping(false);
                    return;
                }
            } catch (e) {
                console.error("Chat Error", e);
            }
        }

        // Fallback to mock response if AI fails or no key
        setTimeout(() => {
            let responseText = t.chatResponseDefault;
            const lowerInput = userMsg.text.toLowerCase();
            if (lowerInput.includes('lounge')) responseText = "Check the Travel section for Lounge access!";

            setMessages(prev => [...prev, { text: responseText, isUser: false }]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100 }}>
            {isOpen ? (
                <div className="glass-panel animate-fade-in" style={{
                    width: '350px', height: '500px',
                    display: 'flex', flexDirection: 'column',
                    border: '1px solid var(--accent)',
                    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                    background: 'rgba(15, 12, 41, 0.95)'
                }}>
                    <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>{t.chatTitle}</h3>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}>×</button>
                    </div>

                    <div style={{ flex: 1, padding: '1rem 0', overflowY: 'auto' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ marginBottom: '1rem', textAlign: msg.isUser ? 'right' : 'left' }}>
                                <div style={{
                                    background: msg.isUser ? 'var(--primary-gradient)' : 'rgba(255,255,255,0.1)',
                                    padding: '0.8rem',
                                    borderRadius: msg.isUser ? '12px 12px 0 12px' : '12px 12px 12px 0',
                                    maxWidth: '80%',
                                    display: 'inline-block',
                                    color: 'white',
                                    fontSize: '0.9rem'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '12px', display: 'inline-block' }}>
                                    <span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            placeholder={t.chatPlaceholder}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            style={{
                                flex: 1,
                                background: 'rgba(0,0,0,0.3)',
                                border: 'none',
                                borderRadius: '20px',
                                padding: '0.8rem',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{
                                background: 'var(--accent)',
                                border: 'none',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                color: '#0f0c29',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                            ➤
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    className="hover-glow"
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--primary-gradient)',
                        border: 'none',
                        color: 'white',
                        fontSize: '2rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    💬
                </button>
            )}
            <style>{`
                .typing-dot { animation: typing 1.4s infinite ease-in-out both; font-size: 1.5rem; line-height: 10px; margin: 0 1px; }
                .typing-dot:nth-child(1) { animation-delay: -0.32s; }
                .typing-dot:nth-child(2) { animation-delay: -0.16s; }
                @keyframes typing { 
                    0%, 80%, 100% { transform: scale(0); opacity: 0.5; } 
                    40% { transform: scale(1); opacity: 1; } 
                }
            `}</style>
        </div>
    );
};

export default ChatAssistant;
