import React, { useState } from 'react';
import Hooks6Styled from './styles';

export default function Gestion() {
  const [monGestion, setMonGestion] = useState(false);
  const toggleOpen = () => {
    setMonGestion(!monGestion);
  };

  return (
    <Hooks6Styled>
      <div className='container'>
        <div className='hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/pictothèque-cog.png' alt='' />
            </div>
            <p className='p'>Gestion technique des projets immobiliers </p>
            <button className='showMore' onClick={toggleOpen}>
              {monGestion ? '-' : '+'}
            </button>
          </div>
          {monGestion && (
            <div className='ouvert'>
              <p>
                Nous vous accompagnons dans la gestion des projets de votre
                copropriété par le biais d'un interlocuteur unique et
                professionnel de la phase d'étude à la réception finale des
                travaux.
              </p>
            </div>
          )}
        </div>
      </div>
    </Hooks6Styled>
  );
}
