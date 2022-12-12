import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RateCard = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <Icon name="star" size={12} color={colors.YELLOW} style={styles.icon} />
    </View>
  );
};

export default RateCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    paddingVertical: units.height / 90,
    paddingHorizontal: units.width / 41,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: units.width / 75,
  },
  title: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '600',
  },
});
