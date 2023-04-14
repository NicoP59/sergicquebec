import React from 'react';
import MapStyled from './styles';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  return (
    <MapStyled>
      <div className='container'>
        <h2 className='titre'>
          NOS COMPAGNIES, AU SERVICE DE VOS PROJETS IMMOBILIERS
        </h2>
        <div className='container2'>
          <div className='map'>
            <MapContainer
              className='map2'
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: '400px' }}
            >
              <TileLayer
                attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={[-73.998, -73.47]}>
                <Popup>Tu ma trouvé</Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Carte agence */}
          <div className='container-agence'>
            <div className='agence'>
              <h4>Agence de Laval</h4>
              <div className='img'>
                <img src='./' alt='' />
              </div>
              <div className='localisation'>
                <p>1645 desserte nord autoroute 440</p>
                <p>Laval</p>
                <p>QC H7L 354</p>
                <div className='fleche'></div>
              </div>
            </div>
            <div className='agence'>
              <h4>Agence de Mont-Tremblant</h4>
              <div className='img'>
                <img src='' alt='' />
              </div>
              <div className='localisation'>
                <p>3-1001 rue de st jovite</p>
                <p>Mont-Tremblant</p>
                <p>QC J8E 338</p>
                <div className='fleche'></div>
              </div>
            </div>
            <div className='agence'>
              <h4>Agence de Québec</h4>
              <div className='img'>
                <img src='' alt='' />
              </div>
              <div className='localisation'>
                <p>1694 1re av.</p>
                <p>Québec</p>
                <p>QC G1L 3L6</p>
                <div className='fleche'></div>
              </div>
            </div>
            <div className='agence'>
              <h4>Agence de Montréal</h4>
              <div className='img'>
                <img src='' alt='' />
              </div>
              <div className='localisation'>
                <p>5160 bd décarie bureau 500</p>
                <p>Montréal</p>
                <p>QC H3X 2H9</p>
                <div className='fleche'></div>
              </div>
            </div>
            <div className='agence'>
              <h4>Agence de Montréal</h4>
              <div className='img'>
                <img src='' alt='' />
              </div>
              <div className='localisation'>
                <p>5160 bd décarie bureau 500</p>
                <p>Montréal</p>
                <p>QC H3X 2H9</p>
                <div className='fleche'></div>
              </div>
            </div>

            {/* <button>Retour</button>
            <div className='location-details'>
              <div className='sequoia'>
                <img src='' alt='' />
                <h4>
                  <p>Sequoia</p>
                  <p>Montréal</p>
                </h4>
              </div>
              <div className='tel'>
                <p>
                  "Tel : " <span>(450) 934 4319</span>
                </p>
                <p>1645 desserte nord autoroute 440</p>
                <p>
                  <span>Laval</span> ", " <span>Laval</span>
                </p>
              </div>
              <div className='expertise'>
                <h5>Domaines d'expertise :</h5>
                <ul>
                  <li>Gestion de coproprété</li>
                </ul>
              </div>
              <div className='horaire'>
                <h5>Horaires d'ouverture</h5>
                <ul>
                  <li>
                    <p>Lundi au Vendredi</p>
                    <ul>
                      <li>09:00-17:00</li>
                    </ul>
                  </li>
                  <li>
                    <p>Samedi et Dimanche</p>
                    <ul>
                      <li>Fermé</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <a href='/'>Découvrez la compagnie</a>
            </div> */}

            {/* agence */}
          </div>

          {/* container 1 et 2 */}
        </div>
      </div>
    </MapStyled>
  );
}
