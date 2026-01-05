import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500); // Wait for fade out
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: '#0f0c29',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            zIndex: 9999,
            transition: 'opacity 0.5s ease',
            opacity: visible ? 1 : 0
        }}>
            <div style={{ position: 'relative' }}>
                <h1 className="text-gradient" style={{ fontSize: '4rem', fontWeight: 800, letterSpacing: '4px', textAlign: 'center' }}>
                    VISA
                </h1>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'var(--accent)',
                    letterSpacing: '8px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    marginTop: '1rem'
                }}>
                    BENEFITS AI
                </p>
                <div style={{
                    width: '100%', height: '2px', background: 'var(--primary-gradient)',
                    marginTop: '2rem',
                    animation: 'expandWidth 1.5s ease-out forwards'
                }}></div>
            </div>

            <style>{`
                @keyframes expandWidth { 0% { width: 0; opacity: 0; } 100% { width: 100%; opacity: 1; } }
            `}</style>
        </div>
    );
};

export default SplashScreen;
