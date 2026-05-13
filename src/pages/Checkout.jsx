import { useState } from 'react';
import { ArrowLeft, MapPin, CheckCircle2, ShieldCheck, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VerificationModal from '../components/VerificationModal';
import logo from '../assets/logo.png'
import zoya from "../assets/zoya.png"
const Checkout = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', fontWeight: '600', color: 'var(--text-dark)' }}>
          <ArrowLeft size={24} /> Back
        </button>
        <div style={{ fontSize: '20px', fontWeight: '700', background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={logo} alt="" />
        </div>
      </div>

      <div style={{ background: 'var(--card-bg)', borderRadius: '32px', padding: '40px', boxShadow: '0 12px 32px rgba(0,0,0,0.06)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-dark)' }}>
              Illusion <span style={{ color: '#FBBF24', fontSize: '18px' }}>★ 4.1</span> <span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-muted)', textDecoration: 'underline' }}>Review (03)</span>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src={zoya} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} alt="Zoe" />
              <div>
                <div style={{ fontSize: '20px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px', color: 'var(--text-dark)' }}>
                  Zoe Miller, 22 <CheckCircle2 size={20} color="var(--verified-purple)" />
                </div>
                <div style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: '500' }}>Nocturne Rooftop</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>
                  <MapPin size={14} /> Sector 38, Entertainment City • 13 km
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: '#F4F4F5', padding: '16px 20px', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.5px' }}>OCT</div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-dark)' }}>24</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '700', marginBottom: '20px', fontSize: '16px', color: 'var(--text-dark)' }}>
          <div>Tickets Price</div>
          <div>₹59.00</div>
        </div>

        <div style={{ background: '#F9FAFB', borderRadius: '24px', padding: '24px', display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px', border: '1px solid var(--border-color)' }}>
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=150" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} alt="Drink" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '6px', color: 'var(--text-dark)' }}>Wine Glass</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '12px', fontWeight: '500' }}>Mint, Lime, Electric Glow</div>
            <div style={{ background: '#DCFCE7', color: '#166534', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', display: 'inline-block', fontWeight: '600' }}>
              You only pay for the drink if they accept your invite
            </div>
          </div>
          <div style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-dark)' }}>₹2199</div>
        </div>

        <div style={{ marginBottom: '40px', borderTop: '1px solid var(--border-color)', paddingTop: '32px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-dark)' }}>Bill Details</h3>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '15px', color: 'var(--text-muted)', fontWeight: '500' }}>
            <div>Tickets Amount</div>
            <div>₹59.00</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '15px', color: 'var(--verified-purple)', fontWeight: '500', textDecoration: 'underline' }}>
            <div>Platform & Other Charges</div>
            <div>₹5.90</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '20px', color: 'var(--text-dark)' }}>
            <div>Grand Total</div>
            <div>₹64.90</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <input type="checkbox" id="terms" style={{ width: '24px', height: '24px', accentColor: 'var(--verified-purple)', cursor: 'pointer' }} />
          <label htmlFor="terms" style={{ fontSize: '15px', color: 'var(--text-muted)', fontWeight: '500', cursor: 'pointer' }}>
            I agree to the <span style={{ color: 'var(--verified-purple)', fontWeight: '600' }}>Terms of Service</span> and <span style={{ color: 'var(--verified-purple)', fontWeight: '600' }}>Privacy Policy</span>.
          </label>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{ width: '64px', height: '64px', borderRadius: '32px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <ShieldCheck size={28} color="var(--verified-purple)" />
          </button>
          <button style={{ width: '64px', height: '64px', borderRadius: '32px', background: 'var(--verified-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 12px rgba(124, 77, 255, 0.3)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <MoreHorizontal size={28} />
          </button>
          <button
            style={{ flex: 1, maxWidth: '400px', background: 'var(--secondary-gradient)', color: 'white', borderRadius: '32px', fontSize: '18px', fontWeight: '700', padding: '0 32px', boxShadow: '0 8px 24px rgba(124, 77, 255, 0.3)', transition: 'transform 0.2s' }}
            onClick={() => setShowModal(true)}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Make The Move Now
          </button>
        </div>
      </div>

      <VerificationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Checkout;
