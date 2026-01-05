import React, { useState, useEffect } from 'react';
import { benefitsData, benefitTranslations } from '../data/benefitsData';
import { generateAIInsight } from '../utils/gemini';

const BenefitsDashboard = ({ translations, lang, cardTier }) => {
    const [expandedId, setExpandedId] = useState(null);
    const [aiInsights, setAiInsights] = useState({});
    const [loadingAI, setLoadingAI] = useState({});

    // Filter benefits based on Card Tier and Merge Translations
    const filteredBenefits = benefitsData
        .filter(b => b.tier.includes(cardTier.key))
        .map(b => {
            if (lang !== 'en' && benefitTranslations[b.id] && benefitTranslations[b.id][lang]) {
                return { ...b, ...benefitTranslations[b.id][lang] };
            }
            return b;
        });

    // Determine recommendation
    const recommendation = filteredBenefits.find(b => b.category === 'Travel') || filteredBenefits[0];

    const toggleExpand = async (id) => {
        const isExpanding = expandedId !== id;
        setExpandedId(isExpanding ? id : null);

        if (isExpanding) {
            const apiKey = localStorage.getItem('gemini_key');
            if (apiKey && !aiInsights[`${id}-${lang}`]) {
                setLoadingAI(prev => ({ ...prev, [id]: true }));
                const benefit = benefitsData.find(b => b.id === id);
                try {
                    const insight = await generateAIInsight(apiKey, lang, benefit.title, benefit.terms);
                    if (insight) {
                        setAiInsights(prev => ({ ...prev, [`${id}-${lang}`]: insight }));
                    }
                } catch (e) {
                    console.error("AI Error", e);
                } finally {
                    setLoadingAI(prev => ({ ...prev, [id]: false }));
                }
            }
        }
    };

    return (
        <div className="animate-fade-in" style={{ width: '100%', maxWidth: '1200px', padding: '0 1rem' }}>

            {/* Header: Card Tier Badge */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    background: cardTier.color,
                    padding: '0.5rem 1.5rem',
                    borderRadius: '20px',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    fontWeight: 'bold',
                    letterSpacing: '1px'
                }}>
                    {cardTier.name}
                </div>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {translations.benefitsTitle}
                </h2>
                <p style={{ color: 'var(--text-secondary)' }}>Based on your tier: {cardTier.name} • Student Profile</p>
            </div>

            {/* AI Recommendation Highlight */}
            {recommendation && (
                <div className="glass-panel hover-scale" style={{
                    marginBottom: '3rem',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 210, 255, 0.1) 100%)',
                    border: '1px solid rgba(0, 210, 255, 0.3)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <span style={{ fontSize: '2rem' }}>✨</span>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{translations.recommended}</h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--accent)' }}>{recommendation.title}</h4>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{recommendation.description}</p>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
                                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>AI Insight:</strong>
                                {recommendation.aiSummary}
                            </div>
                        </div>
                        <div style={{ fontSize: '4rem' }}>{recommendation.icon}</div>
                    </div>
                </div>
            )}

            {/* Benefits Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {filteredBenefits.map(benefit => (
                    <div key={benefit.id} className="glass-panel hover-scale" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                                {benefit.icon}
                            </div>
                            <span style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', color: 'var(--accent)' }}>
                                {benefit.category}
                            </span>
                        </div>

                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{benefit.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>
                            {benefit.shortDesc}
                        </p>

                        <button
                            onClick={() => toggleExpand(benefit.id)}
                            style={{
                                background: 'transparent',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                alignSelf: 'start',
                                fontSize: '0.9rem',
                                cursor: 'pointer'
                            }}
                        >
                            {expandedId === benefit.id ? 'Close' : translations.viewDetails}
                        </button>

                        {expandedId === benefit.id && (
                            <div className="animate-fade-in" style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>Full Terms:</p>
                                <p style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>{benefit.terms}</p>

                                <div style={{ background: 'rgba(0, 210, 255, 0.1)', padding: '0.75rem', borderRadius: '8px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>AI Simplified:</p>
                                        {localStorage.getItem('gemini_key') && (
                                            <span style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', background: 'rgba(0, 210, 255, 0.2)', color: 'var(--accent)' }}>LIVE GEMINI 1.5</span>
                                        )}
                                    </div>
                                    {loadingAI[benefit.id] ? (
                                        <p style={{ fontSize: '0.8rem', fontStyle: 'italic', opacity: 0.7 }}>Generating insight with Gemini...</p>
                                    ) : (
                                        <p style={{ fontSize: '0.8rem' }}>
                                            {aiInsights[`${benefit.id}-${lang}`] || benefit.aiSummary}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BenefitsDashboard;
