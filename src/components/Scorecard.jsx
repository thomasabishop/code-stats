import styled from 'styled-components';

const Wrapper = styled.div`
  // border: 1px solid black;
  width: 80px;
  //height: 80px;
  border-radius: 6px;
  background: ${({ theme }) => theme.mainColor};
  padding: 1rem;
  display: flex;
  //align-items: flex-end;
  flex-direction: column;
  //border-left: 2px solid #3880ff;
`;

const Value = styled.span`
  font-size: 2rem;
  color: #3880ff;
  align-self: flex-end;
  font-weight: 300;
`;

const Label = styled.span`
  padding-top: 0.5rem;
  font-size: 12px;
  align-self: flex-end;
`;

function Scorecard(props) {
  return (
    <Wrapper>
      <Value>{props.value}</Value>
      <Label>{props.label}</Label>
    </Wrapper>
  );
}

export default Scorecard;
