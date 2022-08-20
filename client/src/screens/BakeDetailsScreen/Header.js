import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import bakes from '../../../assets/data/bakes.json';

const bake = bakes[0];

const BakeDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image source={{uri: bake.image}} style={styles.image} />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{bake.name}</Text>
        <Text style={styles.subtitle}>
          $ {bake.deliveryFee} &#8226; {bake.minDeliveryTime}-
          {bake.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default BakeDetailsPage;
