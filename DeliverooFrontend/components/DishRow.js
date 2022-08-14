import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Currency from 'react-currency-formatter';

import {urlFor} from '../sanity';

const DishRow = ({id, name, description, price, image}) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View className="flex-row pb-4 px-3 gap-x-2">
        <View className="flex-1">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">
            <Currency quantity={price} currency="INR" />
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 rounded-sm bg-gray-300 border border-gray-700"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
