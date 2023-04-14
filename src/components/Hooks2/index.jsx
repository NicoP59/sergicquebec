import React, { useState } from 'react';
import Hooks2Styled from './styles';

export default function Loca() {
  const [monLoca, setMonLoca] = useState(false);
  const toggleOpen = () => {
    setMonLoca(!monLoca);
  };

  return (
    <Hooks2Styled>
      <div className='container'>
        <div className='hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/pictothèque-like-house.svg' alt='' />
            </div>
            <p className='p'>Gestion locative </p>
            <button className='showMore' onClick={toggleOpen}>
              {monLoca ? '-' : '+'}
            </button>
          </div>
          {monLoca && (
            <div className='ouvert'>
              <p>
                Confiez la gestion de votre condo ou de votre plex, afin de
                garantir vos revenus locatifs et de valoriser votre patrimoine
                immobilier. Votre gestionnaire prendra en charge les tâches
                administratives et financières nécessaires à la bonne gestion de
                votre condo. Il vous garantira la gestion de l'entretien courant
                et exceptionnel et le bon entretien de votre condo grâce aux
                visites régulières et à son service d'intervention d'urgence.
              </p>
            </div>
          )}
        </div>
      </div>
    </Hooks2Styled>
  );
}
