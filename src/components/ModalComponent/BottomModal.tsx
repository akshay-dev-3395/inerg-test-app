import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';

type Props = {
  children: React.ReactNode;
  isVisible: boolean;
  setVisible: (data: boolean) => void;
};

const BottomModal = (props: Props) => {
  const {children, isVisible, setVisible} = props;

  return (
    <>
      {isVisible && (
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <Modal
        onBackButtonPress={() => {
          setVisible(false);
        }}
        onBackdropPress={() => {
          setVisible(false);
        }}
        isVisible={isVisible}
        backdropOpacity={0.1}
        style={{
          margin: 0,
          padding: 0,
        }}
        propagateSwipe={true}
        useNativeDriver={false}
        onSwipeComplete={() => setVisible(false)}>
        <View style={styles.wrapperDiv}>{children}</View>
      </Modal>
    </>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  wrapperDiv: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    flex: 1,
  },
});
