import * as React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import bakes from '../../../assets/data/bakes.json';
import BakeItem from '../../components/BakeItem';

const BakeHomeScreen = props => {
  return (
    <View style={styles.page}>
      <FlatList
        data={bakes}
        renderItem={({item}) => <BakeItem bake={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BakeHomeScreen;

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
