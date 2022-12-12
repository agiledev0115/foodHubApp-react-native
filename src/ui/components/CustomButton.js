import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ORANGE,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: units.height / 35,
  },
  title: {
    color: colors.WHITE,
    fontWeight: '600',
    fontSize: 16,
  },
});
