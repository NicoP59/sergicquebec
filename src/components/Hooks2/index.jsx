import React, { useState } from 'react';

export default function Loca() {
  const [monLoca, setMonLoca] = useState(false);
  const toggleOpen = () => {
    setMonLoca(!monLoca);
  };

  return (
    <div className='container'>
      <div className='hooks'>
        <article className='bloc-hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/picothèque-like-house.svg' alt='' />
            </div>
            <h3 className='titre'>
              Gestion locative{' '}
              <button className='showMore' onClick={toggleOpen}>
                {monLoca ? '-' : '+'}
              </button>
            </h3>
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
        </article>
      </div>
    </div>
  );
}
