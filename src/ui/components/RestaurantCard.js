import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import MotorIcon from '../../assets/svgs/motor.svg';
import ClockIcon from '../../assets/svgs/clock.svg';
import RateCard from './RateCard';
import FavoritesCard from './FavoritesCard';
import CategoryCard from './CategoryCard';

const RestaurantCard = ({onPress, item}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{uri: item.image}}
          style={styles.imageContainer}
          resizeMode="stretch"
          borderTopRightRadius={15}
          borderTopLeftRadius={15}
        />
        <View style={styles.rateContainer}>
          <RateCard count={item.rate} />
        </View>
        <View style={styles.favoriteContainer}>
          <FavoritesCard />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.titleContainer}>
            <MotorIcon />
            <Text style={styles.deliveryText}>Free delivery</Text>
            <ClockIcon style={{marginLeft: units.width / 23}} />
            <Text style={styles.deliveryText}>5-10 min</Text>
          </View>
          <View style={styles.categoryContainer}>
            <CategoryCard title="Burger" />
            <View style={styles.card}>
              <CategoryCard title="Fast Food" />
            </View>
            <View style={styles.card}>
              <CategoryCard title="Chicken" />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.WHITE,
    shadowColor: colors.DARK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
    marginVertical: units.height / 80,
    marginHorizontal: units.width / 14,
  },
  imageContainer: {
    width: '100%',
    minHeight: units.height / 5,
  },
  title: {
    color: colors.DARK,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: '600',
  },
  bodyContainer: {
    marginTop: units.height / 67,
    marginLeft: units.width / 31,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: units.height / 135,
  },
  deliveryText: {
    marginLeft: units.width / 75,
  },
  rateContainer: {
    position: 'absolute',
    top: units.height / 81,
    left: units.width / 34,
  },
  favoriteContainer: {
    position: 'absolute',
    top: units.height / 81,
    right: units.width / 34,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: units.height / 50,
  },
  card: {
    marginLeft: units.width / 47,
  },
});
