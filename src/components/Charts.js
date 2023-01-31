import React from 'react';
// import ReactDOM from 'react-dom';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

export default function Charts() {
  const data = [
    { month: 0, earnings: 0 },
    { month: 1, earnings: 2528 },
    { month: 2, earnings: 1650 },
    { month: 3, earnings: 1835 },
    { month: 4, earnings: 3540 },
  ];
  return (
    <VictoryChart
      // domainPadding will add space to each side of VictoryBar to
      // prevent it from overlapping the axis
      domainPadding={20}
    >
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[0, 1, 2, 3, 4]}
        tickFormat={['', 'Jan', 'Feb', 'Mar', 'Apr']}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x / 1000}k`}
      />
      <VictoryBar data={data} x="quarter" y="earnings" />
    </VictoryChart>
  );
}
