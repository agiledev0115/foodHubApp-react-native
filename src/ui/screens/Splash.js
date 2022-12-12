import {StyleSheet, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: units.height / 5,
  },
});
