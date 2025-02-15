import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';

import ScreenWrapper from '@app/components/Layouts/ScreenWrapper';

const InitialScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.textStyle}>WELCOME</Text>
      </View>
    </ScreenWrapper>
  );
};

export default InitialScreen;
