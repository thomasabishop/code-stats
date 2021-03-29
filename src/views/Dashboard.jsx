import React from 'react';
import styled from 'styled-components';
import Scorecard from '../components/Scorecard';
const Wrapper = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 5px;

  grid-row-gap: 5px;
  grid-template-rows: repeat(12, 1fr);
`;

const Selector = styled.div`
  height: 1rem;
  border: 1px solid magenta;
  grid-column: 9 /13;
  grid-row: 1/2;
`;

// const ScoreCard = styled.div`
//   width: 100px;
//   height: 1rem;
//   border: 1px solid magenta;
// `;

const Scorecards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-column: 1/13;
  grid-row: 2/4;
  //border: 1px solid blue;
`;

function Dashboard() {
  return (
    <Wrapper>
      <Selector />
      <Scorecards>
        <Scorecard value="23" label="Hours coding" />
        <Scorecard value="34" label="Commits" />
        <Scorecard value="3" label="Languages" />
        <Scorecard value="5" label="Projects" />
      </Scorecards>
    </Wrapper>
  );
}

export default Dashboard;
