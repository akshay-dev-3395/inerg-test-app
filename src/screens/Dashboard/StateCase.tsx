import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import IconComponent from '@app/components/IconComponent/IconComponent';
import {COLORS, FONTS} from '@app/constants/theme';
import {normalizeFontSize, wp} from '@app/constants/common';
import {useAppSelector} from '@app/store/service/appStoreHook';

type Props = {
  isClickFilter: boolean;
  setIsClickFilter: (state: boolean) => void;
};

type CardProps = {
  title: string;
  count: number | undefined;
};

const CardSection = (props: CardProps) => {
  const {title, count} = props;
  return (
    <View style={styles.cardWrap}>
      <Text style={styles.cardHead}>{title}</Text>
      <Text style={styles.cardValue}>{count}</Text>
    </View>
  );
};

const StateCase = (props: Props) => {
  const {isClickFilter, setIsClickFilter} = props;
  const {selectState} = useAppSelector(state => state.appReducer);
  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Text style={styles.stateName}>{selectState?.details?.state}</Text>
        <TouchableOpacity onPress={() => setIsClickFilter(true)}>
          <IconComponent
            name={'filter-list'}
            packageName={'MaterialIcons'}
            size={35}
            color={COLORS.primaryDark}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rowStyle}>
        <CardSection
          title="Total Cases"
          count={selectState?.details?.totalCases}
        />
        <CardSection
          title="Active Cases"
          count={selectState?.details?.activeCases}
        />
      </View>
      <View style={styles.rowStyle}>
        <CardSection
          title="Recovered"
          count={selectState?.details?.recovered}
        />
        <CardSection title="Death" count={selectState?.details?.deaths} />
      </View>
    </View>
  );
};

export default memo(StateCase);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    gap: wp(15),
    marginVertical: wp(10),
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stateName: {
    ...FONTS.bold,
    fontSize: normalizeFontSize(20),
    color: COLORS.primaryDark,
  },
  rowStyle: {
    flexDirection: 'row',
    gap: wp(10),
    // marginVertical: wp(10),
  },
  cardWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: wp(8),
    paddingVertical: wp(8),
  },
  cardHead: {
    ...FONTS.semiBold,
    fontSize: normalizeFontSize(18),
    color: COLORS.primaryDark,
  },
  cardValue: {
    ...FONTS.semiBold,
    fontSize: normalizeFontSize(15),
    color: COLORS.primaryDark,
  },
});
