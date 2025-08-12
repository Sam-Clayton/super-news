import { useState } from 'react'
import './App.css'
import { Header } from "./components/header";
import { AllArticles } from './pages/all-articles';
import { Routes, Route } from "react-router-dom";
import { SingleArticle } from './pages/article';

function App() {

  return (
    <>
      <section className="app">
        <Header />
        <Routes>
          <Route path="/all-articles" element={<AllArticles />} />
          <Route path='/articles/:article_id' element={<SingleArticle />} />
        </Routes>
      </section>
    </>
  );
}

export default App
