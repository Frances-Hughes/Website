import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="languagesspoken/" element={<Languages />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
