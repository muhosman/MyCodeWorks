import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';
import CustomButton from '../components/button';
import Card from '../components/card';
import Center from '../components/center';
import styles from '../../style';

import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Colors = {
  red: '#d63031',
  green: '#218c74',
  yellow: '#ffda79',
  purple: '#40407a',
};

function App(props: any) {
  let isLoading = true;

  function tap(title: string) {
    console.warn(title);
  }

  function pressed() {
    console.warn('pressed');
  }

  function fabTapped() {
    console.warn('fabTapped');
  }

  function closeKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar barStyle={'dark-content'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={{...styles.box, backgroundColor: Colors.red}}></View>
          <View style={{...styles.box, backgroundColor: Colors.green}}></View>
          <View style={{...styles.box, backgroundColor: Colors.yellow}}></View>
          <View style={{...styles.box, backgroundColor: Colors.purple}}></View>
        </View>

        {isLoading ? <ActivityIndicator color="red" /> : null}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 30,
          }}>
          <View
            style={{
              ...styles.box,
              ...styles.blackBorderWidth,
              backgroundColor: Colors.red,
            }}></View>
          <View style={{...styles.box, backgroundColor: Colors.green}}></View>
          <View style={{...styles.box, backgroundColor: Colors.yellow}}></View>
          <View style={{...styles.box, backgroundColor: Colors.purple}}></View>

          <Card
            borderRadius={10}
            height={60}
            width={60}
            backgroundColor={'blue'}
          />
        </View>
        <CustomButton
          style={{
            backgroundColor: 'red',
            width: 200,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginVertical: 10,
          }}
        />
        <CustomButton
          activeOpacity={0.8}
          style={{
            backgroundColor: 'yellow',
            width: 400,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginVertical: 10,
          }}
        />

        <Center>
          <Image
            resizeMode={'stretch'}
            source={{
              uri:
                'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
            }}
            style={{width: 250, height: 100}}
          />
        </Center>

        <AntDesign name={'check'} size={30} color={'red'} />
        <EvilIcons name="check" size={30} color={'green'} />

        <View
          style={{
            marginTop: 50,
            backgroundColor: 'red',
            flexDirection: 'row',
            height: 100,
          }}>
          <View style={{...styles.box, backgroundColor: Colors.green}}></View>
          <View style={{}}>
            <View
              style={{
                ...styles.box,
                backgroundColor: Colors.purple,
                alignSelf: 'center',
                marginHorizontal: '25%',
              }}></View>
          </View>
        </View>

        <Button
          title={'Tap'}
          onPress={() => {
            console.log('Kocak');
            tap('Suleyman');
          }}
        />
        <Button title={'Tap'} onPress={() => tap('Suleyman')} />
        <Button title={'Tap'} onPress={pressed} />
        <Pressable onPress={() => console.log('sdfsfs')}>
          <Text>I'm pressable!</Text>
        </Pressable>

        <Image
          resizeMode={'stretch'}
          source={{
            uri:
              'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0,176,3008,1654&wid=4000&hei=2200&scl=0.752',
          }}
          style={{width: 250, height: 100}}
        />

        <Image
          resizeMode={'stretch'}
          source={require('../../nature.jpeg')}
          style={{width: 250, height: 100}}
        />

        {/* <TouchableOpacity
          activeOpacity={0.8}
          onPress={fabTapped}
          style={{
            backgroundColor: Colors.purple,
            width: 70,
            height: 70,
            borderRadius: 35,
            position: 'absolute',
            right: 30,
            bottom: 40,
          }}></TouchableOpacity> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default App;
