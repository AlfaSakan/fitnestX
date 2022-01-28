import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';

const data = [
  { x: 'Sun', y: 2 },
  { x: 'Mon', y: 3 },
  { x: 'Tue', y: 5 },
  { x: 'Wed', y: 4 },
  { x: 'Thu', y: 7 },
];

const VictoryTest = () => {
  return (
    <VictoryChart width={350} theme={VictoryTheme.material} domainPadding={{ x: 10 }}>
      <VictoryLine
        interpolation={'natural'}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        style={{
          data: { stroke: '#c43a31' },
          parent: { border: '1px solid #ccc' },
        }}
        data={data}
      />
    </VictoryChart>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default VictoryTest;
