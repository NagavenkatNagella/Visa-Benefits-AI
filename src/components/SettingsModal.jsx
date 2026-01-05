import React, { useState } from 'react';

const SettingsModal = ({ isOpen, onClose, onSave }) => {
    const [key, setKey] = useState(localStorage.getItem('gemini_key') || '');
    const [isSaved, setIsSaved] = useState(false);

    if (!isOpen) return null;

    const handleSave = () => {
        localStorage.setItem('gemini_key', key);
        onSave(key);
        setIsSaved(true);
        setTimeout(() => {
            setIsSaved(false);
            onClose();
        }, 1500);
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }}>
            <div className="glass-panel" style={{ width: '400px', background: '#0f0c29', position: 'relative', overflow: 'hidden' }}>

                {isSaved ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem', animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>🚀</div>
                        <h2 style={{ background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Activated!</h2>
                    </div>
                ) : (
                    <>
                        <h2 style={{ marginBottom: '1rem', color: 'white' }}>Enable Real AI 🤖</h2>
                        <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
                            Get a free API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" style={{ color: 'var(--accent)' }}>Google AI Studio</a> to unlock real-time translations and insights.
                        </p>

                        <input
                            type="password"
                            placeholder="Paste Gemini API Key"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            style={{
                                width: '100%', padding: '0.8rem', borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)',
                                color: 'white', marginBottom: '1.5rem'
                            }}
                        />

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'white' }}>Cancel</button>
                            <button onClick={handleSave} style={{
                                background: 'var(--primary-gradient)', border: 'none', padding: '0.5rem 1.5rem',
                                borderRadius: '20px', color: 'white', fontWeight: 600
                            }}>
                                Save & Activate
                            </button>
                        </div>
                    </>
                )}
                <style>{`@keyframes popIn { 0% { transform: scale(0); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }`}</style>
            </div>
        </div>
    );
};

export default SettingsModal;
