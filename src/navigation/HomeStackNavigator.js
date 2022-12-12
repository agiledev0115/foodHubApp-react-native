import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import Home from '../ui/screens/Home';
import Detail from '../ui/screens/Detail';
import RestaurantDetail from '../ui/screens/RestaurantDetail';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen
        name={routes.RESTAURANTDETAIL}
        component={RestaurantDetail}
      />
      <Stack.Screen name={routes.DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
