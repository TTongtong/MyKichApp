import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

import bakes from '../../../assets/data/bakes.json';

const dish = bakes[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>

      <View style={styles.separator} />

      <View style={styles.row}>
        <Icon name="minuscircleo" size={60} color={'black'} onPress={onMinus} />
        <Text style={styles.quantity}>{quantity}</Text>
        <Icon name="pluscircleo" size={60} color={'black'} onPress={onPlus} />
      </View>

      <Pressable
        onPress={() => navigation.navigate('Basket')}
        style={styles.button}>
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; ${getTotal()}
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailsScreen;

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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 30,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'black',
    marginTop: '85%',
    padding: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
});
