import React from 'react';
import styled from 'styled-components';
import Scorecard from '../components/Scorecard';
const Wrapper = styled.div`
  padding-top: 1rem;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 5px;

  grid-row-gap: 5px;
  grid-template-rows: repeat(12, 1fr);
`;

const Scorecards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-column: 1/13;
  grid-row: 1/4;
  //border: 1px solid blue;
`;

function Dashboard() {
  return (
    <Wrapper>
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
