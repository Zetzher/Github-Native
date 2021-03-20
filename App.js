import 'react-native-gesture-handler';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import LandingPage from './src/views/LandingPage';
import ProfileScreen from './src/views/ProfileScreen';
import Commits from './src/views/Commits';

import Footer from './src/components/Footer';

const App = (props) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Landing"
            component={LandingPage}
            options={{
              title: 'Homepage',
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Commits"
            component={Commits}
            options={{
              title: 'Commits',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
