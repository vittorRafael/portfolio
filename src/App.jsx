import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import React from 'react';
import axios from 'axios';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import InfoProjeto from './components/pages/InfoProjeto';

function App() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    axios
      .get('https://api.github.com/users/vittorRafael')
      .then((r) => setUser(r.data));
  }, []);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full grid grid-cols-1 grid-rows-layout scroll-local">
      <Router>
        <Header user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Home />} />
          <Route path="/contato" element={<Home />} />
          <Route path="/projeto/:id" element={<InfoProjeto />} />
        </Routes>
        <button
          onClick={toTop}
          className="text-sky-600 hover:text-sky-900 hover:text-lg transition-all duration-300"
        >
          Voltar para o topo &uarr;
        </button>
        <Footer user={user} />
      </Router>
    </section>
  );
}

export default App;
