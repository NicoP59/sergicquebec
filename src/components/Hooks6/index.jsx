import React, { useState } from 'react';

export default function Gestion() {
  const [monGestion, setMonGestion] = useState(false);
  const toggleOpen = () => {
    setMonGestion(!monGestion);
  };

  return (
    <div className='container'>
      <div className='hooks'>
        <article className='bloc-hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img src='./img/picothèque-cog.png' alt='' />
            </div>
            <h3 className='titre'>
              Gestion technique des projets immobiliers{' '}
              <button className='showMore' onClick={toggleOpen}>
                {monGestion ? '-' : '+'}
              </button>
            </h3>
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
        </article>
      </div>
    </div>
  );
}
