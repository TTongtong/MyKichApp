import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import bakes from '../../../assets/data/bakes.json';

const bake = bakes[0];

const BasketDishItem = ({basketDish}) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketDish.quantity}</Text>
      </View>
      <Text style={{fontWeight: '600'}}>{basketDish.name}</Text>
      <Text style={{marginLeft: 'auto'}}>$ {basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },

  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default BasketDishItem;
