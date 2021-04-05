import styled from 'styled-components';
import { Select, MenuItem } from '@material-ui/core';

const CustomSelect = styled(Select)`
  width: 200px;
  margin-right: 50px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 12px;
  font-family: 'Open Sans';
  text-transform: uppercase;
  letter-spacing: 0.08rem;
  padding: 0.5rem;
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
  return (
    <CustomSelect disableUnderline={true}>
      <Option value={1}>This week</Option>
      <Option value={2}>This month</Option>
      <Option value={3}>This year</Option>
      <Option value={4}>All time</Option>
    </CustomSelect>
  );
}

export default DateSelector;
