import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Currency from 'react-currency-formatter';

import {selectBasketItems, selectBasketTotal} from '../features/basketSlice';
import {colors} from '../constants';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) {
    return null;
  }

  return (
    <View className="absolute bottom-6 left-4 right-4 w-[calc(100%-32px)] z-50">
      <TouchableOpacity
        className="p-4 rounded-lg flex-row items-center gap-x-1"
        onPress={() => navigation.navigate('Basket')}
        style={{
          backgroundColor: colors.primary,
        }}>
        <Text
          className="text-white font-extrabold text-lg  py-1 px-2"
          style={{
            backgroundColor: colors.offPrimary,
          }}>
          {items.length}
        </Text>
        <Text className="flex-1 text-center font-extrabold text-lg text-white">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
