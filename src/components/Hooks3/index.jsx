import React, { useState } from 'react';
import Hooks3Styled from './styles';

export default function Condo() {
  const [monCondo, setMonCondo] = useState(false);
  const toggleOpen = () => {
    setMonCondo(!monCondo);
  };

  return (
    <Hooks3Styled>
      <div className='container'>
        <div className='hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/pictothèque-key.png' alt='' />
            </div>
            <p className='p'>Location de votre condo/plex </p>
            <button className='showMore' onClick={toggleOpen}>
              {monCondo ? '-' : '+'}
            </button>
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
        </div>
      </div>
    </Hooks3Styled>
  );
}
