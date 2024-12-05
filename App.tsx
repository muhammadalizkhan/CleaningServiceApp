import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation/Navigation';
import AuthNavigator from './src/navigation/AuthNavigator/AuthNavigator';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const userLoggedIn = true;
      setIsAuthenticated(userLoggedIn);
    };

    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Navigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
