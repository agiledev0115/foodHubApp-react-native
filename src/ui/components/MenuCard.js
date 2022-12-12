import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MenuIcon from '../../assets/svgs/menu.svg';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const MenuCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MenuIcon />
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 12,
    paddingVertical: units.height / 50,
    paddingHorizontal: units.width / 29,
    alignSelf: 'baseline',
    shadowColor: colors.DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
