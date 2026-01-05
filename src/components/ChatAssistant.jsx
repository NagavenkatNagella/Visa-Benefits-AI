import React, { useState, useEffect, useRef } from 'react';
import { generateChatResponse } from '../utils/gemini';
import { benefitsData, benefitTranslations } from '../data/benefitsData';
import { faqData } from '../data/faqData';

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
    const [suggestedQuestions, setSuggestedQuestions] = useState([]);

    // Initialize messages properly when translations are available
    useEffect(() => {
        setMessages([
            { text: t.chatWelcome, isUser: false }
        ]);

        const currentLang = lang || 'en';

        // Define prompt structures per language
        const promptTemplates = {
            en: { prefix: "What is ", suffix: "?" },
            ta: { prefix: "", suffix: " என்றால் என்ன?" },
            te: { prefix: "", suffix: " అంటే ఏమిటి?" },
            hi: { prefix: "", suffix: " क्या है?" }
        };
        const template = promptTemplates[currentLang] || promptTemplates.en;

        // Generate suggested questions from FAQ and Benefits based on language
        const translatedPool = [
            ...faqData.map(f => f.question[currentLang] || f.question.en),
            ...benefitsData.filter(b => b.id < 6).map(b => {
                const bTrans = benefitTranslations[b.id]?.[currentLang];
                const title = bTrans?.title || b.title;
                return `${template.prefix}${title}${template.suffix}`;
            })
        ];

        const shuffled = [...translatedPool].sort(() => 0.5 - Math.random());
        setSuggestedQuestions(shuffled.slice(0, 3));
    }, [t.chatWelcome, lang]);

    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSend = async (textOverride) => {
        const textToSend = textOverride || inputValue;
        if (!textToSend.trim()) return;

        const userMsg = { text: textToSend, isUser: true };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        const currentLang = lang || 'en';

        const tryGenerateResponse = async (retryCount = 0) => {
            if (apiKey && apiKey !== 'undefined' && apiKey !== 'null') {
                try {
                    const aiResponse = await generateChatResponse(apiKey, currentLang, textToSend);
                    if (aiResponse) {
                        return aiResponse;
                    }
                } catch (e) {
                    console.error(`Chat Error (Attempt ${retryCount + 1})`, e);
                    if (retryCount < 1) {
                        return await tryGenerateResponse(retryCount + 1);
                    }
                }
            }
            return null;
        };

        const aiResponse = await tryGenerateResponse();

        if (aiResponse) {
            setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
            setIsTyping(false);
        } else {
            // Fallback to dataset-based matching if AI fails
            setTimeout(() => {
                let responseText = t.chatResponseDefault;
                const lowerInput = textToSend.toLowerCase();

                // 1. Try to find a match in faqData first
                const faqMatch = faqData.find(f => {
                    const q = (f.question[currentLang] || f.question.en).toLowerCase();
                    return lowerInput.includes(q) || q.split(' ').some(word => word.length > 4 && lowerInput.includes(word.toLowerCase()));
                });

                if (faqMatch) {
                    responseText = faqMatch.answer[currentLang] || faqMatch.answer.en;
                } else {
                    // 2. Try to find a match in benefitsData
                    const benefitMatch = benefitsData.find(b => {
                        const bTrans = benefitTranslations[b.id]?.[currentLang];
                        const title = (bTrans?.title || b.title).toLowerCase();
                        const cat = b.category.toLowerCase();
                        return lowerInput.includes(title) || lowerInput.includes(cat);
                    });

                    if (benefitMatch) {
                        const bTrans = benefitTranslations[benefitMatch.id]?.[currentLang] || benefitMatch;
                        responseText = `${bTrans.title}: ${bTrans.description} \n\nTerms: ${bTrans.terms}`;
                    } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('வணக்கம்') || lowerInput.includes('नमस्ते')) {
                        const helloResp = {
                            en: "Hello! How can I assist you with your Visa benefits today?",
                            ta: "வணக்கம்! உங்கள் விசா சலுகைகள் குறித்து நான் உங்களுக்கு இன்று எவ்வாறு உதவ முடியும்?",
                            te: "నమస్తే! మీ వీసా ప్రయోజనాల గురించి నేను మీకు ఈరోజు ఎలా సహాయపడగలను?",
                            hi: "नमस्ते! मैं आज आपके वीज़ा लाभों के बारे में आपकी किस प्रकार सहायता कर सकता हूँ?"
                        };
                        responseText = helloResp[currentLang] || helloResp.en;
                    }
                }

                setMessages(prev => [...prev, { text: responseText, isUser: false }]);
                setIsTyping(false);
            }, 800);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
            {isOpen ? (
                <div className="glass-panel animate-fade-in chat-assistant-window" style={{
                    width: '380px', height: '550px',
                    display: 'flex', flexDirection: 'column',
                    border: '1px solid var(--accent)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                    background: 'rgba(5, 5, 5, 0.95)',
                    padding: '1.5rem',
                    overflow: 'hidden'
                }}>
                    <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4cd964', boxShadow: '0 0 10px #4cd964' }}></div>
                            <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', fontWeight: 600 }}>{t.chatTitle}</h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white', fontSize: '1rem', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
                    </div>

                    <div className="custom-scrollbar" style={{ flex: 1, padding: '1rem 0', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ textAlign: msg.isUser ? 'right' : 'left' }}>
                                <div style={{
                                    background: msg.isUser ? 'var(--accent)' : 'rgba(255,255,255,0.08)',
                                    padding: '0.8rem 1rem',
                                    borderRadius: msg.isUser ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                                    maxWidth: '85%',
                                    display: 'inline-block',
                                    color: msg.isUser ? '#000' : 'white',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.4',
                                    boxShadow: msg.isUser ? '0 4px 15px rgba(0, 210, 255, 0.3)' : 'none'
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ background: 'rgba(255,255,255,0.08)', padding: '0.6rem 1rem', borderRadius: '18px 18px 18px 2px', display: 'inline-block' }}>
                                    <span className="typing-dot">.</span><span className="typing-dot">.</span><span className="typing-dot">.</span>
                                </div>
                            </div>
                        )}

                        {!isTyping && suggestedQuestions.length > 0 && messages.length < 3 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>Suggested:</span>
                                {suggestedQuestions.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSend(q)}
                                        style={{
                                            background: 'rgba(0, 210, 255, 0.1)',
                                            border: '1px solid rgba(0, 210, 255, 0.2)',
                                            color: 'var(--accent)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '15px',
                                            fontSize: '0.8rem',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                        className="hover-glow"
                                    >
                                        {q}
                                    </button>
                                ))}
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
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '24px',
                                padding: '0.8rem 1.2rem',
                                color: 'white',
                                outline: 'none',
                                fontSize: '0.9rem'
                            }}
                        />
                        <button
                            onClick={() => handleSend()}
                            style={{
                                background: 'var(--accent)',
                                border: 'none',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                color: '#000',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(0, 210, 255, 0.4)',
                                fontSize: '1.2rem'
                            }}>
                            ➤
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    className="hover-glow animate-float"
                    onClick={() => setIsOpen(true)}
                    style={{
                        width: '65px',
                        height: '65px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--accent) 0%, #0072ff 100%)',
                        border: 'none',
                        color: 'white',
                        fontSize: '2rem',
                        boxShadow: '0 10px 40px rgba(0, 210, 255, 0.4)',
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
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default ChatAssistant;
