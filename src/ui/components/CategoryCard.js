import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';

const CategoryCard = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHTGREY,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: units.width / 53,
    paddingVertical: units.height / 116,
  },
  title: {
    color: colors.DARKGRAY,
    fontSize: 12,
  },
});
