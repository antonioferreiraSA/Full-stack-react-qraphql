import './Nav.css';
import React, { FC } from 'react';
import Logo from './logo.png';


export const Nav: FC = () => (
  <nav className="nav">
    <img src={Logo} alt="SovTech logo" />
  </nav>
);
