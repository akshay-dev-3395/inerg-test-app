import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';
import {styles} from './styles';
import {IMAGE} from '@app/constants/images';
import StateCase from './StateCase';
import MapViewSection from './MapView';
import useDashboardHook from './useDashboardHook';
import BottomModal from '@app/components/ModalComponent/BottomModal';
import FilterModalView from './FilterModalView';

const Dashboard = () => {
  const {isClickFilter, setIsClickFilter} = useDashboardHook();

  const Header = () => {
    return (
      <View style={styles.headerWrap}>
        <Image
          source={IMAGE.home_image}
          style={styles.imageStyle}
          resizeMode={'center'}
        />
        <Text style={styles.imageText}>All you need is stay at home.</Text>
      </View>
    );
  };

  return (
    <ScreenWrapper translucent={true} statusBarStyle={'light-content'}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Header />
          <StateCase
            isClickFilter={isClickFilter}
            setIsClickFilter={setIsClickFilter}
          />
          <MapViewSection />
        </ScrollView>
      </View>
      {isClickFilter && (
        <BottomModal isVisible={isClickFilter} setVisible={state => {}}>
          <FilterModalView />
        </BottomModal>
      )}
    </ScreenWrapper>
  );
};

export default Dashboard;
