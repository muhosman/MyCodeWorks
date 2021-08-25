import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Register from './register';
import Profile from './profile/profile';
import BasketPage from './basket/basket';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = createStackNavigator();
const MyProfile = createStackNavigator();
const Tab = createBottomTabNavigator();

function PostsPage({navigation}: any) {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsPage() {
  return (
    <View style={{flex: 1}}>
      <Text>Details Page</Text>
    </View>
  );
}

function MyProfilePage({navigation}: any) {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsPage() {
  return (
    <View style={{flex: 1}}>
      <Text>Settings Page</Text>
    </View>
  );
}

function HomeStack() {
  return (
    <Home.Navigator>
      <Home.Screen name="Posts" component={PostsPage} />
      <Home.Screen name="Details" component={DetailsPage} />
    </Home.Navigator>
  );
}

function ProfileStack() {
  return (
    <MyProfile.Navigator>
      <MyProfile.Screen name="MyProfile" component={MyProfilePage} />
      <MyProfile.Screen name="Settings" component={SettingsPage} />
    </MyProfile.Navigator>
  );
}

const Initial = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = 'home';
            } else if (route.name === 'MyProfileStack') {
              iconName = 'person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name={'HomeStack'} component={HomeStack} />
        <Tab.Screen name={'MyProfileStack'} component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Initial;
