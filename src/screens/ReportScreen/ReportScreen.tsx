import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';
import PerformanceChart from './PerformanceChart';
import {styles} from './styles';
import CasesLineChart from './CasesLineChart';

const ReportScreen = () => {
  return (
    <ScreenWrapper translucent={true} statusBarStyle={'light-content'}>
      <View style={styles.container}>
        <PerformanceChart />
        <CasesLineChart />
      </View>
    </ScreenWrapper>
  );
};

export default ReportScreen;
