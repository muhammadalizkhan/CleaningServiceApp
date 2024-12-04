import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation/Navigation';
import AuthNavigator from './src/navigation/AuthNavigator/AuthNavigator';

export default function App() {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <Navigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
