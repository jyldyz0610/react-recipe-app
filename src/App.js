// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider} from './ThemeContext'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HomePage from './pages/HomePage';
import RecipeDetailPage from './pages/RecipeDetailPage';

const App = () => {
  return (
    <Router>
      <ThemeProvider> {/* ThemeProvider verwenden */}
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          </Routes>
        </Main>
        <Footer />
      </ThemeProvider> {/* ThemeProvider schließen */}
    </Router>
  );
};

export default App;
