import React, { useState } from 'react';

const SavingsEstimator = ({ translations }) => {
    const [spend, setSpend] = useState(25000); // Default monthly spend

    // Logic: Avg savings is approx 5% blended across categories
    const estimatedSavings = Math.floor(spend * 0.05);
    const yearlySavings = estimatedSavings * 12;

    // Fallback if translations not loaded yet
    const t = translations || {
        savingsTitle: "Savings Estimator",
        monthlySpend: "Monthly Spend",
        monthlySave: "Monthly Save",
        yearlySave: "Yearly Save"
    };

    return (
        <div className="glass-panel hover-scale" style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                💰 {t.savingsTitle}
            </h3>

            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span>{t.monthlySpend}</span>
                    <span style={{ color: 'white' }}>₹{spend.toLocaleString()}</span>
                </div>
                <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="1000"
                    value={spend}
                    onChange={(e) => setSpend(Number(e.target.value))}
                    style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '10px',
                        appearance: 'none',
                        outline: 'none',
                        cursor: 'pointer'
                    }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                <div style={{
                    flex: 1,
                    background: 'rgba(0, 210, 255, 0.1)',
                    padding: '1rem',
                    borderRadius: '16px',
                    textAlign: 'center',
                    border: '1px solid rgba(0, 210, 255, 0.2)'
                }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.25rem' }}>{t.monthlySave}</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>₹{estimatedSavings.toLocaleString()}</p>
                </div>

                <div style={{
                    flex: 1,
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(253, 185, 49, 0.1) 100%)',
                    padding: '1rem',
                    borderRadius: '16px',
                    textAlign: 'center',
                    border: '1px solid rgba(255, 215, 0, 0.2)'
                }}>
                    <p style={{ fontSize: '0.8rem', color: '#FFD700', marginBottom: '0.25rem' }}>{t.yearlySave}</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFD700' }}>₹{yearlySavings.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default SavingsEstimator;
