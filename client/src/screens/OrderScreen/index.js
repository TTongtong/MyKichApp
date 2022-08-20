/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';

import OrderListItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json';

const OrderScreen = () => {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({item}) => <OrderListItem order={item} />}
      />
    </View>
  );
};

export default OrderScreen;
