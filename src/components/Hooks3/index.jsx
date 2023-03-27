import React, { useState } from 'react';

export default function Condo() {
  const [monCondo, setMonCondo] = useState(false);
  const toggleOpen = () => {
    setMonCondo(!monCondo);
  };

  return (
    <div className='container'>
      <div className='hooks'>
        <article className='bloc-hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/picothèque-key.png' alt='' />
            </div>
            <h3 className='titre'>
              Location de votre condo/plex{' '}
              <button className='showMore' onClick={toggleOpen}>
                {monCondo ? '-' : '+'}
              </button>
            </h3>
          </div>
          {monCondo && (
            <div className='ouvert'>
              <p>
                Grâce à votre gestionnaire, vous déléguez la mise en location de
                votre bien, de la pré-sélection de votre futur locataire à sa
                formation aux règles de vie de votre immeuble, ainsi que la
                gestion des relations avec le locataire en place, cela afin de
                garantir la paisibilité de l'ensemble des habitants la
                copropriété.
              </p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
