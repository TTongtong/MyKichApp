import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import orders from '../../../assets/data/orders.json';
import bakes from '../../../assets/data/bakes.json';

import Ionicons from 'react-native-vector-icons/Ionicons';

import OrderListItem from '../../components/OrderListItem';

import styles from './styles';
import BasketDishItem from '../../components/BasketDishItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{uri: order.Bake.image}} style={styles.image} />

        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.iconContainer}
        />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Bake.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days age</Text>

          <Text style={styles.menuTitle}>Your Order</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={bakes[0].dishes}
      renderItem={({item}) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
