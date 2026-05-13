import { Search, Mic, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Profile from "../assets/Profile.png"
import party from "../assets/party.png"
import drinking from "../assets/drinking.png"
import friends from "../assets/friends.png"
import zoya from "../assets/zoya.png"
const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      image: party,
      venue: "PRISM NIGHTCLUB",
      name: "F-Bar",
      rating: "4.1",
      day: "Friday",
      time: "10:00 PM onwards",
      note: "Zoya has been here twice",
      location: "Nocturne Rooftop",
      address: "Sector 38, Entertainment City • 13 km",
      discount: "36% OFF F&B"
    },
    {
      id: 2,
      image: drinking,
      venue: "PRISM NIGHTCLUB",
      name: "F-Bar",
      rating: "4.1",
      day: "Friday",
      time: "10:00 PM onwards",
      note: "Zoya has been here twice",
      location: "Nocturne Rooftop",
      address: "Sector 38, Entertainment City • 13 km",
      discount: "36% OFF F&B"
    },
    {
      id: 3,
      image: friends,
      venue: "PRISM NIGHTCLUB",
      name: "F-Bar",
      rating: "4.1",
      day: "Friday",
      time: "10:00 PM onwards",
      note: "Zoya has been here twice",
      location: "Nocturne Rooftop",
      address: "Sector 38, Entertainment City • 13 km",
      discount: "36% OFF F&B"
    }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px', fontWeight: '500' }}>
        Home / Party Package / <span style={{ color: 'var(--text-dark)', fontWeight: '600' }}>Selected item</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
        {/* Top bar with users */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'space-between', alignItems: 'flex-start' }}>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', width: '100%', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 auto', background: 'var(--card-bg)', borderRadius: '9999px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid var(--border-color)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ fontWeight: '600', fontSize: '15px' }}>Pick a plan you'd both enjoy</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F4F4F5', padding: '8px 16px', borderRadius: '9999px' }}>
                <img src={zoya} style={{ width: '28px', height: '28px', borderRadius: '50%' }} alt="Zoe" />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Zoe Miller, 22</span>
                <CheckCircle2 size={16} color="var(--verified-purple)" />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: '700', fontSize: '15px' }}>Alen Markram</div>
                <div style={{ fontSize: '12px', color: 'white', background: 'var(--primary-gradient)', padding: '4px 12px', borderRadius: '9999px', fontWeight: '600', marginTop: '4px', display: 'inline-block' }}>Get Verified</div>
              </div>
              <img src={Profile} style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} alt="Alen" />
            </div>
          </div>

        </div>

      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', gap: '16px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'var(--text-dark)' }}>Tonight near you</h2>
        <div className="search-bar">
          <Search size={20} color="var(--text-muted)" />
          <input type="text" placeholder="Search.." />
          <Mic size={20} color="var(--text-muted)" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '32px' }}>
        {events.map((event) => (
          <div key={event.id} onClick={() => navigate('/drinks')} style={{ cursor: 'pointer', background: 'var(--card-bg)', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.06)', border: '1px solid var(--border-color)', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '100%', height: '280px', position: 'relative' }}>
              <img src={event.image} alt={event.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

              <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(34, 197, 94, 0.2)', color: '#4ADE80', padding: '6px 16px', borderRadius: '9999px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px', backdropFilter: 'blur(8px)' }}>
                HAPPENING NOW
              </div>
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255, 255, 255, 0.2)', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '11px', fontWeight: '600', backdropFilter: 'blur(8px)' }}>
                Vibe Matches
              </div>

              <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px 24px 24px', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', color: 'white' }}>
                <div style={{ fontSize: '12px', letterSpacing: '1px', marginBottom: '8px', fontWeight: '600', opacity: 0.9 }}>{event.venue}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <h3 style={{ fontSize: '32px', fontWeight: '700', margin: 0 }}>{event.name}</h3>
                    <span style={{ background: '#FBBF24', color: '#1A1A1A', padding: '4px 8px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>★ {event.rating}</span>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '13px', fontWeight: '500' }}>
                    <div>{event.day}</div>
                    <div style={{ opacity: 0.9 }}>{event.time}</div>
                  </div>
                </div>
              </div>
              <div style={{ background: ' linear-gradient(to right, #C82CB8, #FC4B6A)', color: '#FDF2F8', padding: '8px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', position: 'absolute', bottom: -20, left: 50, right: 50, zIndex: 10, boxShadow: '0 4px 12px rgba(225, 48, 108, 0.15)' }}>
                <img src={zoya} style={{ width: '20px', height: '20px', borderRadius: '50%' }} alt="Zoya" />
                {event.note}
              </div>
            </div>

            <div style={{ padding: '24px' }}>


              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F4F4F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={20} color="var(--text-muted)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px', color: 'var(--text-dark)' }}>{event.location}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{event.address}</div>
                  </div>
                </div>
                <ChevronDown size={24} color="var(--text-muted)" />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex' }}>
                    {[1, 2, 3].map((i) => (
                      <img key={i} src={zoya} style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid white', marginLeft: i > 1 ? '-12px' : '0' }} alt="circle" />
                    ))}
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F4F4F5', border: '2px solid white', marginLeft: '-12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'var(--text-muted)' }}>22+</div>
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '500' }}>Your Circle</span>
                </div>
                <div style={{ color: 'var(--success-green)', fontWeight: '700', fontSize: '15px' }}>{event.discount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Events;
