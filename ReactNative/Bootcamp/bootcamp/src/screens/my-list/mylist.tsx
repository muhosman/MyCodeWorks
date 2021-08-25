import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

const MyList = () => {
  const cities = [
    'Istanbul',
    'Ankara',
    'Istanbul',
    'Ankara',
    'Istanbul',
    'Ankara',
    'Istanbul',
    'Ankara',
    'Istanbul',
    'Ankara',
    'Istanbul',
    'Ankara',
    'Istanbul',
    'Ankara',
    'Istanbul',
    'Ankara',
  ];

  //items-> kullanacağım veri -- setItems-> veride değişiklik yapmamı sağlayan fonksiyon
  //parantez içindeki değişken items için başlangıç değerdir.
  const [items, setItems] = React.useState<string[]>(cities);
  const [cars, setCars] = React.useState<string[]>(['Audi']);
  const [title, setTitle] = useState<string>('Suleyman');

  function addItem() {
    setItems([...items, 'Izmir']);
  }

  function changeTitle() {
    setTitle('5');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Add Item" onPress={addItem} />
      <Button title="Change Title" onPress={changeTitle} />
      <Text>{title}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: any) => item}
        data={items}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => console.warn(index)}
            activeOpacity={0.9}
            style={{
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: 'grey',
              borderWidth: index === 0 ? 0 : 0.2,
            }}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default MyList;

const styles = StyleSheet.create({});
