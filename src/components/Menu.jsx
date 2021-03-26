import styled from 'styled-components';

const Wrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  /* align-items: center; */
`;

const MenuLink = styled.a`
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

  /*display: block;
      border: 1px solid lightgrey;
      */
`;

const MenuLinkActive = styled.a`
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

  border-left: 2px solid #3880ff;
  background: ${({ theme }) => theme.contrastBlockColor};
`;

function Menu() {
  return (
    <Wrapper>
      <MenuLinkActive className="active" href="https://www.example.com">
        Dashboard
      </MenuLinkActive>
      <MenuLink href="https://www.example.com">Commits</MenuLink>
      <MenuLink href="https://www.example.com">About</MenuLink>
    </Wrapper>
  );
}

export default Menu;
