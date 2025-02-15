import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-gifted-charts';
import {wp} from '@app/constants/common';

const menData = [
  {value: 250000, label: '2000'},
  {value: 350000, label: '2005'},
  {value: 450000, label: '2010'},
  {value: 550000, label: '2015'},
  {value: 650000, label: '2020'},
  {value: 750000, label: '2025'},
];

const womenData = [
  {value: 240000, label: '2000'},
  {value: 340000, label: '2005'},
  {value: 460000, label: '2010'},
  {value: 520000, label: '2015'},
  {value: 640000, label: '2020'},
  {value: 720000, label: '2025'},
];

const above50Data = [
  {value: 80000, label: '2000'},
  {value: 120000, label: '2005'},
  {value: 160000, label: '2010'},
  {value: 200000, label: '2015'},
  {value: 240000, label: '2020'},
  {value: 280000, label: '2025'},
];

const below18Data = [
  {value: 100000, label: '2000'},
  {value: 130000, label: '2005'},
  {value: 160000, label: '2010'},
  {value: 190000, label: '2015'},
  {value: 220000, label: '2020'},
  {value: 250000, label: '2025'},
];

type Props = {};

const CasesLineChart = (props: Props) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={menData}
        data2={womenData}
        data3={above50Data}
        data4={below18Data}
        thickness={2}
        height={wp('50%')}
        width={wp('80%')}
        yAxisTextStyle={{color: 'gray'}}
        xAxisLabelTextStyle={{color: 'gray'}}
        yAxisColor="black"
        xAxisColor="black"
        showVerticalLines
        showXAxisIndices
        // color="red"
      />
    </View>
  );
};

export default CasesLineChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: wp(20),
    marginTop: wp(20),
  },
});
