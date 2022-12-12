import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {units} from '../../themes/Units';
import PaymentCard from '../components/PaymentCard';
import {payments} from '../../database/PaymetList';
import CreditCard from '../components/CreditCard';
import {creditCards} from '../../database/CreditCardList';
import CustomButton from '../components/CustomButton';
import payBasketApi from '../../services/api/payBasketApi';
import {routes} from '../../navigation/routes';
import {showMessage} from 'react-native-flash-message';

const Checkout = ({navigation, route}) => {
  const [selectedPayment, setSelectedPayment] = useState(payments[0].id);
  const {subTotal, totalPrice, deliveryPrice} = route.params.basketParams;
  const {loading, error, payClearBasket} = payBasketApi();

  const renderPayemtCard = ({item}) => (
    <PaymentCard
      item={item}
      selectedItem={selectedPayment}
      onPress={() => setSelectedPayment(item.id)}
    />
  );

  const renderCreditCard = ({item}) => <CreditCard card={item} />;

  const onClickBack = () => {
    navigation.goBack();
  };

  const cardListHeader = () => {
    return (
      <TouchableOpacity style={styles.addCardContainer}>
        <Icon name="plus" size={30} color={colors.WHITE} />
      </TouchableOpacity>
    );
  };

  const handlePayFood = () => {
    payClearBasket(navigationOrderScreen);
  };

  const navigationOrderScreen = () => {
    navigation.replace(routes.DELIVERY);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={onClickBack}>
          <Icon name="chevron-left" size={28} color={colors.DARK} />
        </TouchableOpacity>
        <Text style={styles.topTitle}>Checkout</Text>
        <View />
      </View>
      <View style={styles.addressContainer}>
        <View style={styles.deliveryContainer}>
          <Icon name="map-marker-outline" size={30} color={colors.WHITE} />
          <Text style={styles.addressText}>648 Bridge Street</Text>
        </View>
        <View style={[styles.timeContainer]}>
          <Icon name="clock-fast" size={30} color={colors.WHITE} />
          <Text style={styles.addressText}>20-25 min</Text>
        </View>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Payment</Text>
        <FlatList
          data={payments}
          renderItem={renderPayemtCard}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          style={{
            marginTop: units.height / 50,
          }}
        />
      </View>
      <View>
        <FlatList
          data={creditCards}
          renderItem={renderCreditCard}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={cardListHeader}
          ListHeaderComponentStyle={styles.headerListStyle}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceTitle}>SubTotal:</Text>
          <Text style={styles.priceText}>{subTotal} $</Text>
        </View>
        <View style={[styles.priceContainer, {marginTop: units.height / 81}]}>
          <Text style={styles.priceTitle}>Delivery:</Text>
          <Text style={styles.priceText}>{deliveryPrice} $</Text>
        </View>
        <View style={[styles.priceContainer, {marginTop: units.height / 81}]}>
          <Text style={styles.priceTitle}>Total:</Text>
          <Text style={styles.priceText}>{totalPrice} $</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Pay" onPress={handlePayFood} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: units.height / 34,
    marginHorizontal: units.width / 16,
  },
  topTitle: {
    color: colors.DARK,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  addressContainer: {
    flexDirection: 'row',
    backgroundColor: colors.ORANGE,
    paddingHorizontal: units.width / 15,
    paddingVertical: units.height / 68,
    marginTop: units.height / 51,
  },
  deliveryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  addressText: {
    fontSize: 16,
    color: colors.WHITE,
    fontWeight: '500',
    marginStart: units.width / 94,
  },
  timeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderStartWidth: 1,
    borderStartColor: colors.DARRWHITE,
    marginStart: units.width / 15,
    paddingStart: units.width / 15,
  },
  paymentText: {
    color: colors.DARK,
    fontSize: 20,
    fontWeight: '600',
  },
  paymentContainer: {
    marginVertical: units.height / 28,
    marginHorizontal: units.width / 15,
  },
  addCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ORANGE,
    borderRadius: 100,
    paddingHorizontal: units.width / 23,
    paddingVertical: units.height / 51,
  },
  headerListStyle: {
    justifyContent: 'center',
    marginStart: units.width / 23,
  },
  bottomContainer: {
    marginHorizontal: units.width / 17,
    marginTop: units.height / 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHTGREY,
    paddingBottom: units.height / 81,
  },
  priceTitle: {
    fontSize: 16,
    color: colors.DARK,
  },
  priceText: {
    fontSize: 19,
    color: colors.DARK,
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: units.height / 50,
    marginHorizontal: units.width / 7,
    marginBottom: units.height / 81,
  },
});
