import * as React from 'react';
import {View, ImageBackground} from 'react-native';
import {Pressable} from 'react-native';
import {Text} from 'react-native';
import styles from './styles';

const OpeningScreen = props => {
  //const navigation = useNavigation();
  return (
    <View>
      {/* <Pressable
        style={styles.searchButton}
        onPress={() => console.navigate('Search Btn clicked')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where you Living ?</Text>
      </Pressable> */}
      <ImageBackground
        source={require('../../../assets/images/img-1.jpeg')}
        style={styles.image}>
        {/* <Text style={styles.title}>Find Your Location</Text> */}

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Enter Your Location</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default OpeningScreen;
