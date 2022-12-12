import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import GoogleIcon from '../../assets/svgs/google.svg';
import {units} from '../../themes/Units';
import {colors} from '../../themes/Colors';

const SocialMediaCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <GoogleIcon />
      <Text style={{marginLeft: units.width / 26}}>Google</Text>
    </TouchableOpacity>
  );
};

export default SocialMediaCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.GRAY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 28,
    justifyContent: 'center',
    paddingVertical: units.height / 58,
    borderColor: colors.LIGHTGREY,
  },
});
