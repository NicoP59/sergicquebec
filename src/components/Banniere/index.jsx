import React from 'react';
import BanniereStyled from './styles';

export default function sgi() {
  return (
    <BanniereStyled>
      <div className='fondbleu'>
        <div className='welcome'>
          <h1 className='banniere'>SPÉCIALISTE DE LA GESTION IMMOBILIÈRE</h1>
          <h2 className='quebec'>Dans toute la province du Québec</h2>
        </div>
      </div>
      <div className='lignebleu'>
        <div className='gestion'>
          <p>1er</p>
          <p>Gestionnaire de copropriété</p>
        </div>
        <div className='portes'>
          <p>16 500</p>
          <p>Portes gégées</p>
        </div>
        <div className='copro'>
          <p>320</p>
          <p>Copropriétés</p>
        </div>
        <div className='employes'>
          <p>70</p>
          <p>Employés</p>
        </div>
      </div>
    </BanniereStyled>
  );
}
