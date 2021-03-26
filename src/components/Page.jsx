import styled from 'styled-components';

const Wrapper = styled.div`
  //border: 1px solid black;
  grid-column: 7 / 24;
  grid-row: 2 / 23;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;

const PageContent = styled.div`
  //border: 1px solid lightgreen;
  padding: 1rem;
  height: 100%;
`;

const Buffer = styled.div`
  padding: 1rem;
  /* background: #e8e8e8; */
`;

function Page() {
  return (
    <Wrapper>
      <Buffer />
      <PageContent />
    </Wrapper>
  );
}

export default Page;
