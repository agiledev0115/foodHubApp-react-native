import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import Favorites from '../ui/screens/Favorites';
import {colors} from '../themes/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Retaurant from '../ui/screens/Retaurant';
import HomeStackNavigator from './HomeStackNavigator';
import MarketNavigator from './MarketNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.ORANGE,
        tabBarInactiveTintColor: colors.DARKGRAY,
      }}>
      <Tab.Screen
        name={routes.HOMETAB}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="compass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.RESTAURANT}
        component={Retaurant}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="storefront" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.BASKETTAB}
        component={MarketNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="basket" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.FAVORITES}
        component={Favorites}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PROFILETAB}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
