import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalizeFontSize, wp} from '@app/constants/common';
import {COLORS, FONTS} from '@app/constants/theme';
import {PieChart} from 'react-native-gifted-charts';
import IconComponent from '@app/components/IconComponent/IconComponent';

type Props = {};

const pieData = [
  {
    value: 47,
    color: '#009FFF',
    gradientCenterColor: '#006DFF',
    focused: true,
  },
  {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
  {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
  {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
];

const PerformanceChart = (props: Props) => {
  const {} = props;

  const renderDot = (color: string) => {
    return <View style={[styles.dotStyle, {backgroundColor: color}]} />;
  };

  const renderLegendComponent = () => {
    return (
      <>
        <View style={styles.legendWrap}>
          <View style={styles.labelWrap}>
            {renderDot('#006DFF')}
            <Text style={styles.labelStyle}>Recovered: 47%</Text>
          </View>
          <View style={styles.labelWrap}>
            {renderDot('#8F80F3')}
            <Text style={styles.labelStyle}>Total Cases: 16%</Text>
          </View>
        </View>
        <View style={styles.legendWrap}>
          <View style={styles.labelWrap}>
            {renderDot('#3BE9DE')}
            <Text style={styles.labelStyle}>Death: 40%</Text>
          </View>
          <View style={[styles.labelWrap]}>
            {renderDot('#FF7F97')}
            <Text style={styles.labelStyle}>Active Cases: 3%</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <View style={styles.chartWrap}>
        <View style={styles.headerWrap}>
          <Text style={styles.stateName}>Kerala</Text>
          <TouchableOpacity onPress={() => {}}>
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
                  <Text style={styles.centerLabelPer}>47%</Text>
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
