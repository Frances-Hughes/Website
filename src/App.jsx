import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Hobbies from './components/Hobbies';
import Tech from './components/Tech';
import CV from './components/CV';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="languagesspoken/" element={<Languages />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
