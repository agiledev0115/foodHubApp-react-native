import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {units} from '../../themes/Units';
import {colors} from '../../themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButton from '../components/BackButton';

const Delivery = ({navigation}) => {
  const onClickPhone = () => {
    Linking.openURL(`tel:${5552345678}`);
  };

  const onClickBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              title={'Restaurant'}>
              <View style={styles.markerContainer}>
                <Icon name="storefront" size={25} color={colors.ORANGE} />
              </View>
            </Marker>
          </MapView>
          <View style={styles.topBar}>
            <BackButton onPress={onClickBack} />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.deliveryContainer}>
            <Text style={styles.deliverytext}>10 minutes left</Text>
            <Text style={styles.toText}>Delivery to Ibrahim Asgari</Text>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.progressLine} />
            <View style={styles.progressLine} />
            <View style={styles.progressLine} />
            <View
              style={[styles.progressLine, {backgroundColor: colors.GRAY}]}
            />
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.motorContaniner}>
              <Image
                source={require('../../assets/images/motor.png')}
                style={{tintColor: colors.ORANGE}}
              />
            </View>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailTitle}>Delivered your order</Text>
              <Text style={styles.detailSubTitle}>
                We deliver your goods to you in the shortes possible time.
              </Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.driverContainer}>
              <Image
                source={require('../../assets/images/driverDefault.png')}
              />
              <View style={{marginStart: units.width / 31}}>
                <Text style={styles.driverText}>Johan Hawn</Text>
                <Text style={styles.driverStatus}>Personal Courier</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.phoneContainer}
              onPress={onClickPhone}>
              <Icon name="phone-in-talk" size={25} color={colors.WHITE} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  map: {
    height: units.height / 2,
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  deliverytext: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.DARK,
  },
  deliveryContainer: {
    alignItems: 'center',
    marginTop: units.height / 30,
  },
  toText: {
    fontSize: 12,
    color: colors.GRAY,
    marginTop: units.height / 135,
  },
  progressLine: {
    height: 4,
    width: units.width / 5.3,
    backgroundColor: colors.GREEN,
    borderRadius: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: units.height / 25,
  },
  bodyContainer: {
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    paddingHorizontal: units.width / 13,
    flex: 1,
    marginTop: units.height / -81,
    backgroundColor: colors.WHITE,
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 14,
    flexDirection: 'row',
    paddingVertical: units.height / 58,
    paddingHorizontal: units.width / 23,
    marginTop: units.height / 55,
  },
  motorContaniner: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.GRAY,
    borderRadius: 12,
    paddingHorizontal: units.width / 25,
    paddingVertical: units.height / 54,
  },
  detailTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.DARK,
  },
  detailSubTitle: {
    fontSize: 12,
    color: colors.GRAY,
    marginTop: units.height / 102,
  },
  detailTextContainer: {
    flex: 1,
    marginStart: units.width / 31,
  },
  driverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverText: {
    fontWeight: '600',
    color: colors.DARK,
  },
  driverStatus: {
    color: colors.GRAY,
    fontSize: 12,
    marginTop: units.height / 101,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: units.height / 41,
    justifyContent: 'space-between',
  },
  phoneContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.ORANGE,
    borderRadius: 14,
    paddingHorizontal: units.width / 31,
    paddingVertical: units.height / 67,
    backgroundColor: colors.ORANGE,
  },
  markerContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: units.width / 47,
    paddingVertical: units.height / 101,
  },
  topBar: {
    position: 'absolute',
    left: units.width / 28,
    alignItems: 'center',
    marginTop: units.height / 81,
  },
});
