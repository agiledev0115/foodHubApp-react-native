import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import FavoritesCard from '../components/FavoritesCard';
import BackButton from '../components/BackButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioGroup from 'react-native-radio-buttons-group';
import FoodDetailApi from '../../services/api/foodDetailApi';
import Loading from '../components/Loading';
import addBasketApi from '../../services/api/addBasketApi';
import {routes} from '../../navigation/routes';
import {addFavorites} from '../../context/userSlice';
import {useDispatch} from 'react-redux';

const radioButtonsData = [
  {
    id: '1',
    label: 'Pepper  Julienned \t +2.3$',
    value: 'option1',
    color: colors.ORANGE,
    selected: true,
  },
  {
    id: '2',
    label: 'Baby Spinach \t +4.7$',
    value: 'option2',
    color: colors.ORANGE,
  },
  {
    id: '3',
    label: 'Masroom \t +6.1$',
    value: 'option3',
    color: colors.ORANGE,
  },
];

const Detail = ({navigation, route}) => {
  const {id} = route.params;
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const {data, loading, error} = FoodDetailApi(id);
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();

  const {
    data: bagResponse,
    loading: bagLoading,
    error: bagError,
    addBagProductApi,
  } = addBasketApi();

  const onClickBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setAmount(count * data.price);
  }, [count]);

  const hadnleAddCount = () => {
    setCount(count + 1);
  };

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleBasket = () => {
    const product = {
      title: data.title,
      price: amount ? amount : data.price,
      description: data.description,
      image: data.image,
      count: count,
    };
    addBagProductApi(product, handleNavigateBasket);
  };

  const handleNavigateBasket = () => {
    navigation.jumpTo(routes.BASKETTAB);
  };

  const addFavoritesRestaurant = () => {
    dispatch(addFavorites({restaurant: data}));
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <ScrollView style={styles.scrrol}>
        <View style={styles.topContainer}>
          <Image
            source={{uri: data.image}}
            style={styles.image}
            borderRadius={10}
            resizeMode="cover"
          />
          <View style={styles.topBar}>
            <BackButton onPress={onClickBack} />
            <FavoritesCard onPress={addFavoritesRestaurant} />
          </View>
        </View>
        <View>
          <Text style={styles.title}>{data?.title}</Text>
          <View style={styles.starContainer}>
            <Icon name="star" size={25} color={colors.YELLOW} />
            <Text style={styles.rate}>{data?.rate} (30+)</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              $ {amount ? parseFloat(amount).toFixed(2) : data.price}
            </Text>
            <View style={styles.countContainer}>
              <TouchableOpacity onPress={handleDecreaseCount}>
                <Icon
                  name="minus-circle-outline"
                  color={colors.ORANGE}
                  size={30}
                />
              </TouchableOpacity>
              <Text style={styles.countText}>{count}</Text>
              <TouchableOpacity onPress={hadnleAddCount}>
                <Icon name="plus-circle" size={30} color={colors.ORANGE} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.aboutText}>{data?.description}</Text>
          <Text style={styles.addElementText}>Choice of Add On</Text>
          <RadioGroup
            radioButtons={radioButtons}
            color={colors.ORANGE}
            containerStyle={styles.radioContainer}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleBasket}>
            <View style={styles.buttonIcon}>
              <Icon name="basket" size={25} color={colors.ORANGE} />
            </View>
            <Text style={styles.buttonTitle}>ADD TO BASKET</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  scrrol: {
    paddingHorizontal: units.width / 17,
  },
  image: {
    height: units.height / 4,
    width: units.width / 1.2,
    alignSelf: 'center',
  },
  topBar: {
    position: 'absolute',
    flexDirection: 'row',
    left: units.width / 28,
    right: units.width / 28,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: units.height / 81,
  },
  topContainer: {
    marginTop: units.height / 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: colors.DARK,
    marginTop: units.height / 36,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: units.height / 67,
  },
  rate: {
    color: colors.DARK,
    fontWeight: '600',
    marginLeft: units.width / 46,
  },
  price: {
    color: colors.ORANGE,
    fontWeight: '600',
    lineHeight: 31,
    fontSize: 31,
    marginTop: units.height / 45,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  countText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.DARK,
    marginHorizontal: units.width / 41,
  },
  aboutText: {
    color: colors.GRAY,
    fontSize: 15,
    marginTop: units.height / 37,
  },
  addElementText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.DARK,
    marginTop: units.height / 37,
  },
  radioContainer: {
    marginTop: units.height / 81,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    paddingVertical: units.height / 116,
    paddingHorizontal: units.width / 53,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: units.height / 25,
  },
  buttonIcon: {
    backgroundColor: colors.WHITE,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: units.width / 31,
    paddingVertical: units.height / 67,
  },
  buttonTitle: {
    color: colors.WHITE,
    fontSize: 15,
    marginHorizontal: units.width / 31,
    fontWeight: '600',
  },
});
