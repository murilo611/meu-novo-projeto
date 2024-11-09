import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import EducacaoFinanceira from './components/EducacaoFinanceira'; 
import Navbar from './components/Navbar';
import Investimentos from './components/Investimentos';
import PlanejamentoFinanceiro from './components/PlanejamentoFinanceiro';


const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar /> 
                
                <Routes>
                    <Route path="/investimentos" element={<Investimentos />} /> {/* Correção aqui */}
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/educacao-financeira" element={<EducacaoFinanceira />} />
                    <Route path="/planejamento-financeiro" element={<PlanejamentoFinanceiro />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

