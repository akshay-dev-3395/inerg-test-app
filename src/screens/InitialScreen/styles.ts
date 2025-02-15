import {hp, normalizeFontSize, wp} from '@app/constants/common';
import {COLORS, FONTS} from '@app/constants/theme';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    ...FONTS.extraBold,
    fontSize: normalizeFontSize(30),
    color: COLORS.primaryDark,
  },
  imageStyle: {
    height: wp('60%'),
    width: wp('60%'),
  },
});
