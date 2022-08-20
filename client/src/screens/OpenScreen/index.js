import React from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import BakeHomeScreen from '../BakeHomeScreen';
import GardenHomeScreen from '../GardenHomeScreen';

import {useNavigation} from '@react-navigation/native';

const OpenScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <View style={styles.conatainer}>
        <View>
          <Pressable
            onPress={() => navigation.navigate('BakeHomeScreen')}
            style={styles.button}>
            <Text style={styles.buttonText}>Garden</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.name}>Garden</Text>
        <Pressable
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default OpenScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  conatainer: {
    padding: 20,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
