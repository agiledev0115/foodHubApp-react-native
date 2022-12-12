import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import RestaurantCard from '../components/RestaurantCard';
import {units} from '../../themes/Units';
import {routes} from '../../navigation/routes';
import RestaurantApi from '../../services/api/restaurantApi';
import Loading from '../components/Loading';

const Retaurant = ({navigation}) => {
  const {data, loading, error} = RestaurantApi();

  const onClickNavigateDetail = title => {
    navigation.navigate(routes.RESTAURANTDETAIL, {name: title});
  };

  const renderRestaurantCard = ({item}) => (
    <RestaurantCard
      onPress={() => onClickNavigateDetail(item.title)}
      item={item}
    />
  );

  const listHeader = () => {
    return (
      <View style={styles.topContainer}>
        <View style={styles.tileContainer}>
          <Text style={styles.title}>All{'\n'}Restaurants</Text>
          <Text style={styles.resultText}>{data.length} results</Text>
        </View>
        <Image
          source={require('../../assets/images/pizzaRes.png')}
          style={styles.image}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <FlatList
        data={data}
        renderItem={renderRestaurantCard}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={listHeader}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Retaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: 33,
    fontWeight: '700',
    color: colors.ORANGE,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: units.width / 38,
  },
  image: {
    alignSelf: 'flex-end',
  },
  tileContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: units.width / 14,
  },
  resultText: {
    fontSize: 18,
    color: colors.GRAY,
    marginTop: units.height / 40,
  },
});
