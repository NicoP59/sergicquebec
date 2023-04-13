import React, { useState } from 'react';
import HooksStyled from './styles';

export default function Etat() {
  const [monEtat, setMonEtat] = useState(false);
  const toggleOpen = () => {
    setMonEtat(!monEtat);
  };

  return (
    <HooksStyled>
      <div className='container'>
        <h2>NOS SERVICES</h2>
        <div className='hooks'>
          <div className='pasOuvert'>
            <div className='image'>
              <img
                src='./img/pictothèque-buildings.svg'
                alt=''
                className='img'
              />
            </div>
            <p className='p'>Gestion de la copropriété </p>
            <button className='showMore' onClick={toggleOpen}>
              {monEtat ? '-' : '+'}
            </button>
          </div>
          {monEtat && (
            <div className='ouvert'>
              <ul>
                <li>La gestion administrative du syndicat</li>
                <li>La gestion Financière et comptable</li>
                <li>La gestion technique de votre bâtiment</li>
                <li>La gestion des urgences 24/7</li>
                <li>La gestion des assemblées générales</li>
                <li>La gestion des réunions du conseil d'administration</li>
                <li>La gestion du budget de la copropriété et des paiements</li>
                <li>Comptes à recevoir</li>
                <li>
                  La gestion des contrats de maintenance et des fournisseurs
                </li>
                <li>La gestion de vos sinistres avec les assurances</li>
                <li>La gestion de vos employés</li>
              </ul>
              <p>
                Tout cela, délivré par un gestionnaire dédié et en toute
                transparence grâce à l'espace client en ligne.
              </p>
            </div>
          )}
        </div>
      </div>
    </HooksStyled>
  );
}
