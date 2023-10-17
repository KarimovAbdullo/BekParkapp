import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useRef} from 'react';
import CardScreen from 'screens/Card/CardScreen';
import EmptyScreen from 'screens/Empty/Empty';
import FinishScreen from 'screens/Finish/FinishScreen';
import R from '../res';
import {TTheme} from '../res/theme';
import BroneScreen from '../screens/BroneScreen/BroneScreen';
import ContactScreen from '../screens/ContactSreen/ContactSreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';

import HomeScreen from '../screens/Home';
import ShopScreen from '../screens/ShopScreen/ShopScreen';
import TransScreen from '../screens/TransScreen/TransScreen';
import {TNavigationParams} from '../types/navigation';

const Navigator = ({theme}: {theme: TTheme}) => {
  const RootStack = createStackNavigator();
  const navigationRef = useNavigationContainerRef<TNavigationParams>();
  const routeNameRef = useRef();

  useEffect(() => {}, []);

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          component={HomeScreen}
          name={R.routes.SCREEN_HOME}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={ShopScreen}
          name={'ShopScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={FinishScreen}
          name={'FinishScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={BroneScreen}
          name={'BroneScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />
        <RootStack.Screen
          component={EmptyScreen}
          name={'EmptyScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={CardScreen}
          name={'CardScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={TransScreen}
          name={'TransScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={ContactScreen}
          name={'ContactScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />

        <RootStack.Screen
          component={DetailScreen}
          name={'DetailScreen'}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
