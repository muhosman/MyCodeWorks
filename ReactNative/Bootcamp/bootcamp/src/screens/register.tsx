import React from 'react';
import {View, Text, Button} from 'react-native';

const Register = ({navigation}: any) => {
  function onRegister() {
    navigation.navigate('Register');
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button title={'Register'} onPress={() => onRegister} />
    </View>
  );
};

export default Register;
