import { X, Heart, Eye, Flame, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Miller from "../assets/feed.png"
import Profile from "../assets/profile.png"
import lemonJuice from "../assets/lemonJuice.png"
const Feed = () => {
  const navigate = useNavigate();

  return (
    <div className="layout-with-right-panel">
      <div className="center-panel">
        <button style={{
          background: '#4F46E5',
          color: 'white',
          padding: '12px 32px',
          borderRadius: '9999px',
          fontWeight: '600',
          fontSize: '15px',
          letterSpacing: '0.5px',
          border: 'none',
          marginBottom: '24px',
          boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
        }}>
          EXPLORE FEED
        </button>

        <div style={{
          width: '100%',
          maxWidth: '420px',
          aspectRatio: '0.7',
          borderRadius: '32px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.15)'
        }}>
          <img
            src={Miller}
            alt="Zoe Miller"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* Story Progress Bars */}
          <div style={{ position: 'absolute', top: '16px', left: '16px', right: '16px', display: 'flex', gap: '8px' }}>
            <div style={{ flex: 1, height: '4px', background: 'white', borderRadius: '2px' }} />
            <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
            <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
            <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }} />
          </div>

          <div style={{ position: 'absolute', top: '32px', left: '16px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: '9999px', color: 'white', fontSize: '11px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Flame size={14} color="white" /> Matches Your Vibe
          </div>

          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            padding: '80px 20px 20px',
            background: 'linear-gradient(to top, rgba(15,10,20,0.95) 0%, rgba(15,10,20,0.8) 30%, transparent 100%)',
            color: 'white'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '-0.5px' }}>
                  Zoe Miller, 22
                  <CheckCircle2 size={20} color="white" fill="transparent" />
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>4 Mutual Mates</div>
              </div>
              <button style={{
                background: 'var(--primary-gradient)',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '9999px',
                fontWeight: '600',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(225, 48, 108, 0.4)'
              }}>
                <span style={{ fontSize: '16px' }}>+</span> Mate
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '500' }}>Bollywood Nights</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '500' }}>Chill Crowd</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 14px', borderRadius: '9999px', fontSize: '12px', fontWeight: '500' }}>Party Regular</span>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '24px',
          background: 'radial-gradient(ellipse at top, rgba(225, 48, 108, 0.15) 0%, transparent 70%)',
          paddingTop: '20px',
          width: '100%',
          maxWidth: '420px'
        }}>
          <button style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#E5E7EB',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4B5563',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}>
            <X size={24} />
          </button>

          <button onClick={() => navigate('/events')} style={{
            background: 'var(--primary-gradient)',
            color: 'white',
            padding: '0 32px',
            height: '56px',
            borderRadius: '28px',
            fontWeight: '600',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            border: 'none',
            boxShadow: '0 8px 24px rgba(225, 48, 108, 0.3)'
          }}>
            <Flame size={22} color="white" />
            Go Tonight
          </button>

          <button style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#FCE7F3',
            border: '1px solid #FBCFE8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#DB2777',
            boxShadow: '0 4px 12px rgba(219, 39, 119, 0.1)'
          }}>
            <Heart size={24} />
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img
            src={Profile}
            alt="User"
            style={{ width: '88px', height: '88px', borderRadius: '50%', marginBottom: '16px', border: '4px solid white', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
          />
          <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-dark)' }}>Make Your First Move</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            Verify your profile to start sending invites and offering drinks.
          </p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '24px' }}>How It Works</h3>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <img src={lemonJuice} alt="Spot" style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ background: '#E1306C', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700' }}>1</span>
                <Eye size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>Spot Your Person</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4' }}>Pick someone you'd genuinely enjoy going out with.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <img src={lemonJuice} alt="Drink" style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ background: '#E1306C', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700' }}>2</span>
                <Eye size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>Send a Drink</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4' }}>Offer their first drink your way of saying let's go out.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <img src={lemonJuice} alt="Accept" style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ background: '#E1306C', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '700' }}>3</span>
                <Eye size={16} color="var(--text-muted)" />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>They Accept — You're Set</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4' }}>Once accepted, it's a confirmed plan. No endless chatting.</p>
            </div>
          </div>
        </div>

        <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
          {['Get noticed faster', 'Higher chances your invite gets accepted', 'Unlock drink invites & premium interactions', 'Build trust with every profile visit'].map((text, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', marginBottom: '16px', color: 'var(--text-dark)', fontWeight: '500' }}>
              <CheckCircle2 size={18} color="var(--success-green)" /> {text}
            </li>
          ))}
        </ul>

        <button className="primary-btn" style={{ marginBottom: '16px' }}>Get Verified</button>
        <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>
          Takes less than 60 seconds
          <div style={{ marginTop: '8px' }}>
            <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'var(--text-dark)', fontWeight: '600' }}>Maybe later</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
