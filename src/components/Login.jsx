import React from 'react';
import { auth, googleProvider, signInWithPopup } from '../utils/firebase';

const Login = ({ onLoginSuccess }) => {
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            onLoginSuccess(result.user);
        } catch (error) {
            console.error("Login Error:", error);
            alert("Login failed: " + error.message);
        }
    };

    return (
        <div className="animate-fade-in" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh'
        }}>
            <div className="glass-panel" style={{
                padding: '3rem',
                textAlign: 'center',
                maxWidth: '400px',
                width: '100%',
                background: 'rgba(15, 12, 41, 0.8)',
                border: '1px solid rgba(0, 210, 255, 0.3)'
            }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🔐</div>
                <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }} className="text-gradient">Welcome Back</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                    Sign in to access your personalized Visa benefits and AI assistant.
                </p>

                <button
                    onClick={handleGoogleLogin}
                    className="hover-glow"
                    style={{
                        background: 'white',
                        color: '#0f0c29',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '30px',
                        fontWeight: 700,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        width: '100%',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        style={{ width: '20px', height: '20px' }}
                    />
                    Sign in with Google
                </button>

                <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                    Secure authentication powered by Firebase
                </p>
            </div>
        </div>
    );
};

export default Login;
