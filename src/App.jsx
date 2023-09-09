import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import React from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    axios
      .get('https://api.github.com/users/vittorRafael')
      .then((r) => setUser(r.data));
  }, []);

  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Home />} />
          <Route path="/contato" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
