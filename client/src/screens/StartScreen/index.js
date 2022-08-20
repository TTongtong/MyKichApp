import * as React from 'react';
import {View, ImageBackground} from 'react-native';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const StartScreen = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where you Living ?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/img-1.jpeg')}
        style={styles.image}>
        <Text style={styles.title}>Find Your Area</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
