import React from 'react';
import {StyleSheet, Image, View, Text, Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const BakeItem = ({bake}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Bake', {id: bake.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.bakeContainer}>
      <Image source={{uri: bake.image}} style={styles.image} />

      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{bake.name}</Text>
          <Text style={styles.subtitle}>
            $ {bake.deliveryFee} &#8226; {bake.minDeliveryTime}-
            {bake.maxDeliveryTime}
            {' minutes'}
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{bake.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default BakeItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bakeContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
  },
  subtitle: {
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 'auto',
    backgroundColor: 'lightgray',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});
