import React, { useState } from 'react';

const SpendChart = ({ translations }) => {
    // Fallback
    const t = translations || {
        spendTitle: "Spend Analysis",
        travel: "Travel",
        dining: "Dining",
        shop: "Shop",
        spendNote: "*Based on last 3 months activity"
    };

    const data = [
        { label: t.travel, value: 30, color: '#00d2ff' },
        { label: t.dining, value: 45, color: '#3a7bd5' },
        { label: t.shop, value: 25, color: '#26d0ce' },
    ];

    return (
        <div className="glass-panel hover-scale" style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📊 {t.spendTitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.map((item) => (
                    <div key={item.label}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                            <span style={{ fontWeight: 600 }}>{item.value}%</span>
                        </div>
                        <div style={{
                            width: '100%',
                            height: '10px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '5px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                width: `${item.value}%`,
                                height: '100%',
                                background: item.color,
                                borderRadius: '5px',
                                transition: 'width 1s ease-out',
                                boxShadow: `0 0 10px ${item.color}`
                            }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                {t.spendNote}
            </p>
        </div>
    );
};

export default SpendChart;
