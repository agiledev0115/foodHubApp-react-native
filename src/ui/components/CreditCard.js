import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import MasterIcon from '../../assets/svgs/master.svg';
import TickIcon from '../../assets/svgs/tickSquare.svg';
import PasswordIcon from '../../assets/svgs/password.svg';
import VisaIcon from '../../assets/svgs/visa.svg';

const CreditCard = ({card, selected}) => {
  const bgColor = card.title === 'visa' ? colors.BLUE : colors.DARK;

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View style={styles.icon}>
        {card.title === 'visa' ? <VisaIcon /> : <MasterIcon />}
      </View>
      <View style={styles.bodyContainer}>
        <PasswordIcon />
        <Text style={styles.text}>{card.number}</Text>
        <TickIcon style={styles.tick} />
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: units.height / 67,
    paddingHorizontal: units.width / 23,
    marginHorizontal: units.width / 37,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: units.height / 81,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.WHITE,
    marginStart: units.width / 47,
  },
  bodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: units.height / 27,
  },
  tick: {
    marginStart: units.width / 23,
  },
});
