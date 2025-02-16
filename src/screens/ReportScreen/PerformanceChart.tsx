import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {normalizeFontSize, wp} from '@app/constants/common';
import {COLORS, FONTS} from '@app/constants/theme';
import {PieChart} from 'react-native-gifted-charts';
import IconComponent from '@app/components/IconComponent/IconComponent';
import {useAppSelector} from '@app/store/service/appStoreHook';

type Props = {
  setIsClickFilter: (state: boolean) => void;
};

const PerformanceChart = (props: Props) => {
  const {setIsClickFilter} = props;
  const {selectState} = useAppSelector(state => state.appReducer);

  const pieData: any = useMemo(() => {
    const data = [
      {
        value: selectState?.pie_chart?.recovered_per,
        color: '#009FFF',
        gradientCenterColor: '#006DFF',
        focused: true,
      },
      {
        value: selectState?.pie_chart?.deaths_per,
        color: '#93FCF8',
        gradientCenterColor: '#3BE9DE',
      },
      {
        value: selectState?.pie_chart?.total_per,
        color: '#BDB2FA',
        gradientCenterColor: '#8F80F3',
      },
      {
        value: selectState?.pie_chart?.active_per,
        color: '#FFA5BA',
        gradientCenterColor: '#FF7F97',
      },
      {value: 100},
    ];

    return data;
  }, [selectState]);

  const renderDot = (color: string) => {
    return <View style={[styles.dotStyle, {backgroundColor: color}]} />;
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View style={styles.legendWrap}>
          <View style={styles.labelWrap}>
            {renderDot('#006DFF')}
            <Text style={styles.labelStyle}>
              Recovered: {selectState?.pie_chart?.recovered_per}%
            </Text>
          </View>
          <View style={styles.labelWrap}>
            {renderDot('#8F80F3')}
            <Text style={styles.labelStyle}>
              Total Cases: {selectState?.pie_chart?.total_per}%
            </Text>
          </View>
        </View>
        <View style={styles.legendWrap}>
          <View style={styles.labelWrap}>
            {renderDot('#3BE9DE')}
            <Text style={styles.labelStyle}>
              Death: {selectState?.pie_chart?.deaths_per}%
            </Text>
          </View>
          <View style={[styles.labelWrap]}>
            {renderDot('#FF7F97')}
            <Text style={styles.labelStyle}>
              Active Cases: {selectState?.pie_chart?.active_per}%
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <View style={styles.chartWrap}>
        <View style={styles.headerWrap}>
          <Text style={styles.stateName}>{selectState?.details?.state}</Text>
          <TouchableOpacity onPress={() => setIsClickFilter(true)}>
            <IconComponent
              name={'filter-list'}
              packageName={'MaterialIcons'}
              size={35}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.piWrap}>
          <PieChart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={wp(90)}
            innerRadius={wp(60)}
            focusOnPress
            // onPress={(e: any) => console.log('EVENT===', e)}
            innerCircleColor={COLORS.primaryDark}
            centerLabelComponent={() => {
              return (
                <View style={styles.centerLabelWrap}>
                  <Text style={styles.centerLabelPer}>
                    {selectState?.pie_chart?.recovered_per}%
                  </Text>
                  <Text style={styles.centerLabelName}>Recovered</Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  );
};

export default PerformanceChart;

const styles = StyleSheet.create({
  chartWrap: {
    padding: 16,
    // borderRadius: 20,
    backgroundColor: COLORS.primaryDark,
  },

  piWrap: {padding: wp(20), alignItems: 'center'},
  centerLabelWrap: {justifyContent: 'center', alignItems: 'center'},
  centerLabelPer: {
    color: COLORS.white,
    fontSize: normalizeFontSize(22),
    ...FONTS.bold,
  },
  centerLabelName: {
    color: COLORS.white,
    fontSize: normalizeFontSize(14),
    ...FONTS.regular,
  },
  dotStyle: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(5),
    marginRight: wp(10),
  },
  legendWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: wp(10),
    // backgroundColor: 'red',
    paddingHorizontal: wp(30),
  },
  legendWrapInner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(20),
  },
  labelStyle: {
    color: COLORS.white,
    fontSize: normalizeFontSize(14),
    ...FONTS.medium,
  },
  labelWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp(20),
  },
  stateName: {
    ...FONTS.bold,
    fontSize: normalizeFontSize(20),
    color: COLORS.white,
  },
});
