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

const HomeRestaurantCard = ({onPress, restaurant}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{uri: restaurant.image}}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.rateContainer}>
          <RateCard count={restaurant.rate} />
        </View>
        <View style={styles.favoriteContainer}>
          <FavoritesCard />
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{restaurant.title}</Text>
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

export default HomeRestaurantCard;

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
    marginHorizontal: units.width / 46,
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
  image: {
    height: units.height / 6,
  },
});
