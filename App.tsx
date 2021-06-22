import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home/home';
import Categores from './src/screens/categores';
import Checkout from './src/screens/checkout';
import CreditCard from './src/screens/creditCard';
import Produtos from './src/screens/produtos';
import ProdutosDetalhe from './src/screens/produtosDetalhe';

import firebase from 'firebase/app'
import { firebaseConfig } from './src/config'

firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="categories" component={Categores} options={{ headerShown: false }} />
        <Stack.Screen name="produtos" component={Produtos} options={{ headerShown: false }} />
        <Stack.Screen name="produtosDetalhe" component={ProdutosDetalhe} options={{ headerShown: false }} />
        <Stack.Screen name="checkout" component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name="creditCard" component={CreditCard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

