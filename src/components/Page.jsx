import styled from 'styled-components';
import Buffer from './styled/Buffer';

const Wrapper = styled.div`
  border: 1px solid black;
  grid-column: 7 / 24;
  grid-row: 2 / 23;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;

const PageContent = styled.div`
  border: 1px solid lightgreen;
  padding: 1rem;
  height: 100%;
`;

function Page(props) {
  return (
    <Wrapper>
      <Buffer />
      <PageContent>{props.children}</PageContent>
    </Wrapper>
  );
}

export default Page;
