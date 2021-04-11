import { useContext } from 'react';
import styled from 'styled-components';
import { Select, MenuItem } from '@material-ui/core';
import { GraphStore } from '../context/graphContext';
const CustomSelect = styled(Select)`
  width: 200px;
  margin-right: 50px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 12px;
  font-family: 'Open Sans';
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  padding: 0.3rem;
  border-radius: 6px;
  padding-left: 1rem;
  background: ${({ theme }) => theme.contrastBlockColor};
  & > svg {
    color: ${({ theme }) => theme.fontColor};
  }
`;

const Option = styled(MenuItem)`
  color: ${({ theme }) => theme.fontColor};
  font-size: 12px;
  font-family: 'Open Sans';
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  font-weight: 300;
  background: ${({ theme }) => theme.mainColor};
  &:hover {
    background: ${({ theme }) => theme.contrastBlockColor};
  }
`;

function DateSelector() {
  const [state, dispatch] = useContext(GraphStore);
  const handleChange = (event) => {
    dispatch({
      type: 'SET_TIMEFRAME',
      field: event.target.name,
      payload: event.target.value,
    });
  };
  console.log(state);
  return (
    <CustomSelect
      name="timeframe"
      value={state.timeframe}
      disableUnderline={true}
      onChange={handleChange}
    >
      <Option value="week">This week</Option>
      <Option value="month">This month</Option>
      <Option value="year">This year</Option>
      <Option value="all">All time</Option>
    </CustomSelect>
  );
}

export default DateSelector;
