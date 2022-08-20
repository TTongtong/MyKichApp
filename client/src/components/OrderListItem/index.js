/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OrderListItem = ({order}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Order', {id: order.id})}
      style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
      <Image
        source={{uri: order.Bake.image}}
        style={{width: 80, height: 80, marginRight: 30}}
      />

      <View>
        <Text style={{fontWeight: '600', fontSize: 16}}>{order.Bake.name}</Text>
        <Text style={{marginVertical: 5}}>3 items &#8226; 38.15</Text>
        <Text>2 day age &#8226; {order.status}</Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;
