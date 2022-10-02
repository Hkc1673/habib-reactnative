import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './ProductScreen';
import ProductDetailScreen from './ProductDetailScreen';
import CreateScreen from './CreateScreen';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router