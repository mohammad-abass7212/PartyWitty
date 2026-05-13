import { MapPin, Clock, Edit2, Hand, Flower2, Gift, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Profile from "../assets/Profile.png"
import Miller from "../assets/feed.png"
import zoya from "../assets/zoya.png"
import hotel from "../assets/hotel.png"
import bar from "../assets/bar.png"
import lemonJuice from "../assets/lemonJuice.png"

const Drinks = () => {
  const navigate = useNavigate();

  const drinks = [
    { id: 1, name: 'Dry Martini', desc: 'Mint, Lime, Electric Glow', price: '₹999', tag: 'MOST LIKELY TO GET ACCEPTED', recommended: true, image: bar },
    { id: 2, name: 'Cosmopolitan', desc: 'Mint, Lime, Electric Glow', price: '₹199', tag: 'Easy Choose', recommended: false, image: lemonJuice },
    { id: 3, name: 'Mai Tai', desc: 'Mint, Lime, Electric Glow', price: '₹899', tag: 'Most Popular', recommended: false, image: lemonJuice },
    { id: 4, name: 'Wine Glass', desc: 'Mint, Lime, Electric Glow', price: '₹2199', tag: 'Make An Impression', recommended: false, image: lemonJuice },
    { id: 5, name: 'Dry Martini', desc: 'Mint, Lime, Electric Glow', price: '₹999', tag: 'MOST LIKELY TO GET ACCEPTED', recommended: true, image: bar },
    { id: 6, name: 'Cosmopolitan', desc: 'Mint, Lime, Electric Glow', price: '₹199', tag: 'Easy Choose', recommended: false, image: bar },
    { id: 7, name: 'Mai Tai', desc: 'Mint, Lime, Electric Glow', price: '₹899', tag: 'Most Popular', recommended: false, image: bar },
    { id: 8, name: 'Wine Glass', desc: 'Mint, Lime, Electric Glow', price: '₹2199', tag: 'Make An Impression', recommended: false, image: lemonJuice },
  ];

  return (
    <div className="layout-with-right-panel" style={{ flexWrap: 'wrap' }}>
      <div style={{ width: '100%', maxWidth: '360px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <img src={Profile} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} alt="Alen" />
          <div>
            <div style={{ fontWeight: '700', fontSize: '18px', color: 'var(--text-dark)' }}>Alen Markram</div>
            <div style={{ fontSize: '12px', color: 'white', background: 'var(--primary-gradient)', padding: '6px 16px', borderRadius: '9999px', display: 'inline-block', marginTop: '6px', fontWeight: '600' }}>Get Verified</div>
          </div>
        </div>

        <div style={{ background: 'var(--card-bg)', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.06)', border: '1px solid var(--border-color)' }}>
          <img
            src={hotel}
            alt="Venue"
            style={{ width: '100%', height: '240px', objectFit: 'cover' }}
          />
          <div style={{ padding: '32px 24px 24px', marginTop: '-48px', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <img src={zoya} style={{ width: '64px', height: '64px', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} alt="Zoe" />
              <div>
                <div style={{ fontWeight: '700', fontSize: '20px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dark)' }}>
                  Zoe Miller, 22 <CheckCircle2 size={20} color="var(--verified-purple)" />
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '500' }}>Nocturne Rooftop</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', color: 'var(--text-muted)' }}>
              <MapPin size={22} />
              <div style={{ fontSize: '15px', fontWeight: '500' }}>Sector 38, Noida at ILLUSION</div>
            </div>

            <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
              <Clock size={22} />
              <div style={{ fontSize: '15px', fontWeight: '500' }}>Tonight, 10:30 PM -</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, minWidth: '320px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-dark)' }}>One Step Before Your First Move</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Verify your profile to send invites and offer drinks.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {drinks.map((drink, i) => (
            <div
              key={`${drink.id}-${i}`}
              className={`drink-card`}
              onClick={() => navigate('/checkout')}
              style={{
                background: drink.recommended
                  ? 'linear-gradient(#F3F4F6, #F3F4F6) padding-box, linear-gradient(90deg, #c026d3, #e11d48) border-box'
                  : '#F3F4F6',
                border: drink.recommended ? '2px solid transparent' : '2px solid transparent',
                borderRadius: '24px',
                padding: 0,
                display: 'flex',
                alignItems: 'stretch',
                cursor: 'pointer',
                position: 'relative',
                minHeight: '120px',
                boxShadow: drink.recommended ? '0 8px 24px rgba(225, 48, 108, 0.1)' : 'none',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = drink.recommended ? '0 8px 24px rgba(225, 48, 108, 0.1)' : 'none'; }}
            >
              <img
                src={drink.image}
                alt={drink.name}
                style={{
                  width: '110px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '22px',
                  borderBottomLeftRadius: '22px'
                }}
              />

              <div style={{ flex: 1, padding: '16px 20px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: 'linear-gradient(90deg, #c026d3, #e11d48)',
                  color: 'white',
                  padding: '6px 16px',
                  borderTopRightRadius: '22px',
                  borderBottomLeftRadius: '16px',
                  fontSize: '13px',
                  fontWeight: '700'
                }}>
                  {drink.price}
                </div>

                <div style={{ fontWeight: '800', fontSize: '18px', color: '#1f2937', marginBottom: '6px', paddingRight: '40px' }}>
                  {drink.name}
                </div>

                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '14px', fontWeight: '500' }}>
                  {drink.desc}
                </div>

                <div style={{
                  background: drink.recommended ? '#dcfce7' : '#fce7f3',
                  color: drink.recommended ? '#16a34a' : '#d946ef',
                  padding: '6px 12px',
                  borderRadius: '12px',
                  fontSize: '9.5px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  alignSelf: 'flex-start'
                }}>
                  {drink.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: 'var(--card-bg)', padding: '24px 16px', borderRadius: '24px', textAlign: 'center', cursor: 'pointer', border: '1px solid var(--border-color)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Hand size={28} color="#E1306C" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-dark)' }}>Wave</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>FREE</div>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '24px 16px', borderRadius: '24px', textAlign: 'center', cursor: 'pointer', border: '1px solid var(--border-color)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Flower2 size={28} color="#E1306C" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-dark)' }}>Send a Rose</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>₹10</div>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '24px 16px', borderRadius: '24px', textAlign: 'center', cursor: 'pointer', border: '1px solid var(--border-color)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <Gift size={28} color="#E1306C" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-dark)' }}>Chocolate</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>₹25</div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>A Little About Me</div>
          <div style={{ background: 'var(--card-bg)', padding: '20px', borderRadius: '24px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', color: 'var(--text-dark)', fontWeight: '500' }}>Hey, I'm Aman, into good music and chill nights</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F4F4F5', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Edit2 size={18} color="var(--text-muted)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
