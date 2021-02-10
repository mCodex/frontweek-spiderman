import React from 'react';

import LogoSpiderman from '../../assets/svg/logo.svg';
import IconFacebook from '../../assets/svg/icon-facebook.svg';
import IconInstagram from '../../assets/svg/icon-instagram.svg';
import IconYouTube from '../../assets/svg/icon-youtube.svg';
import IconTwitter from '../../assets/svg/icon-twitter.svg';

import { Header, LogoContainer, Nav, SocialNav } from './styles';

const Navbar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <div>
          <LogoContainer>
            <LogoSpiderman />
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
          <IconFacebook />
          <IconInstagram />
          <IconYouTube />
          <IconTwitter />
        </SocialNav>
      </Nav>
    </Header>
  );
};

export default Navbar;
