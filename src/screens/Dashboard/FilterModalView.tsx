import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '@app/constants/theme';
import {normalizeFontSize, wp} from '@app/constants/common';
import IconComponent from '@app/components/IconComponent/IconComponent';

type Props = {
  setIsClickFilter: (state: boolean) => void;
};

const FilterModalView = (props: Props) => {
  const {setIsClickFilter} = props;
  return (
    <View style={styles.container}>
      <TextInput placeholder="search state" style={styles.inputStyle} />
      <View style={styles.nameWrap}>
        <Text style={styles.nameStyle}>State name</Text>
      </View>
      <TouchableOpacity
        style={styles.closeWrap}
        onPress={() => setIsClickFilter(false)}>
        <IconComponent
          name={'close-circle'}
          packageName={'MaterialCommunityIcons'}
          size={35}
          color={COLORS.primaryDark}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FilterModalView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 0.7,
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
    paddingTop: wp(60),
    paddingHorizontal: wp(20),
    position: 'relative',
  },
  nameWrap: {
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: wp(8),
    paddingVertical: wp(8),
  },
  nameStyle: {
    ...FONTS.medium,
    fontSize: normalizeFontSize(16),
    color: COLORS.black,
    textAlign: 'center',
  },
  inputStyle: {
    ...FONTS.medium,
    fontSize: normalizeFontSize(14),
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: wp(8),
    height: wp(40),
    paddingLeft: wp(10),
    marginBottom: wp(20),
    backgroundColor: COLORS.gray4,
  },
  closeWrap: {
    position: 'absolute',
    right: wp(20),
    top: wp(20),
  },
});
