import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Camera, Sun, RefreshCcw, Sparkles, Trash2, Users, Copy, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FaceScan from "../assets/FaceScan.png"
const VerificationModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState('intro'); // intro, scan, verified, photos

  // Handle simulated scan progress
  useEffect(() => {
    let timer;
    if (step === 'scan') {
      timer = setTimeout(() => {
        setStep('verified');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  if (!isOpen) return null;

  const renderIntro = () => (
    <>
      <div style={{ margin: '0 auto 32px', width: '120px', height: '160px', border: '2px dashed #CBD5E1', borderRadius: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ width: '80px', height: '100px', border: '4px solid #475569', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '4px solid #475569', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '8px', left: '6px', width: '4px', height: '4px', background: '#475569', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: '8px', right: '6px', width: '4px', height: '4px', background: '#475569', borderRadius: '50%' }} />
          </div>
        </div>
        <div style={{ position: 'absolute', top: '16px', right: '-8px', background: '#94A3B8', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
          <CheckCircle2 size={18} color="white" />
        </div>
      </div>

      <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px', textAlign: 'center', color: 'var(--text-dark)' }}>You're one step away</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '16px', textAlign: 'center', lineHeight: '1.5' }}>
        Verify your profile to send this invite and connect with people around you.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
          <CheckCircle2 size={18} color="var(--success-green)" /> Builds trust instantly
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
          <CheckCircle2 size={18} color="var(--success-green)" /> Better chances she accepts
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
          <CheckCircle2 size={18} color="var(--success-green)" /> Unlocks special invites
        </div>
      </div>

      <button
        onClick={() => setStep('scan')}
        className="primary-btn"
        style={{ marginBottom: '20px', padding: '18px' }}
      >
        Verify & Send Invite
      </button>

      <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '1px', textAlign: 'center' }}>
        TAKES LESS THAN 30 SECONDS
      </div>
    </>
  );

  const renderScan = () => (
    <div style={{ position: 'relative', width: '100%', height: '540px', borderRadius: '24px', overflow: 'hidden', background: '#000' }}>
      <img
        src={FaceScan}
        alt="Face Scan"
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
      />

      {/* Face Guide Overlay */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '260px', height: '340px', border: '3px solid rgba(255,255,255,0.6)', borderRadius: '130px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-3px', left: '50%', transform: 'translateX(-50%)', width: '24px', height: '6px', background: 'white', borderRadius: '3px' }} />
          <div style={{ position: 'absolute', bottom: '-3px', left: '50%', transform: 'translateX(-50%)', width: '24px', height: '6px', background: 'white', borderRadius: '3px' }} />

          <div style={{ position: 'absolute', top: '48px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)', color: 'white', padding: '10px 20px', borderRadius: '9999px', fontSize: '15px', fontWeight: '600', whiteSpace: 'nowrap' }}>
            Look straight
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '120px', left: '0', right: '0', textAlign: 'center', color: 'white' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Keep your face within the frame</h3>
        <p style={{ fontSize: '14px', opacity: 0.9, fontWeight: '500' }}>Center your face and wait for the scan to start</p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', padding: '10px 20px', borderRadius: '9999px', marginTop: '20px', fontSize: '13px', fontWeight: '600' }}>
          <ShieldCheck size={18} /> Used only for verification
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '32px', left: '0', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
        <button style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
          <RefreshCcw size={24} />
        </button>
        <button
          onClick={() => setStep('verified')}
          style={{ width: '72px', height: '72px', borderRadius: '50%', border: '4px solid white', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'white' }} />
        </button>
        <button style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
          <Sun size={24} />
        </button>
      </div>
    </div>
  );

  const renderVerified = () => (
    <div style={{ textAlign: 'center', padding: '32px 0' }}>
      <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto 40px' }}>
        <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--border-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '140px', height: '140px', borderRadius: '50%', background: 'linear-gradient(180deg, #0F766E 0%, #042F2E 100%)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '70px', height: '50px', background: '#475569', borderTopLeftRadius: '35px', borderTopRightRadius: '35px' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--text-dark)', color: 'white', fontSize: '9px', padding: '4px 10px', borderRadius: '6px', zIndex: 2, fontWeight: '700' }}>VERIFIED</div>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', background: 'var(--success-green)', color: 'white', display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', borderRadius: '9999px', fontSize: '11px', fontWeight: '700', zIndex: 2, whiteSpace: 'nowrap' }}>
              <CheckCircle2 size={14} /> VERIFIED
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '0', right: '4px', background: 'var(--verified-purple)', padding: '10px', borderRadius: '50%', color: 'white', boxShadow: '0 4px 12px rgba(124, 77, 255, 0.4)' }}>
          <Sparkles size={18} />
        </div>
        <div style={{ position: 'absolute', bottom: '24px', left: '-8px', background: 'var(--verified-purple)', padding: '8px', borderRadius: '50%', color: 'white', boxShadow: '0 4px 12px rgba(124, 77, 255, 0.4)' }}>
          <CheckCircle2 size={14} />
        </div>
      </div>

      <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>You're verified</h2>
      <p style={{ color: 'var(--text-muted)', fontWeight: '500', marginBottom: '40px', fontSize: '16px' }}>No fake vibes here. You're almost in</p>

      <div style={{ marginBottom: '40px' }}>
        <div style={{ width: '100%', height: '8px', background: '#F4F4F5', borderRadius: '4px', overflow: 'hidden', marginBottom: '12px' }}>
          <div style={{ width: '98.4%', height: '100%', background: 'linear-gradient(90deg, #7C4DFF, #3B82F6)', borderRadius: '4px' }} />
        </div>
        <div style={{ fontSize: '13px', color: 'var(--verified-purple)', fontWeight: '700', letterSpacing: '1px' }}>IDENTITY MATCH 98.4%</div>
      </div>

      <button
        onClick={() => setStep('photos')}
        style={{ width: '100%', padding: '18px', background: 'var(--verified-purple)', color: 'white', borderRadius: '9999px', fontSize: '18px', fontWeight: '700', marginBottom: '20px', boxShadow: '0 8px 24px rgba(124, 77, 255, 0.3)', transition: 'transform 0.2s' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        Go to Dashboard
      </button>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '500' }}>No fake vibes here. You're almost in</p>
    </div>
  );

  const renderPhotos = () => (
    <div>
      <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>Show your vibe</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '16px', fontWeight: '500' }}>Add up to 6 photos people will actually vibe with</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
        <span style={{ fontSize: '13px', fontWeight: '700', whiteSpace: 'nowrap', color: 'var(--text-dark)' }}>3/6 ADDED</span>
        <div style={{ flex: 1, height: '6px', background: 'var(--border-color)', borderRadius: '3px' }}>
          <div style={{ width: '50%', height: '100%', background: 'var(--text-dark)', borderRadius: '3px' }} />
        </div>
      </div>

      <div style={{ background: '#F4F4F5', borderRadius: '16px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
        <Sparkles size={20} color="var(--text-muted)" />
        <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-dark)' }}>Profiles with 4+ photos get 3x more invites</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '32px' }}>
        <div style={{ aspectRatio: '3/4', background: '#F4F4F5', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', cursor: 'pointer', border: '2px dashed var(--border-color)', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#E4E4E7'} onMouseLeave={(e) => e.currentTarget.style.background = '#F4F4F5'}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Plus size={24} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: '600' }}>+ Add Photo</span>
        </div>

        <div style={{ aspectRatio: '3/4', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" alt="Vibe 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button style={{ position: 'absolute', bottom: '12px', left: '12px', background: '#EF4444', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
            <Trash2 size={16} />
          </button>
        </div>

        <div style={{ aspectRatio: '3/4', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400" alt="Vibe 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button style={{ position: 'absolute', bottom: '12px', left: '12px', background: '#EF4444', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
            <Trash2 size={16} />
          </button>
        </div>

        <div style={{ aspectRatio: '3/4', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400" alt="Vibe 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <button style={{ position: 'absolute', bottom: '12px', left: '12px', background: '#EF4444', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
            <Trash2 size={16} />
          </button>
        </div>

        <div style={{ aspectRatio: '3/4', background: '#F4F4F5', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Users size={24} />
          </div>
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', marginBottom: '4px' }}>HINT</span>
          <span style={{ fontSize: '13px', fontWeight: '500' }}>With friends</span>
        </div>

        <div style={{ aspectRatio: '3/4', background: '#F4F4F5', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'white', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Copy size={24} />
          </div>
          <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', marginBottom: '4px' }}>HINT</span>
          <span style={{ fontSize: '13px', fontWeight: '500' }}>Candid posed</span>
        </div>
      </div>

      <button
        onClick={() => { onClose(); navigate('/'); }}
        className="secondary-btn"
        style={{ width: '100%', padding: '18px' }}
      >
        Finish Setup
      </button>
    </div>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ position: 'relative', padding: step === 'scan' ? '24px' : '48px', maxWidth: step === 'photos' ? '640px' : '520px' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '24px', right: '24px', background: '#F4F4F5', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', zIndex: 10, transition: 'background 0.2s' }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#E4E4E7'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#F4F4F5'}
        >
          <X size={24} />
        </button>

        {step !== 'intro' && (
          <div style={{ position: 'absolute', top: '32px', left: '32px', fontSize: '15px', fontWeight: '600', color: 'var(--text-muted)', zIndex: 10 }}>
            Verification Success
          </div>
        )}

        {step === 'intro' && renderIntro()}
        {step === 'scan' && renderScan()}
        {step === 'verified' && renderVerified()}
        {step === 'photos' && renderPhotos()}
      </div>
    </div>
  );
};

export default VerificationModal;
