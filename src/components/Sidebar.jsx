import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
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

// const Buffer = styled.div`
//   padding: 1rem;
//   /* background: #e8e8e8; */
// `;

function Sidebar() {
  return (
    <Wrapper>
      <div>
        <Buffer />
        <Menu />
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Sidebar;
