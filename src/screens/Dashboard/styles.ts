import {hp, normalizeFontSize, wp} from '@app/constants/common';
import {COLORS, FONTS} from '@app/constants/theme';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: wp(10),
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDark,
    paddingVertical: wp(20),
  },
  imageStyle: {
    height: wp('50%'),
    width: wp('50%'),
  },
  imageText: {
    ...FONTS.bold,
    fontSize: normalizeFontSize(25),
    color: COLORS.white,
    flex: 1,
    marginHorizontal: wp(20),
  },
});
