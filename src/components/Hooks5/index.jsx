import React, { useState } from 'react';

export default function Achat() {
  const [monAchat, setMonAchat] = useState(false);
  const toggleOpen = () => {
    setMonAchat(!monAchat);
  };

  return (
    <div className='container'>
      <div className='hooks'>
        <article className='bloc-hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/picothèque-search-house.png' alt='' />
            </div>
            <h3 className='titre'>
              Achat{' '}
              <button className='showMore' onClick={toggleOpen}>
                {monAchat ? '-' : '+'}
              </button>
            </h3>
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
        </article>
      </div>
    </div>
  );
}
