import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;

  padding: 36px 16px;

  overflow: hidden;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerItem1 = styled.div`
  max-width: 576px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a:first-child {
    display: inline-block;
    padding: 12px 32px;
    border-radius: 3px;
    transform: skewX(-10deg);
    text-transform: uppercase;
    transition: 0.7s ease;

    background: ${(props) =>
      `linear-gradient(267.72deg, ${props.theme.redLight} 0.88%, ${props.theme.red} 100%)`};

    position: relative;

    &::after {
      content: '';

      display: block;

      position: absolute;
      top: -2px;
      left: -2px;

      width: 30%;
      height: 70%;
      opacity: 0;
      transition: 0.7s ease;

      border-radius: 3px;

      border-top: 3px solid white;
      border-left: 3px solid white;
    }

    &::before {
      content: '';

      display: block;

      position: absolute;
      bottom: -2px;
      right: -2px;

      width: 30%;
      height: 70%;
      opacity: 0;
      transition: 0.7s ease;

      border-radius: 3px;

      border-bottom: 3px solid white;
      border-right: 3px solid white;
    }

    &:hover {
      transform: skewX(-10deg) scale(1.05);

      &::after {
        opacity: 1;
      }

      &::before {
        opacity: 1;
      }
    }
  }

  a {
    display: inline-block;

    margin-left: 5px;

    border-radius: 3px;
    transform: skewX(-10deg);

    text-transform: uppercase;

    transition: 0.7s ease;

    padding: 12px 32px;
    background: transparent;
    border: 2px solid red;

    &::after {
      content: '';

      display: block;
      position: absolute;

      top: -1px;
      left: -1px;
      z-index: -1;
      transition: 0.7s ease;

      width: 0%;
      height: 103%;

      background: ${(props) =>
        `linear-gradient(267.72deg, ${props.theme.redLight} 0.88%, ${props.theme.red} 100%)`};
    }

    &:hover {
      &::after {
        width: 102%;
      }
    }
  }
`;

export const ContainerItem2 = styled.div`
  img {
    width: 140%;
    transform: translate3d(-190px, 0, 0);
  }
`;
