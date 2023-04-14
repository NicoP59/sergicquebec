import React, { useState } from 'react';
import Hooks4Styled from './styles';

export default function Vente() {
  const [monVente, setMonVente] = useState(false);
  const toggleOpen = () => {
    setMonVente(!monVente);
  };

  return (
    <Hooks4Styled>
      <div className='container'>
        <div className='hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/pictothèque-key-house.png' alt='' />
            </div>
            <p className='p'>Vente </p>
            <button className='showMore' onClick={toggleOpen}>
              {monVente ? '-' : '+'}
            </button>
          </div>
          {monVente && (
            <div className='ouvert'>
              <p>
                Faites appel à notre courtier immobilier résidentiel pour la
                vente de votre propriété. En qualité de gestionnaire de
                l'immeuble, notre agence vous apportera tous les conseils
                nécessaires pour mener à bien votre projet.
              </p>
            </div>
          )}
        </div>
      </div>
    </Hooks4Styled>
  );
}
