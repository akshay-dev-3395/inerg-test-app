const MONTH = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const calculatePercentage = (stateName: string, covidData: any[]) => {
  const sateData = covidData.find(state => state.state === stateName);

  const totalCasesAll = covidData.reduce(
    (sum, state) => sum + state.totalCases,
    0,
  );
  const activeCasesAll = covidData.reduce(
    (sum, state) => sum + state.activeCases,
    0,
  );
  const recoveredAll = covidData.reduce(
    (sum, state) => sum + state.recovered,
    0,
  );
  const deathsAll = covidData.reduce((sum, state) => sum + state.deaths, 0);

  const percentage = {
    total_per: Number(((sateData.totalCases / totalCasesAll) * 100).toFixed(2)),
    active_per: Number(
      ((sateData.activeCases / activeCasesAll) * 100).toFixed(2),
    ),
    recovered_per: Number(
      ((sateData.recovered / recoveredAll) * 100).toFixed(2),
    ),
    deaths_per: Number(((sateData.deaths / deathsAll) * 100).toFixed(2)),
  };

  console.log('DATA calculatePercentage===', percentage);
  return {percentage, sateData};
};

const makeLineChartData = () => {
  const total_list = MONTH.map(month => ({
    value: Math.floor(Math.random() * 100000) + 50000,
    label: month,
    color: 'red',
  }));
  const recovered_list = MONTH.map(month => ({
    value: Math.floor(Math.random() * 100000) + 50000,
    label: month,
    color: 'green',
  }));
  const active_list = MONTH.map(month => ({
    value: Math.floor(Math.random() * 100000) + 50000,
    label: month,
    color: 'blue',
  }));
  const deaths_list = MONTH.map(month => ({
    value: Math.floor(Math.random() * 100000) + 50000,
    label: month,
    color: 'purple',
  }));

  const line_chart = {
    total_list,
    recovered_list,
    active_list,
    deaths_list,
  };
  console.log('LINE CHART====', line_chart);
  return line_chart;
};

export {calculatePercentage, makeLineChartData};
