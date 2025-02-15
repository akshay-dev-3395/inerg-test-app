import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import Icon5 from 'react-native-vector-icons/FontAwesome6';
import Icon6 from 'react-native-vector-icons/Feather';
import Icon7 from 'react-native-vector-icons/MaterialCommunityIcons';

type IconPackage =
  | 'MaterialIcons'
  | 'FontAwesome'
  | 'AntDesign'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'Feather'
  | 'MaterialCommunityIcons';

type Props = {
  name: string;
  packageName: IconPackage;
  size?: number;
  color?: string;
};

const IconComponent = (props: Props) => {
  const {name, packageName, size = 30, color = '#900'} = props;

  const renderIcon = useMemo(() => {
    switch (packageName) {
      case 'MaterialIcons':
        return <Icon1 name={name} size={size} color={color} />;
      case 'FontAwesome':
        return <Icon2 name={name} size={size} color={color} />;
      case 'AntDesign':
        return <Icon3 name={name} size={size} color={color} />;
      case 'FontAwesome5':
        return <Icon4 name={name} size={size} color={color} />;
      case 'FontAwesome6':
        return <Icon5 name={name} size={size} color={color} />;
      case 'Feather':
        return <Icon6 name={name} size={size} color={color} />;
      case 'MaterialCommunityIcons':
        return <Icon7 name={name} size={size} color={color} />;
      default:
        return <Text>###</Text>;
    }
  }, [packageName, name, size, color]);

  return <View>{renderIcon}</View>;
};

export default IconComponent;

const styles = StyleSheet.create({});
