import React, { useState } from 'react';
import { cardTiers } from '../data/benefitsData';

const CardInput = ({ onSubmit, translations }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [selectedTier, setSelectedTier] = useState(cardTiers.CLASSIC); // Default to Classic
    const [showTierSelect, setShowTierSelect] = useState(false);

    const handleChange = (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 16) val = val.slice(0, 16);

        // Add spaces for display
        const formatted = val.replace(/(\d{4})(?=\d)/g, '$1 ');
        setCardNumber(formatted);
    };

    const handleExpiryChange = (e) => {
        let val = e.target.value.replace(/\D/g, '');
        if (val.length > 4) val = val.slice(0, 4);

        let formatted = val;
        if (val.length > 2) {
            formatted = val.slice(0, 2) + '/' + val.slice(2);
        }
        setExpiryDate(formatted);
    }

    const handleTierSelect = (tierKey) => {
        setSelectedTier(cardTiers[tierKey]);
        setShowTierSelect(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanNumber = cardNumber.replace(/\s/g, '');
        if (cleanNumber.length === 16 && cardName.trim().length > 0 && expiryDate.length === 5) {
            onSubmit(cardNumber, selectedTier, cardName, expiryDate);
        }
    };

    const isComplete = cardNumber.replace(/\s/g, '').length === 16 && cardName.trim().length > 0 && expiryDate.length === 5;

    return (
        <div className="animate-fade-in" style={{ maxWidth: '500px', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>
                {translations.welcome}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {translations.enterCard}
            </p>

            {/* 3D Realistic Card Preview */}
            <div style={{
                width: '320px',
                height: '200px',
                borderRadius: '16px',
                background: selectedTier.color,
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                padding: '20px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'white',
                marginBottom: '2rem',
                transition: 'all 0.5s ease',
                transformStyle: 'preserve-3d',
                transform: isComplete ? 'perspective(1000px) rotateY(0deg) scale(1.05)' : 'perspective(1000px) rotateY(0deg)',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                {/* Holographic overlay */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(125deg, transparent 0%, rgba(255,255,255,0.1) 30%, transparent 60%)',
                    borderRadius: '16px',
                    pointerEvents: 'none'
                }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontStyle: 'italic', fontWeight: 900, fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>VISA</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.8, fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{selectedTier.name}</div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ width: '40px', height: '30px', background: 'linear-gradient(to bottom, #eecda3, #ef629f)', borderRadius: '4px' }}></div>
                    <div style={{ fontSize: '1.2rem', letterSpacing: '2px', textShadow: '0 2px 2px rgba(0,0,0,0.5)', fontFamily: 'monospace' }}>
                        {cardNumber || '•••• •••• •••• ••••'}
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', opacity: 0.8 }}>
                    <div style={{ textAlign: 'left' }}>
                        <div>CARD HOLDER</div>
                        <div style={{ fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{cardName || 'YOUR NAME'}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div>VALID THRU</div>
                        <div>{expiryDate || 'MM/YY'}</div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                {/* Card Type Selector */}
                <div style={{ marginBottom: '1rem', position: 'relative' }}>
                    <button
                        type="button"
                        onClick={() => setShowTierSelect(!showTierSelect)}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: 'white',
                            padding: '0.8rem',
                            width: '100%',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            fontSize: '0.9rem'
                        }}
                    >
                        <span>Selected: {selectedTier.name}</span>
                        <span>▼</span>
                    </button>

                    {showTierSelect && (
                        <div className="glass-panel" style={{
                            position: 'absolute', top: '110%', left: 0, right: 0,
                            zIndex: 10, padding: '0.5rem',
                            background: 'rgba(15, 12, 41, 0.95)',
                            maxHeight: '200px', overflowY: 'auto'
                        }}>
                            {Object.keys(cardTiers).map(key => (
                                <div
                                    key={key}
                                    onClick={() => handleTierSelect(key)}
                                    style={{
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        color: 'white',
                                        background: selectedTier.key === key ? 'rgba(255,255,255,0.2)' : 'transparent',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        marginBottom: '0.2rem'
                                    }}
                                    className="hover-bg"
                                >
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: cardTiers[key].color }}></div>
                                    {cardTiers[key].name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Manual Input: Card Number */}
                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={handleChange}
                        placeholder={translations.cardNumberPlaceholder}
                        style={{
                            width: '100%',
                            padding: '1rem 1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.4)',
                            color: 'white',
                            fontSize: '1.2rem',
                            letterSpacing: '2px',
                            outline: 'none',
                            textAlign: 'center'
                        }}
                    />
                </div>

                {/* Name & Expiry Row */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value.toUpperCase())}
                        placeholder="NAME ON CARD"
                        style={{
                            flex: 2,
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.4)',
                            color: 'white',
                            outline: 'none',
                            textTransform: 'uppercase'
                        }}
                    />
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        placeholder="MM/YY"
                        style={{
                            flex: 1,
                            padding: '1rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.4)',
                            color: 'white',
                            textAlign: 'center',
                            outline: 'none'
                        }}
                    />
                </div>

                <button
                    className="hover-scale"
                    type="submit"
                    disabled={!isComplete}
                    style={{
                        background: isComplete ? 'var(--primary-gradient)' : 'gray',
                        border: 'none',
                        padding: '1rem 3rem',
                        borderRadius: '50px',
                        color: 'white',
                        fontSize: '1.2rem',
                        fontWeight: 700,
                        opacity: isComplete ? 1 : 0.5,
                        cursor: isComplete ? 'pointer' : 'not-allowed',
                        boxShadow: isComplete ? '0 4px 15px rgba(0, 210, 255, 0.3)' : 'none',
                        width: '100%',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}
                >
                    Activate Benefits
                </button>
            </form>

            <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
                {translations.disclaimer}
            </p>
        </div>
    );
};

export default CardInput;
