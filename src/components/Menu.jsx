import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  /* align-items: center; */
`;

const MenuLink = styled(NavLink)`
  margin-bottom: 0.5rem;
  font-family: 'Open Sans';
  font-size: 12px;
  justify-self: center;
  padding: 1rem;
  color: ${({ theme }) => theme.fontColor};
  /*height: 40px;*/
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  text-decoration: none;
  :hover {
    background: ${({ theme }) => theme.contrastBlockColor};
  }
  &.active {
    border-left: 2px solid #3880ff;
    background: ${({ theme }) => theme.contrastBlockColor};
  }
`;

function Menu() {
  return (
    <Wrapper className="router-link-override">
      <MenuLink exact={true} to="/">
        Dash
      </MenuLink>

      <MenuLink to="/about">About</MenuLink>
    </Wrapper>
  );
}

export default Menu;
