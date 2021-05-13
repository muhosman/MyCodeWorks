import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


const Dots =(selected) =>{
    let backgroundColor;
    let width =5;
    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)' 
    return(
        <View style={{
            width,
            height:5,
            marginHorizontal:3,
            backgroundColor
        }} />
            
    );
}

const Skip=({...props}) =>(
    <Button
        title='Skip'
        color='red'
    />
);
const Next=({...props}) =>(
    <Button
        title='Next'
        color='red'
        {...props}
    />
);
const Done=({...props}) =>(
    <Button
        title='Done'
        color='red'
        {...props}
    />
);

const OnboardingScreen = ({navigation}) => {

    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={()=> navigation.replace("Login")}
        onDone={()=> navigation.navigate("Login")}

        pages={[{
            backgroundColor:'green',
            image:<Image source={{uri:'https://lh3.googleusercontent.com/proxy/itrmdmbCxSDQZsBjLvmOEVXCtTSl9oK4vRbTBxnaGTOE51ed8tTqju5E1DSTFZLj7cpvVMKhYOuWg40eIFlnTj91rmF72k6ZINkyf3cKew',}}/>,
            title:'Onboarding 1',
            subtitle:'Done with React Native'
            },
            {
            backgroundColor:'black',   
            image:<Image source={{uri:'https://lh3.googleusercontent.com/proxy/itrmdmbCxSDQZsBjLvmOEVXCtTSl9oK4vRbTBxnaGTOE51ed8tTqju5E1DSTFZLj7cpvVMKhYOuWg40eIFlnTj91rmF72k6ZINkyf3cKew',}}/>, 
            title:'Onboarding 2',
            subtitle:'Done with React Native2'
            },
        ]}
        />
    );
  };
 

 
  export default OnboardingScreen;