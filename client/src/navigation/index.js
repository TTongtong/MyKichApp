/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

import StartScreen from '../screens/StartScreen';
import Opening from '../screens/Opening';

import OpenScreen from '../screens/OpenScreen';

import BakeHomeScreen from '../screens/BakeHomeScreen';
import BakeDetailsScreen from '../screens/BakeDetailsScreen';

import GradenHomeScreen from '../screens/GardenHomeScreen';

import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';

import DishDetailsScreen from '../screens/DishDetailsScreen';

import Basket from '../screens/Basket';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomHomeTabs" component={BottomHomeTabs} />
    </Stack.Navigator>
  );
};

const BottomTab = createMaterialBottomTabNavigator();
const BottomHomeTabs = () => {
  return (
    <BottomTab.Navigator barStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={BakeHomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={BakeHomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={OrderScreen}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Bakes" component={BakeHomeScreen} />
      <HomeStack.Screen name="Bake" component={BakeDetailsScreen} />
      <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="Orders" component={OrderScreen} />
      <OrderStack.Screen name="Order" component={OrderDetails} />
    </OrderStack.Navigator>
  );
};

export default RootNavigator;
