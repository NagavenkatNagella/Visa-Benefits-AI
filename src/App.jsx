import React, { useState } from 'react';
import CardInput from './components/CardInput';
import BenefitsDashboard from './components/BenefitsDashboard';
import SavingsEstimator from './components/SavingsEstimator';
import SpendChart from './components/SpendChart';
import ChatAssistant from './components/ChatAssistant';
import SettingsModal from './components/SettingsModal';
import SplashScreen from './components/SplashScreen';
import { translations, cardTiers } from './data/benefitsData';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hasEnteredCard, setHasEnteredCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState('en');
  const [cardTier, setCardTier] = useState(cardTiers.CLASSIC); // Default
  const [showSettings, setShowSettings] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false); // To toggle dropdown
  // Trigger re-render when key changes so dashboards update
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_key'));

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

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="app-container" style={{ width: '100%', minHeight: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Background Grid */}
      <div className="bg-grid"></div>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={(key) => setApiKey(key)}
      />

      <ChatAssistant translations={t} />

      {/* Navbar / Top Bar */}
      <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '1px' }}>
          VISA <span style={{ color: 'var(--accent)', fontWeight: 300 }}>BENEFITS AI</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => setShowSettings(true)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: 'white',
              padding: '0.5rem',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
            title="AI Settings"
          >
            ⚙️
          </button>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                fontSize: '0.9rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              🌐 {currentLangName}
            </button>
            {showLangMenu && (
              <div className="glass-panel" style={{
                position: 'absolute', top: '120%', right: 0,
                padding: '0.5rem', borderRadius: '12px',
                display: 'flex', flexDirection: 'column', gap: '0.5rem',
                minWidth: '150px', zIndex: 100
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
                      background: lang === l.code ? 'rgba(255,255,255,0.2)' : 'transparent',
                      border: 'none', color: 'white', textAlign: 'left',
                      padding: '0.5rem', borderRadius: '8px', fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                    className="hover-bg"
                  >
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>
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
      ) : (
        !hasEnteredCard ? (
          <CardInput onSubmit={handleCardSubmit} translations={t} />
        ) : (
          <div style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* New Features Section */}
            <div className="animate-fade-in" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '1rem' }}>
              <SavingsEstimator translations={t} />
              <SpendChart translations={t} />
            </div>

            <BenefitsDashboard translations={t} lang={lang} cardTier={cardTier} />
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
