import {
  Alert,
  BackHandler,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '@app/screens/Dashboard/Dashboard';
import {COLORS, FONTS} from '@app/constants/theme';
import {normalizeFontSize, wp} from '@app/constants/common';
import {useFocusEffect} from '@react-navigation/native';
import IconComponent from '@app/components/IconComponent/IconComponent';
import ReportScreen from '@app/screens/ReportScreen/ReportScreen';

type TabItemsProps = {
  name: string;
  color: string;
  icon: string;
  focused: boolean;
};

const TabItems = (props: TabItemsProps) => {
  const {name, color, icon, focused} = props;

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Exit App', 'Are you sure you want to exit?', [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Exit', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => backHandler.remove();
    }, []),
  );

  return (
    <View style={styles.tabItemWrap}>
      <IconComponent
        name={icon}
        packageName={'MaterialIcons'}
        size={28}
        color={focused ? COLORS.primaryDark : COLORS.gray2}
      />
      <Text style={[{color: color}, styles.labelStyle]}>{name}</Text>
    </View>
  );
};

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.tabStyle,

          //   display: isKeyboardVisible ? 'none' : 'flex',
        },
        tabBarActiveTintColor: COLORS.primaryDark,
        tabBarInactiveTintColor: COLORS.gray2,
      }}>
      <Tab.Screen
        name={'Dashboard'}
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabItems
              focused={focused}
              icon="home"
              color={color}
              name="Dashboard"
            />
          ),
        }}
      />

      <Tab.Screen
        name={'ReportScreen'}
        component={ReportScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabItems
              focused={focused}
              icon="analytics"
              color={color}
              name="Reports"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabStyle: {
    height: wp(70),
    backgroundColor: COLORS.white,
    paddingTop: wp(10),
    paddingHorizontal: 0,
  },
  tabItemWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%') / 2,
  },
  labelStyle: {
    ...FONTS.regular,
    textAlign: 'center',
    fontSize: normalizeFontSize(12),
  },
});
