const commitsBar = () => {
  const data = [];
  for (let i = 0; i <= 29; i++) {
    data.push(Math.floor(Math.random() * 5));
  }
  return data;
};

export const commitsBarClosure = commitsBar();

var randomDecimal = () => {
  let precision = 100;
  return (
    Math.floor(
      Math.random() * (5 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision)
  );
};

const hoursBar = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    data.push(randomDecimal());
  }
  return data;
};

export const hoursBarClosure = hoursBar();

const days = () => {
  let month = [];
  for (let i = 1; i <= 30; i++) {
    month.push(i);
  }
  return month;
};

export const daysOfMonth = days();
