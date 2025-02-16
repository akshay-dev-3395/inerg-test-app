import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-gifted-charts';
import {wp} from '@app/constants/common';
import {useAppSelector} from '@app/store/service/appStoreHook';

type Props = {};

const CasesLineChart = (props: Props) => {
  const {selectState} = useAppSelector(state => state.appReducer);
  return (
    <View style={styles.container}>
      <LineChart
        data={selectState?.line_chart?.active_list}
        data2={selectState?.line_chart?.deaths_list}
        data3={selectState?.line_chart?.recovered_list}
        data4={selectState?.line_chart?.total_list}
        thickness={1}
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
