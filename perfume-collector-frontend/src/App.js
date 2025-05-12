import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Detail from './pages/Detail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/perfume/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;