import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import OptionsIcon from '../../assets/svgs/options.svg';
import MenuCard from '../components/MenuCard';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import SearchInput from '../components/SearchInput';
import FoodCard from '../components/FoodCard';
import {categoryData} from '../../database/CategoryList';
import HomeRestaurantCard from '../components/HomeRestaurantCard';
import {routes} from '../../navigation/routes';
import {useDispatch} from 'react-redux';
import {logOutAccount} from '../../context/userSlice';
import HomeLoading from '../components/HomeLoading';
import RestaurantApi from '../../services/api/restaurantApi';

const Home = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(categoryData[0].id);
  const dispatch = useDispatch();
  const {data, loading, error} = RestaurantApi();

  const selectCategoryClick = id => {
    setSelectedItem(id);
  };

  const onClickMenu = () => {
    dispatch(logOutAccount());
  };

  const renderFoodCategory = ({item}) => (
    <FoodCard
      item={item}
      onPress={() => selectCategoryClick(item.id)}
      selectedItem={selectedItem}
    />
  );

  const renderRestaurantCard = ({item}) => (
    <HomeRestaurantCard
      onPress={() => onClickNavigateDetail(item.title)}
      restaurant={item}
    />
  );

  const onClickNavigateDetail = title => {
    navigation.navigate(routes.RESTAURANTDETAIL, {name: title});
  };

  const onClickViewAll = () => {
    navigation.jumpTo(routes.RESTAURANT);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <HomeLoading />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bodyContainer}>
          <View style={styles.topbar}>
            <MenuCard onPress={onClickMenu} />
            <View style={styles.image}>
              <Image
                source={require('../../assets/images/user.png')}
                style={styles.image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.title}>What would you like to order</Text>
            <View style={styles.searchContainer}>
              <View style={{flex: 1}}>
                <SearchInput />
              </View>
              <TouchableOpacity style={styles.optionsContainer}>
                <OptionsIcon />
              </TouchableOpacity>
            </View>
            <FlatList
              data={categoryData}
              renderItem={renderFoodCategory}
              horizontal
              style={styles.list}
              keyExtractor={(_, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.cardContainer}>
              <Text style={styles.cardTitle}>Featured Restaurants</Text>
              <TouchableOpacity onPress={onClickViewAll}>
                <Text style={styles.viewButton}>View All {'>'} </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={data}
              renderItem={renderRestaurantCard}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.listContainer}
            />
            <View
              style={[styles.cardContainer, {marginTop: units.height / 33}]}>
              <Text style={styles.cardTitle}>Popular Restaurants</Text>
              <TouchableOpacity onPress={onClickViewAll}>
                <Text style={styles.viewButton}>View All {'>'} </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={data}
              renderItem={renderRestaurantCard}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.listContainer}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
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
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyContainer: {
    paddingHorizontal: units.width / 14,
    marginTop: units.height / 30,
    marginBottom: units.height / 101,
  },
  title: {
    fontSize: 30,
    lineHeight: 30,
    fontWeight: '700',
    color: colors.DARK,
    marginTop: units.height / 30,
  },
  optionsContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 14,
    paddingHorizontal: units.width / 23,
    paddingVertical: units.height / 50,
    shadowColor: colors.DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginLeft: units.width / 21,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: units.height / 45,
  },
  list: {
    backgroundColor: colors.WHITE,
    marginTop: units.height / 40,
  },
  cardContainer: {
    marginTop: units.height / 27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.DARK,
  },
  viewButton: {
    color: colors.ORANGE,
    fontSize: 13,
    lineHeight: 13,
    fontWeight: '500',
  },
  listContainer: {
    paddingVertical: units.height / 50,
  },
});
