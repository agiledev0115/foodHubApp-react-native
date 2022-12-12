import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import CustomChipButton from '../components/CustomChipButton';
import {categoryData} from '../../database/CategoryList';
import RestaurantFoodCard from '../components/RestaurantFoodCard';
import {routes} from '../../navigation/routes';
import RestaurantFoodApi from '../../services/api/restaurantFoodApi';
import Loading from '../components/Loading';

const RestaurantDetail = ({navigation, route}) => {
  const [selectedCategory, setSelectedCategory] = useState(categoryData[0].id);
  const {name} = route.params;
  const {data, loading, error} = RestaurantFoodApi(name);

  const handleSelectCategory = id => {
    setSelectedCategory(id);
  };

  const onClickCard = id => {
    navigation.navigate(routes.DETAIL, {id});
  };

  const renderCategory = ({item}) => (
    <CustomChipButton
      item={item}
      selected={selectedCategory}
      onPress={() => handleSelectCategory(item.id)}
    />
  );

  const renderFood = ({item}) => (
    <RestaurantFoodCard onPress={() => onClickCard(item.id)} item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <View style={styles.topContainer}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.adressContainer}>
            <Icon name="map-marker-outline" size={30} color={colors.DARK} />
            <Text style={styles.addressText}>648 Bridge Street</Text>
          </View>
        </View>
        <View style={styles.image}>
          <Image
            source={require('../../assets/images/profilePhoto.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <FlatList
          data={categoryData}
          renderItem={renderCategory}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginStart: units.width / 15}}
        />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderFood}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          style={{marginTop: units.height / 34}}
        />
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: units.width / 15,
    marginVertical: units.height / 26,
  },
  adressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: units.height / 101,
  },
  addressText: {
    color: colors.DARKGRAY,
    fontWeight: '300',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.DARK,
  },
  image: {
    borderRadius: 12,
    shadowColor: 'yellow',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: units.width / 7.5,
    height: units.height / 16.2,
  },
});
