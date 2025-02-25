import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './app/page';
import Manifesto from './app/manifesto/page';
import Docs from './app/docs/page';
import Changelog from './app/changelog/page';
import Roadmap from './app/roadmap/page';
import Support from './app/support/page';
import Contact from './app/contact/page';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;