import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import Buffer from './styled/Buffer';
const Wrapper = styled.div`
  background: ${({ theme }) => theme.mainColor};
  grid-column: 1 /6;
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
        <Buffer />
        <Menu />
      </div>
    </Wrapper>
  );
}

export default Sidebar;
