import {View, Text} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';
import PerformanceChart from './PerformanceChart';
import {styles} from './styles';
import CasesLineChart from './CasesLineChart';
import BottomModal from '@app/components/ModalComponent/BottomModal';
import FilterModalView from '../Dashboard/FilterModalView';

const ReportScreen = () => {
  const [isClickFilter, setIsClickFilter] = useState(false);

  return (
    <ScreenWrapper translucent={true} statusBarStyle={'light-content'}>
      <View style={styles.container}>
        <PerformanceChart setIsClickFilter={setIsClickFilter} />
        <CasesLineChart />
      </View>
      {isClickFilter && (
        <BottomModal
          isVisible={isClickFilter}
          setVisible={state => setIsClickFilter(state)}>
          <FilterModalView setIsClickFilter={setIsClickFilter} />
        </BottomModal>
      )}
    </ScreenWrapper>
  );
};

export default ReportScreen;
