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
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const LoginScreen = ({navigation}) => {

    return (
     <View style={style.container}>
       <AntDesign name="user" size={25} color="#666"/>
       <Text style={{fontFamily:'Kufam-SemiBoldItalic',}}>LoginScreen</Text> 
       <Buton
        title="Click Here"
        onPress={()=>navigation.navigate('Signup')}
       />
     </View>
    );
  };
 
 
  export default LoginScreen;

  const style = StyleSheet.create({

    container:
    {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }


  })