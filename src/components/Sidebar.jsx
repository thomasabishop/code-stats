import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
const Wrapper = styled.div`
  padding-top: 1rem;
  background: ${({ theme }) => theme.mainColor};
  grid-column: 1 / 6;
  grid-row: 2 / 25;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

function Sidebar() {
  return (
    <Wrapper>
      <div>
        <Menu />
      </div>
    </Wrapper>
  );
}

export default Sidebar;
