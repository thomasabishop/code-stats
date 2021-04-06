import React from 'react';
import styled from 'styled-components';
import Scorecard from '../components/Scorecard';
import HoursCommitsDualChart from '../graphs/HoursCommitsDualChart';
const Wrapper = styled.div`
  padding-top: 1rem;
  margin: 0;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  grid-template-rows: repeat(12, 1fr);
`;

const Scorecards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-column: 1/13;
  grid-row: 1/2;
  //border: 1px solid blue;
`;

const ChartBlockOne = styled.div`
  //border: 1px solid blue;
  grid-column: 1/13;
  grid-row: 2/6;
`;

const ChartBlockTwo = styled.div`
  border: 1px solid magenta;
  grid-column: 1/7;
  grid-row: 6/10;
`;

const ChartBlockThree = styled.div`
  border: 1px solid lightgreen;
  grid-column: 7/13;
  grid-row: 6/10;
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
      <ChartBlockOne>
        <HoursCommitsDualChart />
      </ChartBlockOne>
      <ChartBlockTwo />

      <ChartBlockThree />
    </Wrapper>
  );
}

export default Dashboard;
