import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyled from './styles';

export default function Navigation() {
  return (
    <HeaderStyled>
      <div className='langue'>
        <ul className='bloc-langue'>
          <NavLink to='/' className='lien-langue'>
            <li className='link'>FR/EN</li>
          </NavLink>
        </ul>
      </div>
      <div className='header'>
        <div className='bloc-logo'>
          <img src='./img/logo-sergic-quebec.png' alt='' className='logo' />
        </div>

        <ul className='bloc-liens'>
          <NavLink to='/' className='lien'>
            <li className='linky'>Nos services</li>
          </NavLink>
          <NavLink to='/' className='lien'>
            <li className='linky'>Nos compagnies</li>
          </NavLink>
          <NavLink to='/' className='lien'>
            <li className='linky'>Nous joindre</li>
          </NavLink>
        </ul>
      </div>
    </HeaderStyled>
  );
}
