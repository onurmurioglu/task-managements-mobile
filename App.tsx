import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/router/AppNavigator';

const App = () => (
  <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle="dark-content" />
    <AppNavigator />
  </SafeAreaView>
);

export default App;
