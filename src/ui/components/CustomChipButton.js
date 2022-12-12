import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const CustomChipButton = ({item, selected, onPress}) => {
  const txtColor = item.id === selected ? colors.WHITE : colors.DARKORANGE;
  const bgColor = item.id === selected ? colors.ORANGE : colors.LIGHTORANGE;

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={{color: txtColor}}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomChipButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    paddingHorizontal: units.width / 23,
    paddingVertical: units.height / 162,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: units.width / 53,
  },
});
