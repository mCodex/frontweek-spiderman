import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding-top: 16px;
`;

export const Nav = styled.nav`
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0px 16px;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      margin-left: 24px;

      a {
        display: inline-block;

        font-size: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 200;

        padding: 8px 16px;

        transition: 0.7s ease;

        color: ${(props) => props.theme.gray3};

        position: relative;

        &::after {
          content: '';
          display: block;
          position: absolute;

          top: -40px;
          left: 50%;

          width: 2px;
          height: 0px;
          transition: 0.7s ease;

          background: linear-gradient(
            359.94deg,
            #e11c21 0.06%,
            rgba(225, 28, 33, 0) 101.91%
          );
        }

        &:hover {
          color: ${(props) => props.theme.whiteLight};

          &::after {
            height: 40px;
          }
        }
      }
    }
  }
`;

export const LogoContainer = styled.div`
  max-width: 88px;
`;

export const SocialNav = styled.div`
  display: flex;
  padding-right: 20px;

  svg {
    cursor: pointer;
    margin-left: 16px;
    width: 24px;

    path,
    circle {
      transition: 0.7s ease;
    }

    &:hover {
      path,
      circle {
        fill: ${(props) => props.theme.redLight};
        transform: translate3d(0, -3px, 0);
      }
    }
  }
`;
