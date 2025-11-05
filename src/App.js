import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oriz from "./pages/Oriz";
import Supa from "./pages/Supa";
import Mish from "./pages/Mish";
import Peshk from "./pages/Peshk";
import Embelsira from "./pages/Embelsira";
import Keshilla from "./pages/Keshilla";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Antipasta from "./pages/Antipasta"; 
import Makarona from "./pages/Makarona";   
import ScrollToTop from "./components/ScrollToTop";
import TestForm from "./pages/TestForm";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oriz" element={<Oriz />} />
        <Route path="/supa" element={<Supa />} />
        <Route path="/mish" element={<Mish />} />
        <Route path="/peshk" element={<Peshk />} />
        <Route path="/embelsira" element={<Embelsira />} />
        <Route path="/antipasta" element={<Antipasta />} />   {/* Shto këtë rresht */}
        <Route path="/makarona" element={<Makarona />} />     {/* Shto këtë rresht */}
        <Route path="/keshilla" element={<Keshilla />} />
        <Route path="/kontakt" element={<TestForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;