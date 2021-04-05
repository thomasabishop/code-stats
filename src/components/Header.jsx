import { React, useContext } from 'react';
import Context from '../context/context';
import styled from 'styled-components';
import Logo from '../img/portrait-logo.svg';
import DateSelector from '../components/DateSelector';
const Wrapper = styled.div`
  background: ${({ theme }) => theme.mainColor};
  border-bottom: 1px solid ${({ theme }) => theme.borders};
  grid-column: 1 / 25;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-row: 1 / 2;
  padding: 0 1rem;
`;

const Branding = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`;

const AppLogo = styled.img`
  width: 40px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.contrastBlockColor};
  border: 0;
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
`;
const AppTitle = styled.h1`
  font-family: 'Fira Sans Condensed';
  font-size: 24px;
  padding-left: 0.5rem;
`;
const FaIcon = styled.span`
  font-size: 22px;
  color: ${({ theme }) => theme.fontColor};
`;

function Header() {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <Wrapper>
      <Branding>
        <AppLogo
          src={Logo}
          alt="Graphic portrait of the CodeStats author Thomas Bishop, blue circle background"
        />
        <AppTitle>CodeStats</AppTitle>
      </Branding>
      <div className="right">
        <DateSelector />
        <div className="icons">
          <FaIcon className="header-icon">
            <i class="fab fa-github-alt"></i>
          </FaIcon>
          <Button onClick={handleClick}>
            <FaIcon>
              {!state.isDark ? (
                <i class="fas fa-moon moon-icon"></i>
              ) : (
                <i class="fas fa-sun sun-icon"></i>
              )}
            </FaIcon>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
