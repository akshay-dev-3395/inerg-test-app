import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import {COLORS, FONTS} from '@app/constants/theme';
import {normalizeFontSize, wp} from '@app/constants/common';

type Props = {};

const MapViewSection = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headWrap}>
        <Text style={styles.headTitle}>Location</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mapWraper}>
        <MapView
          //   provider={PROVIDER_GOOGLE}
          style={styles.mapStyle}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
      </View>
    </View>
  );
};

export default MapViewSection;

const styles = StyleSheet.create({
  container: {
    height: wp('40%'),
    paddingHorizontal: wp(20),
    gap: wp(15),
    marginBottom: wp(100),
  },
  mapWraper: {
    borderRadius: wp(10),
    borderWidth: 1,
    borderColor: COLORS.gray1,
    overflow: 'hidden',
  },
  mapStyle: {
    height: '100%',
  },
  headWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headTitle: {
    ...FONTS.bold,
    fontSize: normalizeFontSize(20),
    color: COLORS.primaryDark,
  },
  viewAll: {
    ...FONTS.medium,
    fontSize: normalizeFontSize(14),
    color: COLORS.black3,
  },
});
