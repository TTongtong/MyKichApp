import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BakeHomeScreen from '../screens/BakeHomeScreen';
import GardenHomeScreen from '../screens/GardenHomeScreen';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen naem="BakeHome" component={BakeHomeScreen} />
      <Tab.Screen naem="GardenHome" component={GardenHomeScreen} />
    </Tab.Navigator>
  );
};

export default TopTab;
