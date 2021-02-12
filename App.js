import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName = 'Inicio'
          screenOptions={{
            title: 'componente principal',
            headerTitleAlign : 'left',
            headerStyle:{
              backgroundColor : 'red'
            },
            headerTintColor : '#fff',
            headertistStyle : {
              fontWeight : 'bold'
            }
          }}
        >
          <Stack.Screen
            name='Inicio'
            component = {Inicio}
            options={{
              title: 'componente principal',
              /*headerTitleAlign : 'left',
              headerStyle:{
                backgroundColor : 'red'
              },
              headerTintColor : '#fff',
              headertistStyle : {
                fontWeight : 'bold'
              }*/
            }}
          />
          <Stack.Screen
            name='Nosotros'
            component = {Nosotros}
            options={({route})=>({
              title:route.params.clienteId
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
