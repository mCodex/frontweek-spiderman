import React from 'react';

import logoSpiderman from 'assets/svg/logo.svg';

import iconTwitter from 'assets/svg/icon-twitter.svg';
import iconFacebook from 'assets/svg/icon-facebook.svg';
import iconInstagram from 'assets/svg/icon-instagram.svg';
import iconYoutube from 'assets/svg/icon-youtube.svg';

import { Header, LogoContainer, Nav, SocialNav } from './styles';

const Navbar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <div>
          <LogoContainer>
            <img src={logoSpiderman} alt="Logo" />
          </LogoContainer>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">Story</a>
            </li>

            <li>
              <a href="/">Wallpapers</a>
            </li>

            <li>
              <a href="/">#BEYOURSELF</a>
            </li>
          </ul>
        </div>

        <SocialNav>
          <img src={iconFacebook} alt="Facebook" />
          <img src={iconInstagram} alt="Instagram" />
          <img src={iconYoutube} alt="YouTube" />
          <img src={iconTwitter} alt="Twitter" />
        </SocialNav>
      </Nav>
    </Header>
  );
};

export default Navbar;
