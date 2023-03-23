import React from 'react';
import Header from './components/Header';
import Banniere from './components/Banniere';
import Hooks1 from './components/Hooks1';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <main>
        <Header />
        <Banniere />
        <Hooks1 />
        <Footer />
      </main>
    </div>
  );
}
