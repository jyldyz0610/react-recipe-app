import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HomePage from './pages/HomePage';
import RecipeDetailPage from './pages/RecipeDetailPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
};

export default App;
