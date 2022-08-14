import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Currency from 'react-currency-formatter';
import Entypo from 'react-native-vector-icons/Entypo';

import {urlFor} from '../sanity';

const DishRow = ({id, name, description, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && 'border-b-0'
        }`}
        onPress={() => setIsPressed(!isPressed)}>
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
      {isPressed && (
        <View className="bg-white px-6 border-gray-200 border-b">
          <View className="flex-row items-center gap-x-2 pb-2">
            <TouchableOpacity>
              <Entypo
                name="circle-with-minus"
                size={28}
                color="#00ccbb"
                className="opacity-40"
              />
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <Entypo
                name="circle-with-plus"
                size={28}
                color="#00ccbb"
                className="opacity-40"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
