import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {styles} from './styles';
import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';
import MapView, {Marker} from 'react-native-maps';
import IconComponent from '@app/components/IconComponent/IconComponent';
import {COLORS} from '@app/constants/theme';
import {navigateBack} from '@app/services/navigationService';
import {useAppSelector} from '@app/store/service/appStoreHook';

const MapScreen = () => {
  const {allStateData, selectState} = useAppSelector(state => state.appReducer);
  const [placeData, setPlaceData] = useState(selectState?.details);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeWrap}
          onPress={() => navigateBack()}>
          <IconComponent
            name={'close-circle'}
            packageName={'MaterialCommunityIcons'}
            size={40}
            color={COLORS.primaryDark}
          />
        </TouchableOpacity>
        <MapView
          //   provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={{
            latitude: selectState?.details?.lat,
            longitude: selectState?.details?.lon,
            latitudeDelta: 3,
            longitudeDelta: 3,
          }}>
          {allStateData?.map(state => (
            <Marker
              key={state?.state}
              coordinate={{
                latitude: state.lat,
                longitude: state?.lon,
              }}
              title={state?.state}
              onPress={() => setPlaceData(state)}
            />
          ))}
        </MapView>
        <View style={styles.detailWrap}>
          <Text style={styles.title}>{placeData?.state}</Text>
          <View style={styles.rowStyle}>
            <Text style={styles.label}>
              Total Cases:{placeData?.totalCases}
            </Text>
            <Text style={styles.label}>
              Active Cases:{placeData?.activeCases}
            </Text>
          </View>
          <View style={styles.rowStyle}>
            <Text style={styles.label}>Recovered:{placeData?.recovered}</Text>
            <Text style={styles.label}>Death:{placeData?.deaths}</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default memo(MapScreen);
