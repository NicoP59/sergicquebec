import React, { useState } from 'react';
import Hooks5Styled from './styles';

export default function Achat() {
  const [monAchat, setMonAchat] = useState(false);
  const toggleOpen = () => {
    setMonAchat(!monAchat);
  };

  return (
    <Hooks5Styled>
      <div className='container'>
        <div className='hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/pictothèque-search-house.png' alt='' />
            </div>
            <p className='p'>Achat </p>
            <button className='showMore' onClick={toggleOpen}>
              {monAchat ? '-' : '+'}
            </button>
          </div>
          {monAchat && (
            <div className='ouvert'>
              <p>
                Faites appel à notre courtier immobilier résidentiel pour
                l'acquisition de votre propriété ou votre nouveau patrimoine
                immobilier.
              </p>
              <p>
                En qualité de gestionnaire immobilier, notre agence vous
                apportera tous les conseils nécessaires pour mener à bien votre
                projet.
              </p>
            </div>
          )}
        </div>
      </div>
    </Hooks5Styled>
  );
}
