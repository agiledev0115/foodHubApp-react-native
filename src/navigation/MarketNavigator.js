import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';
import Basket from '../ui/screens/Basket';
import Checkout from '../ui/screens/Checkout';
import Delivery from '../ui/screens/Delivery';

const Stack = createNativeStackNavigator();

const MarketNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.BASKET} component={Basket} />
      <Stack.Screen name={routes.CHECKOUT} component={Checkout} />
      <Stack.Screen name={routes.DELIVERY} component={Delivery} />
    </Stack.Navigator>
  );
};

export default MarketNavigator;
