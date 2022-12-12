import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import DotIcon from '../../assets/svgs/dot.svg';
import MasterCardIcon from '../../assets/svgs/masterCard.svg';
import PaypalIcon from '../../assets/svgs/paypal.svg';

const PaymentCard = ({onPress, selectedItem, item}) => {
  return (
    <View style={styles.paymentMethodContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.cardIconContainer}>
          {item.title === 'Credit Card' ? <MasterCardIcon /> : <PaypalIcon />}
        </View>
        <Text style={styles.paymentMethodText}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.radioButton} onPress={onPress}>
        {selectedItem === item.id && <DotIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  paymentMethodContainer: {
    marginTop: units.height / 101,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentMethodText: {
    fontSize: 16,
    color: colors.DARK,
    marginStart: units.width / 23,
  },
  radioButton: {
    borderWidth: 2,
    borderColor: colors.DARK,
    borderRadius: 100,
    justifyContent: 'center',
    minHeight: units.height / 37,
    minWidth: units.width / 17,
    alignItems: 'center',
  },
  cardIconContainer: {
    borderRadius: 10,
    backgroundColor: colors.LIGHTGREY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: units.width / 47,
    paddingVertical: units.height / 90,
  },
  bodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
