import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Product from '../../shared/types/product';

const initialBasket: Product[] = [];

const BasketPage = ({navigation, route}: any) => {
  const [basket, setBasket] = useState(initialBasket);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let total = 0;

    basket.forEach(item => {
      total += item.price * item.count;
    });

    setTotal(total);

    if (total > 1000) {
      console.warn('yetersiz bakiye');
    }
  }, [basket, total]);

  useEffect(() => {
    const initialProducts = [
      {count: 5, price: 12},
      {count: 5, price: 25},
      {count: 5, price: 41},
    ];
    Alert.alert(JSON.stringify(route.params.total));

    setTimeout(() => {
      setBasket(initialProducts);
      setIsLoading(false);
    }, 2000);
  }, []);

  function onMinusPressed(index: number) {
    if (basket[index].count < 1) {
      return;
    }
    basket[index].count -= 1;

    setBasket([...basket]);
  }

  function onPlusPressed(index: number) {
    basket[index].count += 1;

    setBasket([...basket]);
  }

  function addProduct(count: number, price: number) {
    const newProduct = {count: count, price: price};

    setBasket([...basket, newProduct]);
  }

  function openPopup() {
    setVisible(true);
  }

  function closePopup() {
    setVisible(false);

    //Alert.alert('closed');
  }

  return (
    <View style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => closePopup()}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button title={'Pop to Top'} onPress={() => navigation.popToTop()} />
          <Button title={'Open Popup'} onPress={openPopup} />
          <Button title={'Add product'} onPress={() => addProduct(4, 15)} />
          <Text>{total}</Text>
          {isLoading ? <ActivityIndicator color={'red'} /> : null}

          <FlatList
            style={{maxHeight: '15%'}}
            keyExtractor={item => item.price.toString()}
            horizontal
            data={basket}
            renderItem={({item, index}) => (
              <View style={{margin: 15}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'red',
                    alignSelf: 'center',
                  }}></View>

                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <TouchableOpacity onPress={() => onMinusPressed(index)}>
                    <AntDesign name="minus" size={30} />
                  </TouchableOpacity>

                  <Text style={{alignSelf: 'center'}}>{item.count}</Text>

                  <TouchableOpacity onPress={() => onPlusPressed(index)}>
                    <AntDesign name="plus" size={30} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </TouchableWithoutFeedback>
      {visible ? (
        <View
          style={{
            width: '80%',
            height: '70%',
            position: 'absolute',
            top: 120,
            left: 40,
            backgroundColor: 'green',
            shadowOpacity: 1,
            shadowRadius: 250,
            shadowColor: 'grey',
            borderRadius: 10,
          }}></View>
      ) : null}
    </View>
  );
};

export default BasketPage;
