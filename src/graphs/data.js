const commitsBar = () => {
  const data = [];
  for (let i = 0; i <= 29; i++) {
    data.push(Math.floor(Math.random() * 12));
  }
  return data;
};

export const commitsBarClosure = commitsBar();

var randomDecimal = () => {
  let precision = 100;
  return (
    Math.floor(
      Math.random() * (10 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision)
  );
};

const hoursBar = () => {
  const data = [];
  for (let i = 0; i <= 29; i++) {
    data.push(randomDecimal());
  }
  return data;
};

export const hoursBarClosure = hoursBar();
