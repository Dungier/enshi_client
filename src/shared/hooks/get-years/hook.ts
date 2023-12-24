export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1966;

  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  return yearsArray;
};
