import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar barStyle="light-content" />
    </NavigationContainer>
  );
};

export default App;
