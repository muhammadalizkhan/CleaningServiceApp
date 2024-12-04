import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../../Types/Navigation/navigation';
import Home from '../../screens/Home/Home';


const Stack = createStackNavigator<RootStackParamList>();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    options={{
                        headerShown: false
                    }}
                    component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
