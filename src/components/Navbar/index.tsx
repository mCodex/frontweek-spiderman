import React from 'react';
import Link from 'next/link';

import { Header, LogoContainer, Nav, SocialNav } from './styles';

const Navbar: React.FC = () => {
  return (
    <Header>
      <Nav>
        <LogoContainer>
          <img src="img/logo.svg" alt="Logo" />
        </LogoContainer>

        <ul>
          <li>
            <Link href="#">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a href="#">Story</a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a href="#">Wallpapers</a>
            </Link>
          </li>

          <li>
            <Link href="#">
              <a href="#">#BEYOURSELF</a>
            </Link>
          </li>
        </ul>
      </Nav>

      <SocialNav>
        <img src="img/icon-facebook.svg" alt="Facebook" />
        <img src="img/icon-instagram.svg" alt="Instagram" />
        <img src="img/icon-youtube.svg" alt="YouTube" />
        <img src="img/icon-twitter.svg" alt="Twitter" />
      </SocialNav>
    </Header>
  );
};

export default Navbar;
