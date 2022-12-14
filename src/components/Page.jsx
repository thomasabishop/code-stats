import styled from 'styled-components';

const Wrapper = styled.div`
  grid-column: 7 / 24;
  grid-row: 2 / 24;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  max-width: 1200px;
`;

const PageContent = styled.div`
  // border: 1px solid lightgreen;
  padding: 1rem;
  height: 100%;
`;

function Page(props) {
  return (
    <Wrapper>
      <PageContent>{props.children}</PageContent>
    </Wrapper>
  );
}

export default Page;
