import React from 'react';
import FooterStyled from './styles';

export default function Foot() {
  return (
    <FooterStyled>
      <div className='container'>
        <div className='follow'>
          <img src='./img/logo-sergic-quebec.png' alt='' className='logo' />

          <p className='spec'>SPÉCIALISTE DE LA GESTION IMMOBILIÈRE</p>
          <p className='province'>Dans toute la province du Québec</p>
          <div className='resaux'>
            <p className='us'>Follow us</p>
            <ul className='sociaux'>
              <li className='logor'>
                <img src='./img/facebook.svg' alt='' />
              </li>
              <li className='logor'>
                <img src='./img/youtube.svg' alt='' />
              </li>
              <li className='logor'>
                <img src='./img/linkedin.svg' alt='' />
              </li>
            </ul>
          </div>
          <a className='contact' href='/'>
            Contactez-nous
          </a>
        </div>
        <div className='compagnies'>
          <h4 className='decouvrez'>Découvrez nos compagnies</h4>
          <div className='entreprise'>
            <div className='Mag'>
              <a href='/'>
                <h5>Magellan</h5>
              </a>
              <p>
                Spécialiste de la gestion technique des projets immobiliers à
                destination des syndicats de copropriété.
              </p>
            </div>
            <div className='Mag'>
              <a href='/'>
                <h5>Sequoia</h5>
              </a>
              <p>
                Tous les métiers de la gestion immobilière dans la région du
                grand Montréal.
              </p>
            </div>
            <div className='Mag'>
              <a href='/'>
                <h5>LaMarque</h5>
              </a>
              <p>Gestion de copropriétés dans la région de Québec.</p>
            </div>
            <div className='Mag'>
              <a href='/'>
                <h5>Gestactif</h5>
              </a>
              <p>Gestion de copropriétés dans la région du grand Laval.</p>
            </div>
            <div className='Mag'>
              <a href='/'>
                <h5>Gestion Nord Pro</h5>
              </a>
              <p>Gestion de copropriétés dans la région de Mont Tremblant.</p>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}
