import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Currency from 'react-currency-formatter';

import {selectRestuarant} from '../features/restuarantSlice';
import {
  removefromBasket,
  selectBasketItems,
  selectBasketTotal,
} from '../features/basketSlice';
import {colors} from '../constants';
import {urlFor} from '../sanity';

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [groupedItems, setGroupedItems] = useState([]);
  const restuarant = useSelector(selectRestuarant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedItemsCart = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItems(groupedItemsCart);
  }, [items]);

  return (
    <SafeAreaView className="bg-white flex-1 relative">
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
            className="absolute top-4 right-4">
            <AntDesign name="closecircle" size={25} color={colors.primary} />
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
          {Object.entries(groupedItems).map(([key, item]) => (
            <View
              className="flex-row items-center gap-x-4 px-5 py-2 bg-white"
              key={key}>
              <Text
                style={{
                  color: colors.primary,
                }}>
                {item.length} x
              </Text>
              <Image
                source={{
                  uri: urlFor(item[0]?.image).url(),
                }}
                className="w-12 h-12 bg-gray-300 p-4 rounded-full"
              />
              <Text className="flex-1">{item[0]?.name}</Text>
              <Text className="text-gray-600 font-bold">
                <Currency quantity={item[0]?.price} currency="INR" />
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

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-lg font-bold">Subtotal</Text>
            <Text className="text-lg font-bold">
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-lg font-bold">Delivery Fee</Text>
            <Text className="text-lg font-bold">
              <Currency quantity={50} currency="INR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-lg font-bold">Order Total</Text>
            <Text className="text-lg font-bold">
              <Currency quantity={basketTotal + 50} currency="INR" />
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
            }}
            onPress={() => navigation.navigate('OrderPrepare')}
            className="px-5 py-3 rounded-md">
            <Text className="text-white text-center text-xl font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
