import './App.css';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Info from './Components/Game Page/Info';
import Login from './Components/Login/login';
import Loading from './Components/Loading/loading';
import Intro from './Components/Intro/Intro';
import Profile from './Components/Profile/Profile';

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const hasPlayedIntro = sessionStorage.getItem('introPlayed');

      if (!hasPlayedIntro) {
        setShowIntro(true);
        setTimeout(() => {
          sessionStorage.setItem('introPlayed', 'true');
          setShowIntro(false);
          setShowLoading(true);
          setTimeout(() => {
            setShowLoading(false);
            navigate('/');
          }, 2000);
        }, 16000);
      } else {
        setShowLoading(true);
        setTimeout(() => {
          setShowLoading(false);
          navigate('/');
        }, 3000);
      }
    }
  }, [navigate, location.pathname]);

  return (
    <div className="App">
      {showIntro && <Intro />}
      {showLoading && <Loading />}
      {!showIntro && !showLoading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
