import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DishListItem = ({dish}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Dish', {id: dish.id})}
      style={styles.container}>
      <View style={{flex: 3 / 3}}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && <Image source={{uri: dish.image}} style={styles.image} />}
    </Pressable>
  );
};

export default DishListItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});
