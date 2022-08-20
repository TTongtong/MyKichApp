import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Image, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';

import bakes from '../../../assets/data/bakes.json';
import BasketDishItem from '../../components/BasketDishItem';
import DishListItem from '../../components/DishListItem';

const bake = bakes[0];

// const BasketDishItem = ({basketDish}) => {
//   return (
//     <View style={styles.row}>
//       <View style={styles.quantityContainer}>
//         <Text>1</Text>
//       </View>
//       <Text style={{fontWeight: '600'}}>{basketDish.name}</Text>
//       <Text style={{marginLeft: 'auto'}}>{basketDish.price}</Text>
//     </View>
//   );
// };

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{bake.name}</Text>

      <Text style={{fontWeight: 'bold', marginTop: 20, fontSize: 19}}>
        Your Items
      </Text>

      <FlatList
        data={bake.dishes}
        renderItem={({item}) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>create Order</Text>
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  page: {
    falx: 1,
    width: '100%',
    paddingVertical: 40,
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 10,
  },
  description: {
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  quantity: {
    fontSize: 30,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#f01d71',
    marginTop: '30%',
    padding: 25,
    alignItems: 'center',
    marginVertical: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});
