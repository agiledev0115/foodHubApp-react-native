import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/profilePhoto.png')}
        borderRadius={100}
      />
      <TouchableOpacity style={styles.cameraContainer}>
        <Icon name="camera" size={18} color={colors.GRAY} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: units.width / 37,
    paddingVertical: units.height / 81,
  },
  cameraContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: units.width / 41,
    paddingVertical: units.height / 90,
    position: 'absolute',
    right: units.width / 75,
    bottom: units.height / 81,
  },
});
