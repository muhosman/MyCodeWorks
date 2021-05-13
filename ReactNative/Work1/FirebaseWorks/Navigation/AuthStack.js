import 'react-native-gesture-handler';
import React, {useState,useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    
  const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
  let routeName;
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value =>{
     if(value == null)
     {
       AsyncStorage.setItem('alreadyLaunch','true');
       setIsFirstLaunch(true);
     }else
     {
       setIsFirstLaunch(false);
     }

    })

  }, []);

  if( isFirstLaunch == null){
    return null;
  }
  else if(isFirstLaunch == true){
    routeName = 'Onboarding'
  }
  else{
    routeName = 'Login'
  }

  return(
    <Stack.Navigator headerMode="none" initialRouteName={routeName}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );

};


export default AuthStack;
