import React, { useState, useEffect } from 'react';
import CardInput from './components/CardInput';
import BenefitsDashboard from './components/BenefitsDashboard';
import SavingsEstimator from './components/SavingsEstimator';
import SpendChart from './components/SpendChart';
import ChatAssistant from './components/ChatAssistant';
import SettingsModal from './components/SettingsModal';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import { translations, cardTiers } from './data/benefitsData';
import { auth, signOut } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hasEnteredCard, setHasEnteredCard] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('en');
  const [cardTier, setCardTier] = useState(cardTiers.CLASSIC); // Default
  const [showSettings, setShowSettings] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false); // To toggle dropdown

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Trigger re-render when key changes so dashboards update
  const [apiKey, setApiKey] = useState(() => {
    const saved = localStorage.getItem('gemini_key');
    if (saved && saved !== 'null' && saved !== 'undefined') return saved;
    return import.meta.env.VITE_GEMINI_KEY || 'AIzaSyB7zQZpheBxSd_rFKuRPY9VEeCevDiskzw';
  });

  const t = translations[lang];
  const langNames = { en: 'English', ta: 'தமிழ்', te: 'తెలుగు', hi: 'हिंदी' };
  const currentLangName = langNames[lang];

  const handleCardSubmit = (cardNumber, selectedTier) => {
    setLoading(true);
    setCardTier(selectedTier);

    // Simulate API call and AI processing
    setTimeout(() => {
      setLoading(false);
      setHasEnteredCard(true);
    }, 2000);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setHasEnteredCard(false);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="app-container" style={{ width: '100%', minHeight: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Background Flow & Grid */}
      <div className="bg-flow"></div>
      <div className="bg-grid"></div>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={(key) => setApiKey(key)}
      />

      <ChatAssistant translations={t} apiKey={apiKey} lang={lang} />

      {/* Navbar / Top Bar */}
      <div className="navbar-container" style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', position: 'relative', zIndex: 10 }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '1px' }}>
          VISA <span className="text-gradient" style={{ fontWeight: 300 }}>BENEFITS AI</span>
        </div>
        <div className="nav-controls" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={() => setShowSettings(true)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              padding: '0.5rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            className="hover-glow"
            title="AI Settings"
          >
            ⚙️
          </button>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                padding: '0.5rem 1.2rem',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)',
                fontSize: '0.9rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                cursor: 'pointer'
              }}
              className="hover-glow"
            >
              🌐 {currentLangName}
            </button>
            {showLangMenu && (
              <div className="glass-panel" style={{
                position: 'absolute', top: '120%', right: 0,
                padding: '0.8rem', borderRadius: '16px',
                display: 'flex', flexDirection: 'column', gap: '0.4rem',
                minWidth: '180px', zIndex: 100
              }}>
                {[
                  { code: 'en', name: 'English' },
                  { code: 'ta', name: 'தமிழ் (Tamil)' },
                  { code: 'te', name: 'తెలుగు (Telugu)' },
                  { code: 'hi', name: 'हिंदी (Hindi)' }
                ].map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setShowLangMenu(false); }}
                    style={{
                      background: lang === l.code ? 'var(--accent)' : 'transparent',
                      color: lang === l.code ? '#000' : 'white',
                      border: 'none', textAlign: 'left',
                      padding: '0.6rem 1rem', borderRadius: '10px', fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {user && (
            <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.3rem 0.3rem 1rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{user.displayName || 'User'}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>{user.email}</span>
              </div>
              <img
                src={user.photoURL || 'https://via.placeholder.com/40'}
                alt="Profile"
                referrerPolicy="no-referrer"
                style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid var(--accent)' }}
              />
              <button
                onClick={handleLogout}
                style={{
                  background: 'rgba(255,59,48,0.1)',
                  border: 'none',
                  color: '#ff4b40',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
                className="hover-bg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div className="glass-panel" style={{ textAlign: 'center' }}>
          <div className="spinner" style={{
            width: '50px',
            height: '50px',
            border: '3px solid rgba(255,255,255,0.1)',
            borderTop: '3px solid var(--accent)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem auto'
          }}></div>
          <p>{t.analyzing}</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      ) : !user ? (
        <Login onLoginSuccess={(u) => setUser(u)} />
      ) : (
        !hasEnteredCard ? (
          <CardInput onSubmit={handleCardSubmit} translations={t} />
        ) : (
          <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* New Features Section */}
            <div className="feature-grid animate-fade-in" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '1rem' }}>
              <SavingsEstimator translations={t} />
              <SpendChart translations={t} />
            </div>

            <BenefitsDashboard translations={t} lang={lang} cardTier={cardTier} apiKey={apiKey} />
          </div>
        )
      )}

      {/* Decorative Background Elements */}
      <div style={{
        position: 'fixed',
        top: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(26,41,128,0.4) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(38,208,206,0.2) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none',
        animation: 'float 15s ease-in-out infinite reverse'
      }}></div>

    </div>
  );
}

export default App;
