function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  const year = `${getCurrentYear()}`;
  budget[`income-${year}`] = income;
  budget[`gdp-${year}`] = gdp;
  budget[`capital-${year}`] = capita;

  return budget;
}
