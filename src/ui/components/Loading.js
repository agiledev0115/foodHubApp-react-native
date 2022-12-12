import React from 'react';
import {View, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.overlay}>
      <Lottie
        source={require('../../assets/animation/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    opacity: 0.7,
    width: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
