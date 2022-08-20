import * as React from 'react';
import {View, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useRoute, useNavigation} from '@react-navigation/native';

import bakes from '../../../assets/data/bakes.json';
import DishListItem from '../../components/DishListItem';
import Header from './Header';

import styles from './styles';

const bake = bakes[0];

const BakeDetailsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header bake={bake} />}
        data={bake.dishes}
        renderItem={({item}) => <DishListItem dish={item} />}
        keyExtractor={item => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default BakeDetailsPage;
