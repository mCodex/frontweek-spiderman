import React from 'react';
import Link from 'next/link';

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
