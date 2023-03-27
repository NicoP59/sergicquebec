import React, { useState } from 'react';

export default function Vente() {
  const [monVente, setMonVente] = useState(false);
  const toggleOpen = () => {
    setMonVente(!monVente);
  };

  return (
    <div className='container'>
      <div className='hooks'>
        <article className='bloc-hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/picothèque-key-house.png' alt='' />
            </div>
            <h3 className='titre'>
              Vente{' '}
              <button className='showMore' onClick={toggleOpen}>
                {monVente ? '-' : '+'}
              </button>
            </h3>
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
        </article>
      </div>
    </div>
  );
}
