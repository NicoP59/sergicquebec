import React from 'react';
import Header from './components/Header';
import Banniere from './components/Banniere';
import Hooks1 from './components/Hooks1';
import Hooks2 from './components/Hooks2';
import Hooks3 from './components/Hooks3';
import Hooks4 from './components/Hooks4';
import Hooks5 from './components/Hooks5';
import Hooks6 from './components/Hooks6';
import Map from './components/Map';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <main>
        <Header />
        <Banniere />
        <Hooks1 />
        <Hooks2 />
        <Hooks3 />
        <Hooks4 />
        <Hooks5 />
        <Hooks6 />
        <Map />
        <Footer />
      </main>
    </div>
  );
}
