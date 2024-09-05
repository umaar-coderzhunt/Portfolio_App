import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/components/BottomTab';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
