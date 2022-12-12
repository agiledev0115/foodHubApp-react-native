import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import FavoritesCard from './FavoritesCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {removeFavorites} from '../../context/userSlice';

const FavoritesScreenCard = ({item}) => {
  const dispatch = useDispatch();

  const removeRestaurantFavorites = () => {
    dispatch(removeFavorites({id: item.id}));
  };

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View>
          <Image
            source={{uri: item.image}}
            borderRadius={20}
            style={styles.image}
          />
          <View style={styles.topContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{item.price}$</Text>
            </View>
            <FavoritesCard />
          </View>
          <View style={styles.rateCotanier}>
            <Text>{item.rate}</Text>
            <Icon name="star" size={25} color={colors.YELLOW} />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.textBody}>{item.category}</Text>
          </View>
          <TouchableOpacity onPress={removeRestaurantFavorites}>
            <Icon
              name="delete-circle-outline"
              size={30}
              color={colors.ORANGE}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FavoritesScreenCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    shadowColor: colors.DARK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    marginTop: units.height / 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.DARK,
  },
  bodyContainer: {
    marginHorizontal: units.width / 29,
    marginVertical: units.height / 67,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBody: {
    color: colors.GRAY,
    marginTop: units.height / 81,
  },
  topContainer: {
    position: 'absolute',
    left: units.width / 31,
    right: units.width / 31,
    top: units.height / 67,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  priceContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    paddingHorizontal: units.width / 75,
    paddingVertical: units.height / 162,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    color: colors.DARK,
    fontWeight: '600',
  },
  rateCotanier: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: units.width / 47,
    paddingVertical: units.height / 101,
    marginTop: units.height / -32,
    marginLeft: units.width / 31,
    shadowColor: colors.ORANGE,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: units.height / 5,
  },
});
