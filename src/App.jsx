import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Feed from './pages/Feed';
import Events from './pages/Events';
import Drinks from './pages/Drinks';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/events" element={<Events />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
