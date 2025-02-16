import {hp, normalizeFontSize, wp} from '@app/constants/common';
import {COLORS, FONTS} from '@app/constants/theme';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },

  closeWrap: {
    position: 'absolute',
    right: wp(20),
    top: wp(20),
    zIndex: 10,
  },
  detailWrap: {
    position: 'absolute',
    bottom: wp(20),
    alignSelf: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: wp(20),
    paddingVertical: wp(10),
    borderRadius: wp(10),
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(20),
  },
  title: {
    ...FONTS.semiBold,
    fontSize: normalizeFontSize(20),
    color: COLORS.primaryDark,
  },
  label: {
    ...FONTS.medium,
    fontSize: normalizeFontSize(16),
    color: COLORS.primaryDark,
  },
});
