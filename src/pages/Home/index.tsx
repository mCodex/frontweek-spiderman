import React from 'react';

import { Container, ContainerItem1, ContainerItem2 } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerItem1>
        <p>
          <img src="/img/spiderman-text.png" alt="Spiderman Miles Morales" />
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis velit
          magna vitae mauris orci fames posuere nibh. Sit tellus amet facilisi
          sit odio pulvinar scelerisque quam et. Ultrices facilisis nunc massa
          diam, quis mi imperdiet.
        </p>

        <p>
          <a href="" alt="Pre-order now">
            Pre-order now
          </a>
          <a href="" alt="Pre-order now">
            Watch the teaser
          </a>
        </p>

        <p>
          <img src="/img/ps.svg" alt="Playstation" />
          <img src="/img/marvel.svg" alt="Marvel" />
        </p>
      </ContainerItem1>

      <ContainerItem2>
        <img src="/img/spiderman.png" alt="Spiderman" />
      </ContainerItem2>
    </Container>
  );
};

export default Home;
