import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Currency from 'react-currency-formatter';

import {selectRestuarant} from '../features/restuarantSlice';
import {removefromBasket, selectBasketItems} from '../features/basketSlice';
import {colors} from '../constants';
import {urlFor} from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState([]);
  const restuarant = useSelector(selectRestuarant);
  const items = useSelector(selectBasketItems);

  useEffect(() => {
    const groupedItemsCart = items.reduce((results, items) => {
      (results[items.id] = results[items.id] || []).push(items);
      return results;
    }, {});

    setGroupedItems(groupedItemsCart);
  }, [items]);

  return (
    <ScrollView className="bg-white flex-1">
      <View className="bg-gray-100 flex-1">
        <View
          className="bg-white p-5 border-b shadow-sm"
          style={{
            borderBottomColor: colors.primary,
          }}>
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-600 text-center">
              {restuarant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="top-24 right-5">
            <AntDesign name="closecircle" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center gap-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: urlFor(restuarant.image).url(),
            }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-55 min</Text>
          <TouchableOpacity>
            <Text
              style={{
                color: colors.primary,
              }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItems).map(([key, items]) => (
            <View
              className="flex-row items-center gap-x-4 px-5 py-2 bg-white"
              key={key}>
              <Text
                style={{
                  color: colors.primary,
                }}>
                {items.length} x
              </Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="w-12 h-12 bg-gray-300 p-4 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600 font-bold">
                <Currency quantity={items[0]?.price} currency="INR" />
              </Text>
              <TouchableOpacity
                className="text-sm"
                onPress={() => dispatch(removefromBasket({id: key}))}
                style={{
                  color: colors.primary,
                }}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default BasketScreen;
