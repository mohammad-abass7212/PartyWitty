import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ClipboardList,
  Gavel,
  RefreshCcw,
  Search,
  MessageSquare,
  Bell,
  Bookmark,
  Wallet,
  ArrowUpRight
} from 'lucide-react';
import Profile from "../assets/profile.png"
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"

const SidebarToggleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
    <path d="M15 3v18" />
  </svg>
);

const MoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="14" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="10" y2="18" />
  </svg>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { icon: ClipboardList, label: 'My Plan', path: '/' },
    { icon: Gavel, label: 'My Bids', path: '/bids' },
    { icon: RefreshCcw, label: 'My Booking', path: '/events' },
    { icon: Search, label: 'Search', path: '/drinks' },
    { icon: MessageSquare, label: 'Chat Room', path: '/chat' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: Bookmark, label: 'Save & Like', path: '/saved' },
    { icon: Wallet, label: 'Rewards', path: '/checkout' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'mobile-expanded'}`}>
      <div className="sidebar-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexShrink: 0, marginBottom: '24px', position: 'relative' }}>
        <div className="logo-full" style={{ flex: 1, minWidth: 0 }}>
          <img src={logo} alt="partywitty" style={{ width: '100%', maxWidth: '160px', height: 'auto', objectFit: 'contain', objectPosition: 'left' }} />
        </div>

        <div className="logo-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginRight: "20px" }}>
          <img src={logo2} alt="partywitty" style={{
            width: '35px',
            height: '35px', objectFit: 'contain'
          }} />
        </div>

        <button
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            zIndex: "9999",
            background: 'rgba(119, 70, 255, 0.27)',
            color: '#7C4DFF',
            border: 'none',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <SidebarToggleIcon />
        </button>
      </div>

      <nav className="sidebar-nav" style={{ alignItems: isCollapsed ? 'center' : 'stretch', gap: '4px', flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: '20px' }}>
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.label}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''} ${isCollapsed ? 'collapsed-item' : ''}`}
            title={isCollapsed ? item.label : ''}
            style={{ padding: isCollapsed ? '12px 0' : '14px 16px' }}
          >
            <item.icon size={24} strokeWidth={1.5} />
            <span className="nav-label" style={{ fontSize: '15px', fontWeight: '600' }}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer" style={{ alignItems: isCollapsed ? 'center' : 'stretch', flexDirection: 'column', flexShrink: 0, paddingTop: '16px' }}>
        <div className={`nav-item ${isCollapsed ? 'collapsed-item' : ''}`} style={{ cursor: 'pointer', justifyContent: isCollapsed ? 'center' : 'flex-start', padding: isCollapsed ? '12px 0' : '10px 16px', color: 'var(--text-dark)' }}>
          <MoreIcon />
          <span className="nav-label" style={{ fontSize: '15px', fontWeight: '600' }}>More</span>
        </div>

        <div className="offer-banner" style={{ background: '#111827', color: 'white', padding: '16px', borderRadius: '16px', marginTop: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ color: '#FBBF24', fontSize: '11px', fontWeight: '700', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            <span style={{ fontSize: '16px' }}>👑</span> Corporate Employee Offer
          </div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#FBBF24' }}>
            <span style={{ color: 'white' }}>1 Month For </span>₹1
          </div>
        </div>

        <div className="user-profile-mini" style={{ justifyContent: isCollapsed ? 'center' : 'flex-start', marginTop: '16px', position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <img src={Profile} alt="Zeeshan" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
            <div className="crown-badge" style={{ position: 'absolute', top: '-6px', left: '-6px', background: '#111827', borderRadius: '50%', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '10px' }}>👑</span>
            </div>
          </div>
          <div className="user-details" style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: 0 }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Zeeshan Ahmad</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Indus Global Pvt Ltd Admin</div>
            </div>
            <ArrowUpRight size={18} color="var(--text-dark)" style={{ flexShrink: 0, marginLeft: '8px' }} />
          </div>
        </div>
      </div>
    </aside >
  );
};

export default Sidebar;
